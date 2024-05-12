import {create} from 'zustand';
import { persist } from 'zustand/middleware';
const store =(set)=>({
        tasks:[],
        dragTask:null,
        addTask:(title,state)=>{
                set((store)=>({
                        tasks:[{title,state}, ...store.tasks]
                }))
        },
        deleteTask:(title)=>{
                set((store)=>({
                        tasks:store.tasks.filter((task)=>task.title!== title)
                }))
        },
        setDragTask:(title)=>set({dragTask:title}),
        moveTask:(title,state)=>set((store)=>({
                tasks:store.tasks.map((task)=>
                        task.title === title ? {title, state}:task
                )
        }))
})

export const useStore = create(persist(store,{name:"hello"}))
//here (persist(store, {key pass garnu parxa}))