import path from "path"
import ProductModel from "../models/product.model"

export default class productsController {

    // return the HTML file which we have in views folder
    getProducts(req, res) {

        let products = ProductModel.get()
        console.log(products);

        res.render("index", {products:products})

        // return res.sendFile(
        //     path.join(path.resolve(), "src", "views", "product.html")
        // )
    }
}