import React from "react";
import Task from "./Task";
import { useState, useEffect } from "react";
import moment from "moment";

const TasksLists = ({
  tasksList,
  onDelete,
  onTaskStatusUpdate,
  }) => {
  
  const [list, setList] = useState(5);

  const findLength = () => {

    return tasksList.todos.length
  }


  return (
    <div>
      <header className="header">
        <h1>
          {tasksList?.date === undefined ? null : (
            <> {moment(tasksList?.date).format("DD, MMM")}</>
          )}
        </h1>
        <p> () => findLength </p>

      </header>

      {tasksList?.todos?.slice(0, list).map((todo, index, id) => (
          <Task
            key={index}
            task={todo}
            listId={id}
            onDelete={onDelete}
            onTaskStatusUpdate={onTaskStatusUpdate}
          />       
      ))} 
    </div>
  )
};

export default TasksLists;
