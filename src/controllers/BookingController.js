const BookingService = require("../services/BookingService");
const bookingService = new BookingService();


const blockSeats = async (req,res) => {
    try {
        const { showId, seatIds, userId } = req.body;
        const status = await bookingService.blockSeats(showId,
                                                        seatIds,
                                                        userId
                                                    );

        return res.status(200).json({
            success: true,
            error: false,
            message: "Successfully fetched status of seats",
            data: status
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error,
            message: "failed to fetch status of seats",
            data: {}
        });
    }
}

const clearAllSeatLocks = async (req,res) => {
    try {
        await bookingService.clearAllSeatLocks();
        return res.status(200).json({
            success: true,
            error: false,
            message: "Successfully clear Redis cache"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: true,
            message: "Error while clearing Redis cache"
        });
    }
}

const bookSeats = async (req,res) => {
    try {
        const ticket = await bookingService.bookTicket(
            req.body.showId,
            req.body.seatIds,
            req.body.userId
        );
        return res.status(200).json({
            success: true,
            error: false,
            message: "Booking Successful",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: true,
            error: false,
            data: {},
            message: "Failed Booking"
        });
    }
}


module.exports = {
    blockSeats,
    clearAllSeatLocks,
    bookSeats
}

