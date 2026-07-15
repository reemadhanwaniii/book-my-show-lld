const {redisClient} = require("../config/RedisConfig");

class CacheService {
    // save get delete
    async save(key,value) {
        try {
            await redisClient.set(key,value,{
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
            await redisClient.del(key);
            console(`Deleted key: ${key}`);
        } catch (error) {
            console.log("Something went while saving data in redis");
            throw {error};
        }
    }

    async get(key) {
        try {
            return await redisClient.get(key);
        } catch (error) {
            console.log("Something went while saving data in redis");
            throw {error};
        }
    }

    async getAllKeysAndValues() {
          try {
            const keys = await redisClient.keys('*');
            const result = {};
            for (const key of keys) {
                const value = await redisClient.get(key);
                result[key] = value;
            }
            return result;
        } catch (error) {
            console.log("Something went while saving data in redis");
            throw {error};
        }
    }

    async deleteAll() {
        await redisClient.flushAll();
    }
}


module.exports = CacheService;