import React from "react";
import Task from "./Task";
import { useState } from "react";
import moment from "moment";

const TasksLists = ({
  tasksList,
  onDelete,
  onEdit,
  onTaskStatusUpdate,
  }) => {
  
  const [list, setList] = useState(3);

const Message = (todos) => {

  if (todos.length === 1) {
      return  (<h2 style ={{textAlign:"center"}}>
                 Not too much to handle today. Relax :) </h2>) 
               
  }
  else if (todos.length >= 3) {
    return (<h2 style ={{textAlign:"center"}}>
              It'll be a quite busy day. Stay efficient! </h2>)  
            
  }
  else{ return (<h2 style ={{textAlign:"center"}}>
                  Let's finish some tasks </h2>) }
}

return (
    <div>
      <header className="header">
        <h1>
          {tasksList?.date === undefined ? null : (
            <> {moment(tasksList?.date).format("DD, MMM")}</>
          )}
        </h1>

      </header>
       
       {(tasksList.todos && tasksList.todos.length) && Message(tasksList.todos)} 
   
      {tasksList?.todos?.slice(0, list).map((todo, index, id) => (
          
        <>  
          <Task
            key={index}
            task={todo}
            listId={id}
            onDelete={onDelete}
            onEdit={onEdit}
            onTaskStatusUpdate={onTaskStatusUpdate}
          />

          {tasksList?.todos?.length > 3 ? (
            <div style={{ display: "flex", justifyContent: "center" }}>

              {index + 1 === list ? (
                <>
                {list > 3 ? (
                    <>
                      {/* when useR click on show less button the value of list set again to 3  */}
                      <button className="btnStyle" onClick={() => setList(3)}>
                        Show Less
                      </button>
                    </>
                  ) : (
                    <>
                      {/* when use click on show more button the value of list set length of todos  */}

                      <button
                        className="btnStyle"
                        onClick={() => setList(tasksList?.todos?.length)}
                      >
                        Show More
                      </button>
                    </>
                  )}
                  </>
              ): (
                ""
              )}
            </div>
            ) : (
              ""
            )}
          </>
        ))}
    </div>
  )
};

export default TasksLists;
