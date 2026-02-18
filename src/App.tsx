import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TaskList from './components/TaskList/TaskList.tsx'

import type { Task } from './types'

function App() {
  //const [count, setCount] = useState(0)
  
  const textObject: Task [] = [{
    id: "1",
    title: "title1",
    description: "",
    status:"pending",
    priority: "low",
    dueDate: "",

  },
  {
    id: "2",
    title: "title2",
    description: "",
    status:"in-progress",
    priority: "medium",
    dueDate: "",

  },
  {
    id: "3",
    title: "title3",
    description: "asdfgh",
    status:"completed",
    priority: "high",
    dueDate: "",

  }  

]

  return (
    <>
      <TaskList tasks={textObject}/>
    
    </>
  )
}

export default App;
