const express = require('express');
const app = express();

const {PORT} = require('./src/config/envConfig');


app.listen(PORT,() => {
    console.log(`Server listens on PORT ${PORT}`)
});

