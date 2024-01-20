// const express = require("express")
import express from 'express'
import path from "path"
import productsController from './src/controllers/product.controller.js'
import ejsLayouts from 'express-ejs-layouts'

const server = express()

// setup view engine settings
server.set("view engine", "ejs")
// pat of our views folder, have to give the relative root folder 
server.set("views", path.join(path.resolve(), "Inventory_Managemnt", "src", "views"))     


server.use(ejsLayouts)


// create an instance of productController
const productcontroller = new productsController()

server.get("/", productcontroller.getProducts.bind(productcontroller))


server.listen(3400, () => {
    console.log('Server is running on the port 3400.');
})