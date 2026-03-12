/*Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter */
function rest_ex(...a){
    let sum=a.reduce((accumulator,element)=>accumulator+element)
    console.log("Sum = ",sum)//Sum is returned
}
rest_ex(1,2,3,4,5,6,7,8,9,10)//Parameters