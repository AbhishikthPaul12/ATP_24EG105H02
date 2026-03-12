/*ASSIGNMENT 2.2: Student Performance Dashboard*/

//Test Data
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
]

//filter() students who passed (marks ≥ 40)
const passedStudents=students.filter((element)=>element.marks>=40)
console.log("Passed students: ",passedStudents)//Pass students

/* map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D 
*/
const grades=students.map((student)=>{
    if(student.marks>=90)student.grade="A"
    else if(student.marks>=75)student.grade="B"
    else if(student.marks>=60)student.grade="C"
    else student.grade="D"
    return student
})
console.log("Students with their Grades: ",students)//Grades

//reduce() to calculate average marks
const averageMarks=students.reduce((accumulator,student)=>accumulator+student.marks,0)/students.length
console.log("Average marks: ",averageMarks)//Average

//find() the student who scored 92
const studentWith92=students.find((student)=>student.marks===92)
console.log("Student with 92 marks: ",studentWith92)//92 marks student details

//findIndex() of student "Kiran"
const index=students.findIndex((student)=>student.name==="Kiran")
console.log("Index of the student Kiran: ",index)//Kiran index