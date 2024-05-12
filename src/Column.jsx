import React ,{useState}from 'react'
import Task from './Task'
import { useStore } from './Store'
import classNames from 'classnames';

const Column = ({state}) => {
  const [open , setOpen] = useState(false);
  const [text, setText] = useState('');
  const [drop, setDrop] = useState(false);
    const tasks = useStore((store)=>store.tasks.filter((task)=>task.state === state));
    const addTask = useStore((store)=>store.addTask)

    const setDragTask = useStore((store)=>store.setDragTask)
    const draggedTask = useStore((store)=>store.dragTask);
    const moveTask = useStore((store)=>store.moveTask)
  return (
    <div className={classNames('column',{drop:drop})}
    onDragOver={(e)=>
      {
        e.preventDefault();
        setDrop(true);
      }
    }
    onDragLeave={(e)=>{
      setDrop(false);
      e.preventDefault();
    }} 
    onDrop={()=>{
      setDrop(false)
      // e.preventDefault();
      moveTask(draggedTask,state)
      setDragTask(null)
    }}
    
    >
        <div className='titleName
        '>
           <p>{state}</p>
           <button onClick={()=>setOpen(true)}>Add</button>
        </div>
        {
            tasks.map((task,index)=>(
                <Task title={task.title} key={index}/>
            ))
        }

        {
          open && (
          <div className='addTask'>
            <input type="text" placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={()=>{
              addTask(text,state)
              setText('')
              setOpen(false)
            }}>Add</button>
          </div>)
        }
        
    </div>
  )
}

export default Column