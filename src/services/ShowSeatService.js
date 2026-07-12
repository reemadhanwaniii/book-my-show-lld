const CrudService = require("./CrudService");
const { ShowSeatRepository } = require("../repository/index");

class ShowSeatService extends CrudService {
    constructor() {
        const showSeatRepository = new ShowSeatRepository();
        super(showSeatRepository);
    }
}

module.exports = ShowSeatService;