/*Assignment 1.2: Online Course Name Processor*/

//Test data
const courses = ["javascript", "react", "node", "mongodb", "express"]

//filter() courses with name length > 5
const lengthyCourses=courses.filter((course)=>course.length>5)
console.log("Courses with length more than 5: ",lengthyCourses)

//map() to convert course names to uppercase
const coursesInUpperCase=courses.map((course)=>course.toUpperCase())
console.log("Courses in Upper Case: ",coursesInUpperCase)

/*reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
*/
const singleString=coursesInUpperCase.reduce((accumulator,course)=>accumulator+" "+"| "+course)
console.log(`Courses in a single string: ${singleString}`)

//find() the course "react"
const findCourse=courses.find((course)=>course==="react")
console.log("Course found: ",findCourse)

//findIndex() of "node"
const indexOfNode=courses.findIndex((course)=>course==="node")
console.log("Index of course node: ",indexOfNode)