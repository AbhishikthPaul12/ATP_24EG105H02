/*Exercise 2: Update User Object*/
//Test Data
let user = {
    name: "Ravi",
    city: "Hyderabad"
}
// new object updatedUser
let updatedUser={}
//Copying all properties from user and also adding age 25
updatedUser={...user,age:25}
//Both objects printed
console.log("Original object: ",user)
console.log("Updated object: ",updatedUser)
//Objects differ from one another