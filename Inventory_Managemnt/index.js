// const express = require("express")
import express from 'express'
import productController from './src/controllers/product.controller'

const server = express()

// create an instance of productController
const productcontroller = new productController()

server.get("/", productcontroller.getProducts())

server.use(express.static('src/views'))

server.listen(3400)