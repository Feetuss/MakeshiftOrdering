const express = require('express')
const app = express();
const port = 3000 || process.env.port;
const productRouter = ('./backend/route/productsRoute');


app.listen(port, () =>{
    console.log("Now listening to port 3000");
});

app.use('/',productRouter);
app.use(app.productRouter);



module.exports = app;

