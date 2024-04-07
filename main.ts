#! /usr/bin/env node
import inquirer from "inquirer";

let todoArray =[];
while(true){
//---------------User Input Prompt---------------------      
  const toDo = await inquirer.prompt([
   
    {
        type :"list",
        name :"todoSelect",
        message:"What you want to do ??",
        choices :["Display My List","Add New Task","Delete Task","Quit"],
    }
   ]);

   // ------------Start Display My List----------------- 
   if(toDo.todoSelect === "Display My List"){
        console.log("*************************************************************");
        console.log("                        To Do List                           ");
        if (todoArray.length === 0) {
        console.log("===================No Entries =============================");
    } else {
        todoArray.forEach((task, index) => {
            console.log(`${index}."${task}"`);
        });
        console.log("*************************************************************");
        }}
   //------------End Dispaly My List --------------------
   
   //------------Start Add New Task----------------------
 
   else if (toDo.todoSelect === "Add New Task") {
    console.log("*************************************************************");
    const newTodo = await inquirer.prompt([
        {
            type: "input",
            name: "newSelect",
            message: "Enter new To do:",
        },
    ]);
    let newTask = newTodo.newSelect;
    todoArray.push(newTask);
    todoArray.forEach((task, index) => {
        console.log(`${index}."${task}"`);
    });
    console.log("*************************************************************");
}


//-----------------End Add New Task--------------------

//------------------Start Delete Task-----------------
else if(toDo.todoSelect  === "Delete Task"){
    const DeleteTodo = await inquirer.prompt([
        {
            type: "input",
            name: "deleteSelect",
            message: "Enter index number you want to Delete :",
        }
        ]);
        const delIndex = parseInt(DeleteTodo.deleteSelect);

        // Check if the provided index is valid
        if (isNaN(delIndex) || delIndex < 0 || delIndex >= todoArray.length) {
            console.log("Invalid index. Please enter a valid index.");
        } else {
            // Remove the task at the specified index
            const deletedTask = todoArray.splice(delIndex, 1)[0];
            console.log(`"${deletedTask}" deleted from the list.`);
        }      
}
//------------------End Delete Task---------------------

//-------------------Start Quit Task-------------------
else if(toDo.todoSelect  === "Quit"){
    console.log("Thanks for using the App, Take Care:) Good Bye!!!");
    break;
    }
   }
