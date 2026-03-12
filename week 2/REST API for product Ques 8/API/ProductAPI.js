//Create mini express application(Seperate Route)
import exp from 'express'
export const productApp=exp.Router()//Does not contain HTTP Server instance so we call Router
//Any number of APIs can be created provided that a mini express application is created

//Create Product API

//Test Data
let products=[]

//Create new products({productId,name,brand,price})
productApp.post('/products',(req,res)=>{
    //Get product from client
    let newProduct=req.body
    //Create product
    products.push(newProduct)
    //Send response
    res.json({message:"Product created"})
})
//Read all products
productApp.get('/products',(req,res)=>{
    //Read all products and send response
    res.json({message:"All products",payload:products})
})
//Read all products by brand
productApp.get('/products/:brand',(req,res)=>{
    //Get product brand from client
    let productBrand=req.params.brand
    //Find product with the given brand
    let product=products.find(productObj=>productObj.brand===productBrand)
    //If product not found
    if(product===undefined){
        return res.json({message:"Product not found"})
    }
    //Send response
    res.json({message:product})
})
//Update a product
productApp.put('/products',(req,res)=>{
    //Get product from client
    let modifiedProduct=req.body
    let index=products.findIndex(product=>product.id===modifiedProduct.id)
    //If product not found
    if(index===-1){
        return res.json({message:"Product not found"})
    }
    //Update the product with index
    products.splice(index,1,modifiedProduct)
    //Send response
    res.json({message:"Product updated"})
})
//Delete a product by id
productApp.delete('/products/:productId',(req,res)=>{
    //Get product id from client
    let delProductId=Number(req.params.productId)
    let index=products.findIndex(productObj=>productObj.productId===delProductId)
    //If product not found
    if(index===-1){
        return res.json({message:"Product not found to delete"})
    }
    //Delete product by ID
    products.splice(index,1)
    //Send response
    res.json({message:"Product deleted"})
})