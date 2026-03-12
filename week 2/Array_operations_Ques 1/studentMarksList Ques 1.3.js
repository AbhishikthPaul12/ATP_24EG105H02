/*Assignment 1.3: Student Marks List*/

//Test data
const marks = [78, 92, 35, 88, 40, 67]

//filter() marks ≥ 40 (pass marks)
const passMarks=marks.filter((mark)=>mark>=40)
console.log("Pass marks: ",passMarks)

//map() to add 5 grace marks to each student
const graceMarks=marks.map((mark)=>mark+5)
console.log("Scores after grace marks: ",graceMarks)

//reduce() to find highest mark
const highestMark=marks.reduce((accumulator,mark)=>accumulator>mark?accumulator:mark)
console.log("Highest mark: ",highestMark)

//find() first mark below 40
const below40=marks.find((mark)=>mark<40)
console.log("First mark below 40: ",below40)

//findIndex() of mark 92
const indexOf92=marks.findIndex((mark)=>mark===92)
console.log("Index of 92: ",indexOf92)