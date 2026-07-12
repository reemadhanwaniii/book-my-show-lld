const showseat = require("../models/showseat");
const CrudRepository = require("./CrudRepository");

class ShowSeatRepository extends CrudRepository{
    constructor() {
        super(showseat);
    }
//    return list of all show seats
   async findAllByShowId(showId) {

   }
}

module.exports = ShowSeatRepository;