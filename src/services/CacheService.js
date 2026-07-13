const {connectRedis} = require("../config/RedisConfig");

class CacheService {
    // save get delete
    async save(key,value) {
        try {
            await connectRedis.set(key,value,{
                EX: 500
            });
            // await connectRedis.setX(key,500,value)
            console.log(`Saved key : ${key}`);
        } catch (error) {
            console.log("Something went while saving data in redis");
            throw {error};
        }
    }

    async delete(key) {
        try {
            await connectRedis.del(key);
            console(`Deleted key: ${key}`);
        } catch (error) {
            console.log("Something went while saving data in redis");
            throw {error};
        }
    }

    async get(key) {
        try {
            return await connectRedis.get(key);
        } catch (error) {
            console.log("Something went while saving data in redis");
            throw {error};
        }
    }
}


module.exports = CacheService;