import { useState } from 'react'

export default function About() {
  const [todoData, setTodoData] = useState([])
  return (
    <>
      <div>About</div>
      <button className='cursor-pointer bg-blue-500 text-white px-3 py-0.5 rounded-sm' onClick={()=>{
        import('../data.js').then((module)=>{
          setTodoData(module.todos)
        })
      }}>Load Data</button>
      <ul>
        {
          todoData.map((todo)=> (<li id={todo.id}>{todo.title}</li>))
        }
      </ul>
    </>
  )
}
