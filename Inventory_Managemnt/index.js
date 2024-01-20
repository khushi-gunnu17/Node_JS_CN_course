// const express = require("express")
import express from 'express'
import path from "path"
import productsController from './src/controllers/product.controller'

const server = express()

// setup view engine settings
server.set("view engine", "ejs")
// pat of our views folder
server.set("views", path.join(path.resolve(), "src", "views"))     

// create an instance of productController
const productcontroller = new productsController()

server.get("/", productcontroller.getProducts())

server.use(express.static('src/views'))

server.listen(3400)