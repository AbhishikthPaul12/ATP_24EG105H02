import {validateTitle,validatePriority,validateDueDate} from './validator.js'
const tasks=[]
let index=0
//Add a new task
function addTask(title,priority,dueDate){
    if(!validateTitle()||!validatePriority()||!validateDueDate()){
      return "Invalid task"
    }
    tasks.push({title,priority,dueDate})
    return true
}
//Get all tasks
function getAllTasks(){
  return tasks
}
function completeTask(taskId){
  return true
}
export {addTask,getAllTasks,completeTask}