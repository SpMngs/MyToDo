import React from "react";
import TasksLists from "./TasksLists";

const TasksGroups = ({tasksLists}) => {
  console.log("IN GROUPS", tasksLists);

  return (
      <>
      {tasksLists?.map((tasksList, index) => (
        <TasksLists
          key={index}
          tasksList={tasksList} 
        /> ))}

    </>

  );
};

export default TasksGroups;
