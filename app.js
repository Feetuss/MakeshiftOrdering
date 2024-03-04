const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000 || process.env.port;
const productRouter = require('./backend/route/productsRoute');
const ordersRouter = require('./backend/route/ordersRoute');




app.listen(port, () =>{
    console.log("Now listening to port 3000");
});

app.use('/',productRouter);

module.exports = app;

