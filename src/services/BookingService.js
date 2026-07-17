const CacheService = require("./CacheService");
const { ShowSeatRepository,TicketRepository, UserRepository, ShowRepository } = require("../repository/index");
const { redisClient } = require("../config/RedisConfig");
const { sequelize } = require("../models");
const cacheService = new CacheService();
const showSeatRepository = new ShowSeatRepository();
const ticketRepository = new TicketRepository();
const userRepository = new UserRepository();
const showRepository = new ShowRepository();

class BookingService {
    /**
     * book a seat
     * show all seats
     */

    async blockSeats(showId,seatIds,userId) {
        console.log("Printing Cache before logic");
        console.log(await cacheService.getAllKeysAndValues());
        // 1. we will first check if the seats are available or not
        // 1.a - check if the seats are not booked already 

        const showSeats = await showSeatRepository.findAllByShowIdAndSeatIdIn(showId,seatIds);
        console.log("Printing show seats");
        showSeats.forEach((seat) => {
            console.log(seat.id,seat.showSeatStatus);
        });

        for(const seat of showSeats) {
            if(seat.showSeatStatus == 'BOOKED') return false;
        }
        // 1.b - check if the seats are locked in redis already

        for(const seat of showSeats) {
            const user = await cacheService.get(`showSeat: ${seat.id}`);

            if(user != null) return false;
        }



        // 2. if all the seats are available then we will block the seats in redis
        // (seatId - userId)

        for(const seat of showSeats) {
            // await cacheService.save(`seatId-${seat.id}`,`userId-${user.id}`);

            try {
                console.log("Saving seat:", seat.id);

                await cacheService.save(
                    `seatId-${seat.id}-userId-${userId}`,
                    "LOCKED"
                );

                console.log("Saved successfully");
            } catch (err) {
                console.error(err);
            }
        }

        console.log("printing cache after logic");
        console.log(await cacheService.getAllKeysAndValues());

        return true;
    }

    async bookTicket(showId,seatIds,userId) {
        // 1. Check Redis lock for every seat
        for(const seatId of seatIds) {
            const status = await cacheService.get(`seatId-${seatId}-userId-${userId}`);
            console.log(
                `status: ${status} seatId: ${seatId} userId: ${userId}`
            );

            if(status == null) {
                return null;
            }
        }

        console.log("All seats available");
        // 2. Fetch User & Show
        const user = await userRepository.get(userId);
        const show = await showRepository.get(showId);


        // 3. Create ticket & update seats
        const ticket = await this.createTicketAndBookedSeats(showId,seatIds,userId);
        console.log("Ticket created");
        return ticket;

    }

    async createTicketAndBookedSeats(show,seatIds,user) {
        const transaction = await sequelize.transaction();

        try {
            const ticket = await ticketRepository.create({
                userId: user,
                showId: show,
                status: "BOOKED",
                amount: 1000
            },transaction);

            // update all showSeats
            await showSeatRepository.updateShowSeatsBulk(seatIds,ticket.id,transaction);

            await transaction.commit();
            return ticket;
        } catch (error) {
            await transaction.rollback();
            throw {error};
        }
    }

    async clearAllSeatLocks() {
        await cacheService.deleteAll();
    }
}


module.exports = BookingService;