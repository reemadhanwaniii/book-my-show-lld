const CacheService = require("./CacheService");
const { ShowSeatRepository,TicketRepository } = require("../repository/index");
const cacheService = new CacheService();
const showSeatRepository = new ShowSeatRepository();
const ticketRepository = new TicketRepository();

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
                    `seatId-${seat.id}`,
                    `userId-${userId}`
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
        // 1. in redis check if the user has lock for all the seats that they are trying to book
        // 2. if the use has lock for all the seats then we will book the seats
        // 3. create a new ticket
        // 2.a go to all the rows of show_seats and update status to booked in one query
        // 2.b update ticket id also
    }

    async createTicketAndBookedSeats(showId,seatIds,userId) {
        // create a new Ticket
        // set amount should be calculated
        // fetch user ,set user
    }
}


module.exports = BookingService;