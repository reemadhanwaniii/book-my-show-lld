const CrudRepository = require("./CrudRepository");
const { Movie } = require("../models/index");

class MovieRepository extends CrudRepository {
    constructor() {
        super(Movie);
    }
}

module.exports = MovieRepository;