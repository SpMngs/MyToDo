import React from "react";
import Task from "./Task";
import { useState, useEffect } from "react";
import moment from "moment";

const TasksLists = ({tasksList}) => {
  
  console.log("IN LISTS", tasksList);

  const [list, setList] = useState(5);

  return (
    <div>
      <header className="header">
        <h1>
          {tasksList?.date === undefined ? null : (
            <> {moment(tasksList?.date).format("DD, MMM")}</>
          )}
        </h1>

      </header>

      {tasksList?.todos?.slice(0, list).map((todo, index, id) => (
          <Task
            key={index}
            task={todo}
            listId={id}
          />       
      ))} 
    </div>
  )
};
export default TasksLists;
