import React from "react";
import TasksLists from "./TasksLists";

const TasksGroups = ({
    tasksLists,
    onDelete,
    onEdit,
    onTaskStatusUpdate,
  }) => {

  return (
    <>
        {tasksLists?.map((tasksList, index) => (
         <TasksLists
                key={index}
                tasksList={tasksList} 
                onDelete={onDelete}
                onEdit = {onEdit}
                onTaskStatusUpdate={onTaskStatusUpdate}
              
            /> 
        ))}
    </>
  );
};

export default TasksGroups;
