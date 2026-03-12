//Payment processing
import { reduceStock } from './product.js'
import { getCartItems, getCartTotal, clearCart } from './cart.js'
import { applyDiscount } from './discount.js'
export function validatePaymentMethod(method){
  return ['card','upi','cod'].includes(method)
}
export function processPayment(paymentMethod,couponCode=null){
  const items=getCartItems()
  if(items.length===0)
    return {status:'failed',message:'Cart is empty'}

  if(!validatePaymentMethod(paymentMethod))
    return { status:'failed',message:'Invalid payment method'}
  const subtotal=getCartTotal()
  const discountDetails=applyDiscount(subtotal,couponCode,items)
  items.forEach(item=>{
    reduceStock(item.id,item.quantity)
  })
  clearCart()
  return {
    orderId:generateOrderId(),items,subtotal:discountDetails.originalTotal,discount:discountDetails.discount,total:discountDetails.finalTotal,paymentMethod,status:'success',message:'Order placed successfully'}
}
function generateOrderId() {
  return 'ORD'+Date.now()
}