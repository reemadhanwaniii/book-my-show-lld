const { Show } = require("../models/index");
const CrudRepository = require("./CrudRepository");

class ShowRepository extends CrudRepository {
    constructor() {
        super(Show)
    }
}

module.exports = ShowRepository;