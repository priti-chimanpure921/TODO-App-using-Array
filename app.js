let todo = ["eat","sleep"];
let choice = prompt("Enter your choice");

while(true)
{
    if(choice === "quit")
    {
        console.log("We are quitting the app");
        break;
    }
    if(choice === "add")
    {
        let task = prompt("Enter your task");
        todo.push(task);
        console.log(todo);
    }
    else if(choice === "delete")
    {
        let task = prompt("Enter your task to delete");
        if(todo.includes(task))
        {
            let idx = todo.indexOf(task);
            todo.splice(idx,1);
            console.log(todo);
        }
        else
        {
            console.log("task doesn't found");
        }
    }
    else if(choice === "list")
    {
        console.log(todo); 
        for(let task of todo)
        {
            console.log(task);
        }
    }
    else
    {
        console.log("Please enter correct option");
        break;
    }
    choice = prompt("Enter your choice");    
}




