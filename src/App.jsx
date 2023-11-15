import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { VisibilityControl } from './components/VisibilityControl'

function App() {

   const [tasksItems, settasksItems] = useState([])
   const [showCompleted, setshowCompleted] = useState(false)

   const createTask = (TaskName) => {
      if (!tasksItems.find(task => task.name === TaskName)) {
         settasksItems([...tasksItems, { name: TaskName, done: false }])
      }

   }

   // function to change the done property

   const toggleTask = (task) => {
      settasksItems(
         tasksItems.map((t) => (t.name === task.name ? {
            ...t, done: !t.done
         } : t))
      )
   }



   useEffect(() => {

      let data = localStorage.getItem('task')
      if (data) {
         settasksItems(JSON.parse(data))
      }
   }, [])

   const cleanTask = ()=>{
      settasksItems ( tasksItems.filter(task => !task.done))
      setshowCompleted(false)
   }

   useEffect(() => {
      localStorage.setItem('task', JSON.stringify(tasksItems))
   }, [tasksItems])

   return (
      <div className='container'>
         <TaskCreator createNewTask={createTask} />

         <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

         <VisibilityControl 
         isChecked ={showCompleted}
         setshowCompleted={(checked)=>setshowCompleted(checked )}  
         cleanTask={cleanTask}
          />

        

         {
            showCompleted === true && (
               <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted} />
            )
         }

      </div>
   )
}
export default App
