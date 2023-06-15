const { v4: uuidv4 } = require('uuid');

const products = [
    {
        id: uuidv4(),
        name: "Sugar",
        price: 140
    },
    {
        id: uuidv4(),
        name: "Salt",
        price: 50
    }
]


module.exports = products;