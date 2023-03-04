import { useState } from 'react'

function App() {
  
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
      setNewTask('')
      if (newTask) {
        let newTaskId = tasks.length + 1
        setTasks([
          ...tasks,
          {id: newTaskId, text: newTask}
        ])
      }
  }

  return (
    <div>
      <nav className='flex items-center bg-cyan-500 w-screen h-16'>
        <h1 className='font-bold text-lg text-white ml-4'>Task List w/React</h1>
      </nav>
      <main className='flex justify-center m-3 text-2xl'>
        <div className='w-full md:w-1/2'>
          <h2 className='font-semibold text-center p-3'>Your Tasks</h2>
          <div className='flex place-content-between mb-3'>
            <input type="text" className='w-10/12 p-2 border border-gray-300' value={newTask} onChange={e => setNewTask(e.target.value)} placeholder='Write a new task here' />
            <button className='bg-cyan-300 text-white p-2' onClick={addTask}>Add Task</button>
          </div>
          <div className='w-full h-fit bg-slate-200'>
            <ul className='w-full h-full'>
              {
                tasks.map(task => (
                  <li key={task.id} className='p-3 border-2 border-white flex place-content-between'>
                    {task.text} 
                    <span className='flex gap-4 items-center'>
                      <button><i className="fa-solid fa-pen-to-square text-blue-500"></i></button>
                      <button onClick={() => {
                        const filtteredTasks = tasks.filter(item => item.id !== task.id)
                        setTasks([...filtteredTasks])
                      }}><i className="fa-solid fa-trash text-red-600"></i></button>
                    </span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
