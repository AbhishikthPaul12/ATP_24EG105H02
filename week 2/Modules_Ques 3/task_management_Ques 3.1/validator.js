//Validate title. Title must not empty and also no less than 3 characters.
function validateTitle(title){
    if(!title)
        return "Title must not be empty"
    else if(title.length<=3)
        return "Title must have a minimum of 3 characters"
    else
        return true
}
//Validate priority. Priority must be low, medium or high
function validatePriority(priority){
    const priorities=['LOW','MEDIUM','HIGH']
    let result=priorities.includes(priority)
    if(result){
        return "Priority is not valid"
    }
    return true
}
//Validate due date. Due date must be a future date.
function validateDueDate(date){
    let dueDate=new Date('2024-10-20')//YYYY-MM-DD format
    let today=new Date()
    if(dueDate>today){
        return "Invalid duedate"
    }
    return true
}
export {validateTitle,validatePriority,validateDueDate}