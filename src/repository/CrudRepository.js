const { where } = require("sequelize");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try{
            const response = await this.model.create(data);
            return response;
        }catch(error) {
            console.log("Something went wrong in Creating entry in");
            throw {error};
        }
    }

    async destroy(modelId) {
        try {
            await this.model.destroy({
                where: {
                    id : modelId
                }
            });
            return true;
        } catch (error) {
            console("something went wrong while removing entry");
            throw {error};
        }
    }

    async update(modelId,data) {
        try {
            const response = await this.model.update(data,{
                where: {
                    id: modelId
                }
            });
            return response;
        } catch (error) {
            console.log("Something went wrong while updating entry");
            throw {error};
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.log("Something went wrong while fetching data");
            throw {error};
        }
    }

    async get(modelId) {
        try {
            const response = await this.model.findByPk(modelId);
            return response;
        } catch (error) {
            console.log("Something went wrong while finding data");
            throw {error};
        }
    }
}


module.exports = CrudRepository;