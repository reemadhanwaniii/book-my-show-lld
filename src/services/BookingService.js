class BookingService {
    /**
     * book a seat
     * show all seats
     */

    async blockSeats(showId,seatId) {

    }
}


/**
 * the issue with blockSeats function is let say we have to book 5 seats,
 * them we have to call this function 5 times
 * Assume this blocking is happening directly on database
 * let say we have to lock 5 seats we have to make 5 queris on db(pessimistic locking)
 * then using those 5 queries we are seperately creating lock that is very bad sceanrio to go for
 * 
 * 
 * n+1 problem (read about it)
 * 
 * type of show id here is long
 */