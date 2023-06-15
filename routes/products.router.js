const { getProducts, postProducts, updateProduct, deleteProduct } = require("../controllers/products.controller");

const router = require("express").Router();

//Get products
router.get("/", getProducts);

//Add product
router.post("/", postProducts);

//Update product
router.put("/:id", updateProduct);

//Delete product]
router.delete("/:id", deleteProduct);







module.exports = router;