import React, { useState } from "react";

function ToDoList(params) {

    const [tasks, setTasks] = useState(['Grab keys', 'Clean Dishes', 'Organize Room']);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if (newTask.trim() !== ""){
            setTasks(t=> [...t, newTask]);
            setNewTask("")
        } 
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !==index);
        setTasks(updatedTasks)
    }

    function moveUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index -1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return(
    
        <div className="to-do-list"> 
        <h1 className="text-7xl m-3 font-sans"> ✶⋆.˚ To Do List ⋆｡°✩</h1>
        <p> Time to get to work and check off this list!</p>
        <div className="list content-center border-x-4 m-7">
        <div>
          <input
                className="p-2 m-2"
                type="text"
                placeholder="What task would you like to do?"
                value={newTask}
                onChange={handleInputChange}

            ></input>
            <button
            className="write-button m-2 add-btn bg-white hover:bg-lime-200 text-gray-800 font-semibold py-2 px-4 border bprder-gray-400 rounded shadow"
            onClick={addTask}
            >Add Task</button>

        </div>

        <ol className="list m-4">
            {tasks.map((tasks, index) =>
                <li key={index}>
                    <span className="text font-sans font-style: italic tracking-wide">{tasks}</span> 
                    <button className="delete-button m-2 bg-white hover:bg-red-300 text-gray-800 font-semibold py-2 px-4 border bprder-gray-400 rounded shadow"
                        onClick={()=> deleteTask (index)}>
                        Delete Task
                        </button>

                        <button className="move-button m-2 bg-white hover:bg-lime-100 text-gray-800 font-semibold py-2 px-4 border bprder-gray-400 rounded shadow"
                        onClick={()=> moveUp (index)}>
                        ▲ ▲ ▲
                        </button>

                        <button className="move-button m-2 add-btn bg-white hover:bg-red-100 text-gray-800 font-semibold py-2 px-4 border bprder-gray-400 rounded shadow"
                        onClick={()=> moveDown (index)}>
                        ▼ ▼ ▼
                        </button>

                </li>

            )}
        </ol>
        </div>
        </div>
)
}
export default ToDoList;