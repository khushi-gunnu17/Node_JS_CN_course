// export default takes three things --> HoistedDeclaration => a function (but not with arrow fuction) 
// class 
// assignment expression 

export const validateRequest = (req, res, next) => {

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
    next()  // will call the next middleware
}

// At the end 
// export default validateRequest

// goal : to make loosely coupled systems , so that easier to make changes to 