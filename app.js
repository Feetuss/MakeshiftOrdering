const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000 || process.env.port;
const productRouter = require('./backend/route/productsRoute');
const ordersRouter = require('./backend/route/ordersRoute');
const usersRouter = require('./backend/route/usersRoute');
const connectToDatabase = require('./backend/service/database/database');

app.use(bodyParser.json()); 



app.listen(port, () =>{
    console.log("Now listening to port 3000");
});
connectToDatabase();
app.use('/',ordersRouter);
app.use('/',productRouter);
app.use('/',usersRouter);
module.exports = app;

