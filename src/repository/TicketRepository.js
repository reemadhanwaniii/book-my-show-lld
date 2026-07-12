const ticket = require("../models/ticket");
const CrudRepository = require("./CrudRepository");

class TicketRepository extends CrudRepository{
    constructor() {
        super(ticket);
    }
}

module.exports = TicketRepository;