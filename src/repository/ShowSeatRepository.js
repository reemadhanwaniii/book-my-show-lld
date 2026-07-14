const { Op } = require('sequelize');

const {ShowSeat} = require("../models");
const CrudRepository = require("./CrudRepository");

class ShowSeatRepository extends CrudRepository{
    constructor() {
        super(ShowSeat);
    }
//    return list of all show seats
   async findAllByShowId(showId) {

   }

   async findAllByShowIdAndSeatIdIn(showId,seatIds) {
    console.log(ShowSeat);
        return await ShowSeat.findAll({
                    where: {
                        showId,
                        seatId: {
                            [Op.in]: seatIds
                        }
                    }
                });
   }
}

module.exports = ShowSeatRepository;