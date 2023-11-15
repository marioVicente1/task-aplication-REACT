

export const VisibilityControl = ({isChecked,setshowCompleted, cleanTask}) => {
   
   const handleDelete = ()=> {
      if (window.confirm('Are you sure you want to delete it')) {
         cleanTask()
      }
   }
   return (
      <div>
         <input type="checkbox" 
         checked={isChecked}
         onChange={(e) => setshowCompleted(e.target.checked)} />
         <label> Show description</label>

         <button onClick={handleDelete}> Delete</button>
      </div>

      
   )
}
