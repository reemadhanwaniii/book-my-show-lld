const express = require("express");
const router = express.Router();
const MovieController = require("../../controllers/MovieController");

router.get('/movie',MovieController.getAll);
router.get('/movie/:id',MovieController.get);

module.exports = router;