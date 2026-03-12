//Product Database
//Data
const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
]
export function getProductById(id){
  return products.find(product=>product.id===id)//Returns a product by id
}
export function getAllProducts(){
  return products//Returns all products
}
export function getProductsByCategory(category){
  return products.filter(product=>product.category===category)//Returns a product by category
}
export function searchProducts(query){
  return products.filter((product)=>product.name.toLowerCase().includes(query.toLowerCase()))//Checks a product by query assosciated
}
export function checkStock(productId,quantity){
  const product=getProductById(productId)
  return product&&product.stock>=quantity//Checks if the product is in stock or not
}
export function reduceStock(productId, quantity){
  const product=getProductById(productId);
  if(product)
    product.stock-=quantity;//Reduces stock
}
//All functions are exported to other modules