/*ASSIGNMENT 2.1: You are building a shopping cart summary for an e-commerce website.*/

//Test Data
 const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
]  

//filter() to get only inStock products
const inStockProducts=cart.filter((property)=>property.inStock===true)
console.log("Products in stock: ",inStockProducts)//Products in stock

//map() to create a new array with:  { name, totalPrice }
const newArray=cart.map((property)=>({name:property.name,totalPrice:property.price*property.quantity}))
console.log("New Array: ",newArray)//Name and price details

//reduce() to calculate grand total cart value
const grandTotal=cart.reduce((accumulator,element)=>accumulator+(element.price*element.quantity),0)
console.log(`Grand total: ${grandTotal}`)//Total amount

//find() to get details of "Mouse"
const detailsOfMouse=cart.find((property)=>property.name==="Mouse")
console.log("Details of Mouse: ",detailsOfMouse)//Details of mouse

//findIndex() to find the position of "Keyboard"
const indexOfKeyboard=cart.findIndex((property)=>property.name==="Keyboard")
console.log(`Index of Keyboard: ${indexOfKeyboard}`)//Keyboard position