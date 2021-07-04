import React from 'react'
import { FaTimes, FaPen } from "react-icons/fa";
import { useState } from "react";
import { Avatar } from '@material-ui/core'

const Task = ({task, onDelete , onTaskStatusUpdate}) => {

    const findCheckValue = (e) => {
        onTaskStatusUpdate(task.id, e?.target?.checked);
      };

    const stateStyle = () => {
    switch (task?.taskState) {
        case "complete":
        return {
            backgroundColor: "#76B947",
        };
        case "active":
        return {
            backgroundColor: "#338DFF",
        };
        default:
    }
    }; 

  return (
        <div className = "task">
          
          <input
                type="checkbox"
                className="Checkbox"
                onChange={(e) => findCheckValue(e)}
          />

          <div>
            <span>
                <Avatar
                    style={{ width: "55px", height: "55px" }}
                    className="table_avatar"
                    src="https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png"
                />
            </span>
          </div>
         
          <div className="taskStateContainer">
            <span className="TodoState" style={stateStyle()}> {task.taskState} </span>

            <span className="TodoState tags"> {task?.tag} </span>
                <FaTimes
                    style={{ color: "red", cursor: "pointer", marginLeft: 10 }}
                    onClick={() => onDelete(task.id)}
                />
                <FaPen
                    style={{ color: "green", cursor: "pointer", marginLeft: 10 }}
                    // onClick={() => setTodoEditing(task.id)}
                />
          </div>

          <button > Submit Edit  </button>
            
   
        </div>
        
    )
}
export default Task
