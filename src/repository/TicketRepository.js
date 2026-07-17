const { Ticket }= require("../models");
const CrudRepository = require("./CrudRepository");

class TicketRepository extends CrudRepository{
    constructor() {
        super(Ticket);
    }
}

module.exports = TicketRepository;