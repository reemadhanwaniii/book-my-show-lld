const CrudService = require("./CrudService");
const {MovieRepository} = require("../repository/index");

class MovieService extends CrudService {
    constructor() {
        const movieRepository = new MovieRepository();
        super(movieRepository);
    }
}

module.exports = MovieService;