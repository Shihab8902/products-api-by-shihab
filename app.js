const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const productsRouter = require('./routes/products.router');

app.get("/", (req, res)=>{
    res.send("Welcome to the product api.");
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/products", productsRouter);


module.exports = app;