const {MovieService} = require("../services/index");
const movieService = new MovieService();


const create = async (req,res) => {
    try {
        const movieData = {
            name: req.body.name,
            poster: req.body.poster
        }
        const response = await movieService.create(movieData);
        return res.status(201).json({
            message: "Successfully created the movie",
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error,
            data: {},
            message: "Error while creating Movie"
        })
    }
}


const update = async(req,res) => {
    try {
        const response = await movieService.update(req.params.id,req.body);
        return res.status(200).json({
            success: true,
            error: {},
            message: "Successfully updates movie",
            data: response
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error,
            data: {},
            success: false,
            message: "Failed to update movie data"
        })
    }
}

const get = async (req,res)=>{
    try {
        const response = await movieService.get(req.params.id);
        return res.status(200).json({
            success: true,
            error: {},
            data: response,
            message: "Successfully fetch movie"
        }) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error,
            data: {},
            message: "failed to fetch movie"
        })
    }
}

const getAll = async(req,res) => {
    try {
        const response = await movieService.getAll();
        return res.status(200).json({
            success: true,
            error: false,
            data: response,
            message: "Successfully fetched all movies"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error,
            message: "failed to fetch movie",
            data: {}
        })
    }
}

const destroy = async (req,res) =>{
    try {
        const response = await movieService.destroy(req.params.id);
        return res.status(200).json({
            success: true,
            error: {},
            data: response,
            message: "successfully deleted movie"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error,
            data: {},
            message: "failed to delete movie"
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}