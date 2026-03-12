import {addTask,getAllTasks,completeTask} from './task.js'
//Add a task
console.log(addTask("eating","HIGH","2024-12-12"))
//Display all tasks
console.log(getAllTasks())
//Complete a task
console.log(completeTask(1))
console.log(addTask("sleeping","HIGH","2025-12-12"))
//Display all tasks again
console.log(getAllTasks())