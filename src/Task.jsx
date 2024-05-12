import React from "react";
import { useStore } from "./Store";
import { TbTrash } from "react-icons/tb";
import classNames from "classnames";
const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const deleteTask = useStore((store)=>store.deleteTask)

  const setDragTask = useStore((store)=>store.setDragTask)
  return (
    <div className="task" draggable onDragStart={()=>setDragTask(title)}>
      {task.title}

      <div className="bottomWrap">
        <div>
          <TbTrash className="delete" color="red" size={30} onClick={()=>{deleteTask(task.title
          )}}/>
        </div>
        <div className={classNames("status",task.state)}>{task.state}</div>
      </div>
    </div>
  );
};

export default Task;
