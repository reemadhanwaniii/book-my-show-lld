const express = require('express');
const bodyParser = require("body-parser");
const ApiRoutes = require('./src/routes/index');
const { PORT } = require('./src/config/envConfig');
const { connectRedis } = require("./src/config/RedisConfig");


const setupAndStartServer = async () => {
    const app = express();
    await connectRedis();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use("/api",ApiRoutes)
    app.listen(PORT,() => {
        console.log(`Server listens on PORT ${PORT}`)
    });
}


setupAndStartServer();

