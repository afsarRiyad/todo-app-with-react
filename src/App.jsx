import { use, useState } from 'react'
function App() {
   const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState("")
    const [submit, setSubmit] = useState(true)
    const [update, setUpdate] = useState(false)
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
    setSubmit(false)
    setUpdate(true)
   }

   const handleUpdate = () =>{
     if(!task) return
     taskList[id] = task
      let arr = [...taskList]
      setTaskList(arr);
      setTask('')
      setSubmit(true)
      setUpdate(false)
   }

   const handleKey = (e) =>{
     if(e.key === 'Enter')
      if(submit === true){
        handleSubmit()
      }else{
        handleUpdate()
      }
   }
  return (
    <>
     <input type="text" onChange={handleChange} onKeyDown={handleKey} value={task}/>
     <button onClick={handleSubmit} style={{display: submit ? "inline-block" : "none"}}>Submit</button>

     <button onClick={handleUpdate} style={{display : update ? "inline-block" : "none"}}>Update</button>


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
