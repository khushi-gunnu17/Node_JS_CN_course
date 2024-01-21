import path from "path"
import ProductModel from "../models/product.model.js"

export default class productsController {

    // return the HTML file which we have in views folder
    getProducts(req, res, next) {

        let products = ProductModel.get()
        // console.log(products);

        res.render("index", {products:products})

        // return res.sendFile(
        //     path.join(path.resolve(), "src", "views", "product.html")
        // )
    }

    getAddForm(req, res, next) {
        return res.render("new-product", {errorMessage:null})       // data field not necessary here, it is an optional field also  
    }

    addNewProduct(req, res, next) {
        // access data from form.
        // console.log(req.body);  // undefined

        // validating data
        const {name, price, imageURL} = req.body;
        let errors = [];

        if(!name || name.trim() == '') {
            errors.push("Name is Required.")
        }

        if(!price || parseFloat(price) < 1) {
            errors.push("Price must be a positive value.")
        }

        try {
            const validURL = new URL("https://" + imageURL);
        } catch (error) {
            errors.push("URL is invalid.")
        }

        if(errors.length > 0) {
            return res.render('new-product', {errorMessage : errors[0]})
        }

        ProductModel.add(req.body)
        let products = ProductModel.get()
        return res.render("index", {products})
    }
}