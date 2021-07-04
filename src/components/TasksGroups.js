import React from "react";
import TasksLists from "./TasksLists";

const TasksGroups = ({
    tasksLists,
    onDelete,
    onTaskStatusUpdate,
  }) => {

  return (
    <>
        {tasksLists?.map((tasksList, index) => (
         <TasksLists
                key={index}
                tasksList={tasksList} 
                onDelete={onDelete}
                onTaskStatusUpdate={onTaskStatusUpdate}
            /> 
        ))}
    </>
  );
};

export default TasksGroups;
