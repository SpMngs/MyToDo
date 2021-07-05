import React from 'react'
import { FaTimes, FaPen } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState, useEffect } from "react";
import { Avatar } from '@material-ui/core'
import taskState from './taskState';
import Avatars from './dummyAvatars';

const Task = ({task, onDelete , onEdit, onTaskStatusUpdate}) => {

    const [editingText, setEditingText] = useState("");
    const [editTag, setEditTag] = useState("");
    const [editDate, setEditDate] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [todoEditing, setTodoEditing] = useState(null);
    
    const findCheckValue = (e) => {
        onTaskStatusUpdate(task.id, e?.target?.checked);
      };

    const stateColorStyle = () => {
        switch (task?.taskStatus) {
            case taskState.COMPLETE: //"complete":
            return {
                backgroundColor: "#76B947",
            };
            case taskState.ACTIVE://"active":
            return {
                backgroundColor: "#338DFF",
            };
            default:
        }
    };
    useEffect(() => {
        if (todoEditing) {
            setEditingText(task?.taskTitle);
            setEditDate(task?.taskDate);
            setEditTag(task?.tag);
            setEditDescription(task?.taskDescription);
        }
        }, [todoEditing]);

    const inEdit = (id) => {
    // all value send to onEdit function in App.js
    onEdit(task.id, editingText, editTag, editDate, editDescription);
    setTodoEditing(null);
    setEditingText("");
    }; 

    const todoStyle = () => {
        switch (task?.taskStatus) {
          case taskState.COMPLETE://"complete":
            return {
              textDecoration: "line-through",
            };
          case taskState.ACTIVE://"active":
            return {
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
                    src= {task.img}
                />
            </span>
          </div>

          <div className="taskFlexContainer">
             {todoEditing === task?.id ? (
              // modal desgin
             <div className="modalBack">
                 <div className="modalInner">
                    <div
                        onClick={() => setTodoEditing(null)}
                        style={{
                        textAlign: "right",
                        width: "100%",
                        fontSize: "12px",
                        }}
                    >
                        {/* close button */}
                        <GrClose />
                    </div>
                    <div className="form-control">
                        <label> Task </label>
                        <input
                            required
                            type="text"
                            placeholder="Add Task"
                        //maxlengrh set
                        // value set in state and value in next line
                            onChange={(e) => setEditingText(e.target.value)}
                            value={editingText}
                        />
                    </div>

                    <div className="form-control">
                        <label> Task Description </label>
                        <input
                            required
                            type="text"
                            placeholder="Add a brief description ..."
                        // value set in state and value in next line
                            onChange={(e) => setEditDescription(e.target.value)}
                            value={editDescription}
                        />
                    </div>
              
                    <div className="form-control">
                        <label>Tags </label>
                        <select
                            required
                            type="text"
                            placeholder="Add Tag"
                            // value set in state and value in next line
                            value={editTag}
                            onChange={(e) => setEditTag(e.target.value)}
                         >
                            <option value="" disabled selected>
                            Select Tags
                            </option>
                            <option value="Hobby">Hobby</option>
                            <option value="Work">Work</option>
                            <option value="Games">Games</option>
                            <option value="Pets">Pets</option>
                            <option value="Lifestyle">Lifestyle</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label>Set Date </label>
                        <input
                            type="date"
                            value={editDate}
                            onChange={(e) => setEditDate(e.target.value)}
                        />
                    </div>
              
                    <div className="group-submit"
                        style={{marginTop: "30px", display: "flex", justifyContent: "flex-end"}}
                    >
                        <button className="btnStyle" onClick={() => inEdit(task.id)}>
                        Submit Edit
                        </button>
                    </div>
                </div>
          </div>
            ) : (
            <span className="TodoTask" style={todoStyle()}>
                {task?.taskTitle}
            </span>
            )}
            <p className="TodoDescription"> {task.taskDescription} </p>
      </div>  

      {todoEditing === task.id ? (
        ""
      ) : (
        <div className="taskStateContainer">
          <span className="TodoState" style={stateColorStyle()}>
            {task.taskStatus}
          </span>
          <span className="TodoState tags">{task?.tag}</span>
          <FaTimes
            style={{ color: "red", cursor: "pointer", marginLeft: 10 }}
            onClick={() => onDelete(task.id)}
          />
          <FaPen
            style={{ color: "green", cursor: "pointer", marginLeft: 10 }}
            onClick={() => setTodoEditing(task.id)}
          />
        </div>
      )}
    </div>
        
    )
}
export default Task;
