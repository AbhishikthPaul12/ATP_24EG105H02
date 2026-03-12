//Create HTTP Server
//Express application internally contains HTTP Server + many things
//Here, we can create our own web server. HTTP Server is a software. If we install it on our system, our system is a web server.
import exp, { response } from "express"
const app=exp()//Creates an express application and returns the HTTP Server
import {userApp} from "./APIs/UserAPI.js"
import { productApp } from "./APIs/ProductAPI.js"
//Use body parser middleware
app.use(exp.json())//In built-middleware. json method returns a function 

//Create custom middleware(Middleware is a function)
function middleware1(req,res,next){
    //req- receives request, res- sends response, next- forwards to next middleware
    //Send  response from middleware
    //res.json({message:"This response is from middleware1"})
    console.log("Middleware1 executed")
    next()//Goes to infinite waiting time without this line
}

function middleware2(req,res,next){
    //req- receives request, res- sends response, next- forwards to next middleware
    //Send  response from middleware
    //res.json({message:"This response is from middleware2"})
    console.log("Middleware2 executed")
    next()
}

function middleware3(req,res,next){
    //res.json("Middleware3 executed")
    console.log("Middleware3 executed")
    next()
}

function middleware4(req,res,next){
    console.log("Middleware4 executed")
    next()
}
//Use middleware
app.use(middleware1)
app.use(middleware2)
app.use(middleware3)
app.use(middleware4)
//Server errors always are sent in HTML format

//Now, we need to specify which route we need to forward the request

//Forward request to userAPI if path starts with /user-api
app.use('/user-api',userApp)// /user-api is the middleware here

//Forward request to productAPI if path starts with /product-api
app.use('/product-api',productApp)// /product-api is the middleware here

//Set a port number
const port=3000

//Assigns port number to HTTP Server
app.listen(port,()=>console.log(`Server listening on port ${port} ...`))

