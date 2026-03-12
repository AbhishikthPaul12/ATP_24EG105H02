/*Exercise 1: Copy & Extend an Array*/
//Test Data
 let fruits = ["apple", "banana"]
//new array moreFruits
let moreFruits=[]
//Copying all fruits and also adding orange at the end using spread
moreFruits=[...fruits,"orange"]
//Printing both arrays
console.log("Original array: ",fruits)
console.log("Modified array: ",moreFruits)
//Arrays differ from each other