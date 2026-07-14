const express = require("express");
const router = express.Router();
const MovieController = require("../../controllers/MovieController");
const BookingController = require("../../controllers/BookingController");

router.get('/movie',MovieController.getAll);
router.get('/movie/:id',MovieController.get);

router.post('/block',BookingController.blockSeats);

module.exports = router;