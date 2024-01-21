import path from "path"
import ProductModel from "../models/product.model.js"

export default class productsController {

    // return the HTML file which we have in views folder
    getProducts(req, res) {

        let products = ProductModel.get()
        // console.log(products);

        res.render("index", {products:products})

        // return res.sendFile(
        //     path.join(path.resolve(), "src", "views", "product.html")
        // )
    }

    getAddForm(req, res) {
        return res.render("new-product")       // data field not necessary here, it is an optional field also  
    }

    addNewProduct(req, res) {
        // access data from form.
        // console.log(req.body);  // undefined
        
        ProductModel.add(req.body)
        let products = ProductModel.get()
        return res.render("index", {products})
    }
}