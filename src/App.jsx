import { useState } from 'react'
import AddButton from './Components/AddButton'

function App() {

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
    return storedTasks
  })
  const [newTask, setNewTask] = useState('')
  const [editingTask, setEditingTask] = useState('')
  const [editing, setEditing] = useState(false)

  const addTask = () => {
      setNewTask('')
      if (newTask) {
        const newTaskId = tasks.length + 1
        const newTasks = [
          ...tasks,
          {id: newTaskId, text: newTask}
        ]
        setTasks([
          ...newTasks
        ])
        localStorage.setItem('tasks', JSON.stringify(newTasks))
      }
  }

  const editTask = () => {
    setNewTask('')
    if (newTask) {
      const edittedTask = tasks.map(task => {
        if (task.id === editingTask.id) {
          task.text = newTask
        }
        return task
      })
      setTasks([
        ...edittedTask
      ])
      localStorage.setItem('tasks', JSON.stringify(tasks))
      setEditing(false)
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
            <AddButton isEditing={editing} event={editing ? editTask : addTask} />
          </div>
          <div className='w-full h-fit bg-slate-200'>
            <ul className='w-full h-full'>
              {
                tasks.map(task => (
                  <li key={task.id} className='p-3 border-2 border-white flex place-content-between'>
                    {task.text} 
                    <span className='flex gap-4 items-center'>
                      <button onClick={() => {
                        setEditing(true)
                        setNewTask(task.text)
                        const editTask = tasks.find(t => t.id === task.id)
                        setEditingTask(editTask)
                      }}><i className="fa-solid fa-pen-to-square text-blue-500"></i></button>
                      <button onClick={() => {
                        const filtteredTasks = tasks.filter(item => item.id !== task.id)
                        setTasks([...filtteredTasks])
                        localStorage.setItem('tasks', JSON.stringify(filtteredTasks))
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
