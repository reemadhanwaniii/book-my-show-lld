const CrudService = require("./CrudService");
const {UserRepository} = require("../repository/index");

class UserService extends CrudService {
    constructor() {
        const userRepository = new UserRepository();
        super(userRepository);
    }
}

module.exports = UserService;