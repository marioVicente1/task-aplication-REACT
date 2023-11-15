import React from 'react'
import { TaskRow } from './TaskRow'
 
export const TaskTable = ({tasks, toggleTask, showCompleted= false }) => {

   const taskTableRow = (showCompleted)=> {
  
      return(
         tasks
         .filter(task=> task.done === showCompleted)
         .map(task => (
            <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
           
         )) 

         
      )

   }
   return (
      <table>
         <thead>
            <tr>
               <th>Task</th>
            </tr>

         </thead>
         <tbody>
            {
               taskTableRow(showCompleted)
            }
         </tbody>

      </table>
   )
}
