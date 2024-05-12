// import React from 'react'
import Column from './Column'
const App = () => {
  return (
    <>
    <h1 className='title'>Task Manager</h1>
    <div className='main'>
       
      <Column state="Assigned"/>
      <Column state="Ongoing"/>
      <Column state="Completed"/>
    </div>
    </>
  )
}

export default App;