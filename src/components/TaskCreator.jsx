import React from 'react'
import { useState } from 'react'
import '../styles/taskCretaor.css'

export const TaskCreator = ({ createNewTask }) => {

   const [newTaskName, setnewTaskName] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      createNewTask(newTaskName)
      setnewTaskName("")
   }
   return (
      <div className='taskcreator-container'>
         <form className='taskcreator-form' onSubmit={handleSubmit}>
            <input
               className='taskcreator-input'
               type="text"
               placeholder='enter a new task'
               value={newTaskName}
               onChange={(e) => setnewTaskName(e.target.value)}
            />
            <button className='classcreator-button'>Save task</button>
         </form>
      </div>
   )
}
