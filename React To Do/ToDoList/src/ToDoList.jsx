import React, { useState } from "react";

function ToDoList(params) {

    const [tasks, setTasks] = useState(['shower', 'walk the dog', 'take out trash']);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){

    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveUp(index){

    }

    function moveDown(index){

    }


    return(
    
        <div className="to-do-list"> 
        <h1 className="text-9xl">To Do List :3</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div>
          <input
                className="p-2"
                type="text"
                placeholder="What task would you like to do?"
                value={newTask}
                onChange={handleInputChange}

            ></input>
            <button
            className="m-2 add-btn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border bprder-gray-400 rounded shadow"
            onClick={addTask}
            >Add Task</button>

        </div>
        </div>
)
}
export default ToDoList;