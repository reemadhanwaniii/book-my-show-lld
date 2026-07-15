const { Show } = require("../models/index");
const show = require("../models/show");
const CrudRepository = require("./CrudRepository");

class ShowRepository extends CrudRepository {
    constructor() {
        super(show)
    }
}

module.exports = ShowRepository;