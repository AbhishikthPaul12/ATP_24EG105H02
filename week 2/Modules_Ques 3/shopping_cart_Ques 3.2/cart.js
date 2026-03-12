// Shopping cart operations
import {getProductById,checkStock} from './product.js'//Imports other modules
let cartItems=[]//Inititalizes empty cart
export function addToCart(productId,quantity){
  const product=getProductById(productId)
  if(!product) 
    return 'Product not found'//Checks if product is in the cart or not

  if(!checkStock(productId,quantity))
    return 'Insufficient stock'
  const existing=cartItems.find(item=>item.productId===productId)//Checks stock

  if(existing) 
    existing.quantity+=quantity//If existing, adds to quantity
  else
    cartItems.push({ productId, quantity})//Adds product to cart
  return 'Item added to cart'
}
export function removeFromCart(productId){
  cartItems = cartItems.filter(item=>item.productId!==productId)//Removes from cart
  return 'Item removed from cart'
}
export function updateQuantity(productId,newQuantity){
  if(!checkStock(productId,newQuantity))
    return 'Insufficient stock'
  const item=cartItems.find(i=>i.productId===productId)//Checks if product is in cart or not
  if(!item) return 'Item not found in cart'//No existence if not found
  item.quantity=newQuantity
  return 'Quantity updated'//If exists, quantity is updated
}
export function getCartItems(){
  return cartItems.map(item=>{
    const product=getProductById(item.productId)
    return {...product,quantity:item.quantity,total:product.price*item.quantity}//Returns particular items
  })
}
export function getCartTotal(){
  return getCartItems().reduce((sum,item)=>sum+item.total,0)//Calculates sum
}
export function clearCart(){
  cartItems=[]//Empties the cartS
}