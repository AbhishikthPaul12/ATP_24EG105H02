/* ASSIGNMENT 2.3: Employee Payroll Processor */

// Test data
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
]

//filter() employees from IT department
const itEmployees=employees.filter(employee=>employee.department==="IT")
console.log("IT Employees: ",itEmployees)//IT Employees details

//map() add netSalary = salary + 10% bonus
employees.map((employee)=>{
  employee.netSalary=employee.salary+employee.salary*0.1
});
console.log("Employees with net salary: ",employees)//Net salary

//reduce() total salary payout
const totalPayout=employees.reduce((accumulator,employee)=>accumulator+employee.salary,0)
console.log("Total salary: ",totalPayout)//Total salary

//find() employee with salary 30000
const employeeWith30000=employees.find((employee)=>employee.salary===30000)
console.log("Employee with salary 30000: ",employeeWith30000)//30000 employee details

//findIndex() of employee "Neha"
const indexOfNeha=employees.findIndex((employee)=>employee.name==="Neha")
console.log("Index of Neha: ",indexOfNeha)//Neha index