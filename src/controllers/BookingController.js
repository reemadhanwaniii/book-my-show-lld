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


module.exports = {
    blockSeats
}