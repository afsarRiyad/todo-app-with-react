import { use, useState } from 'react'
function App() {
   const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState("")
    const [isTrue, setIsTrue] = useState(true)
    const [id, setId] = useState()
   const handleChange = (e) =>{
        setTask(e.target.value);
   }
   const handleSubmit = () =>{
       if(!task) return
      let arr = [...taskList]
      arr.push(task)
      setTaskList(arr);
      setTask('')
   }

   const handleDelete = (id) =>{
     let arr = [...taskList]
     arr.splice(id, 1)
     setTaskList(arr);
     setTask('')
   }

   const handleEdit = (id) =>{
    let arr = [...taskList]
    setTask(taskList[id])
    setId(id)
    setIsTrue(false)
   }

   const handleUpdate = () =>{
     if(!task) return
     taskList[id] = task
      let arr = [...taskList]
      setTaskList(arr);
      setTask('')
      setIsTrue(true)
   }

   const handleKey = (e) =>{
     if(e.key === 'Enter')
      if(isTrue === true){
        handleSubmit()
      }else{
        handleUpdate()
      }
   }
  return (
    <>
     <input type="text" onChange={handleChange} onKeyDown={handleKey} value={task}/>

     {
      isTrue ? <button onClick={handleSubmit} >Submit</button> :
     <button onClick={handleUpdate} >Update</button>
     }


     <ol>
      {taskList.map((items, index) =>(
        <li>
             {items}
             <button onClick={()=> handleEdit(index)}>Edit</button>
            <button onClick={()=> handleDelete(index)}>Delete</button>
        </li>
      ))}
     </ol>
    </>
  )
}

export default App
