const CrudService = require("./CrudService");
const {TicketRepository} = require("../repository/index");

class TicketService extends CrudService {
    constructor() {
        const ticketRepository = new TicketRepository();
        super(ticketRepository);
    }
}

module.exports = TicketService;