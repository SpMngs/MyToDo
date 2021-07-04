import React from 'react'

import { useState } from 'react'

const Task = ({task}) => {


  return (
  
        <div className = "task">
          
          <input type='checkbox' className='Checkbox' />

          {/* <div> <span><Avatar className="table_avatar" src =
              "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png" /> </span> 
          </div>   */}
            
          <div className = 'taskFlexContainer'>
            <span className='TodoTask' > {task.taskTitle} </span>
            <p className='TodoDescription'> {task.taskDescription}  </p>
          </div>

          <button > Submit Edit  </button>
            
          <div className="taskStateContainer">
          </div> 

        </div>
        
    )
}
export default Task
