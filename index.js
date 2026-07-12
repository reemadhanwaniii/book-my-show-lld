const express = require('express');
const bodyParser = require("body-parser");
const ApiRoutes = require('./src/routes/index');
const {PORT} = require('./src/config/envConfig');


const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use("/api",ApiRoutes)
    app.listen(PORT,() => {
        console.log(`Server listens on PORT ${PORT}`)
    });
}


setupAndStartServer();

