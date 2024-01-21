// const express = require("express")
import express from 'express'
import path from "path"
import productsController from './src/controllers/product.controller.js'
import ejsLayouts from 'express-ejs-layouts'
import { validateRequest } from './src/middlewares/validation.middleware.js'

const server = express()


// parse form data
server.use(express.urlencoded({extended: true}))

// setup view engine settings
server.set("view engine", "ejs")
// pat of our views folder, have to give the relative root folder 
server.set("views", path.join(path.resolve(), "Inventory_Managemnt", "src", "views"))     




server.use(ejsLayouts)

// create an instance of productController
const productcontroller = new productsController()



server.get("/", productcontroller.getProducts.bind(productcontroller))
server.get("/new", productcontroller.getAddForm)
server.post("/", validateRequest, productcontroller.addNewProduct)

server.listen(3400, () => {
    console.log('Server is running on the port 3400.');
})