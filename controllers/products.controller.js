let products = require("../models/products.model");
const { v4: uuidv4 } = require('uuid');

//Get products controller
const getProducts = (req, res)=>{
    res.status(200).json({products});
}


//Add a new product
const postProducts = (req, res)=>{
    const newProduct = {
        id: uuidv4(),
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct);
    res.status(201).json({
        message: "New product added successfully",
        products
    })
}


//Update an existing product
const updateProduct = (req, res)=>{
    const selectedProductId = req.params.id;
    const {name, price} = req.body;
    products.filter((selectedProduct)=> selectedProduct.id === selectedProductId).map((product)=>{
        product.name = name;
        product.price = price;
    });

    res.status(200).json({
        message: "Product updated successfully",
        products
    });
   
}


//Delete an product
const deleteProduct = (req, res)=>{
    const requestedId = req.params.id;
    products = products.filter((product)=> product.id !== requestedId);

    res.status(200).json({
        message: "Product removed successfully",
        products
    })
}


module.exports = {getProducts, postProducts, updateProduct, deleteProduct};