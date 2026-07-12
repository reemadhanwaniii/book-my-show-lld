const user = require("../models/user");
const CrudRepository = require("./CrudRepository");

class UserRepository extends CrudRepository{
    constructor() {
        super(user);
    }
}

module.exports = UserRepository;