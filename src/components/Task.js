import React from 'react'
import { Avatar } from '@material-ui/core'

const Task = ({task}) => {

  return (
  
        <div className = "task">
          
          <input type='checkbox' className='Checkbox' />
       
       
          
                <Avatar
                style={{ width: "55px", height: "55px" }}
                // className="table_avatar"
                src="https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png"
                />

         
            
          <div className = 'taskFlexContainer'>
            <span className='TodoTask' > {task.taskTitle} </span>
            <p className='TodoDescription'> {task.taskDescription}  </p>
          </div>

          <button > Submit Edit  </button>
            
   
        </div>
        
    )
}
export default Task
