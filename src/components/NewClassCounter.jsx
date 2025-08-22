import { useState } from "react"

export default function NewClassCounter({name}) {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  return (
    <>
      <h1 className="mt-4">{name}</h1>

      <div className="flex items-center gap-4 mt-2">
        <button className="bg-blue-600 text-white px-2 rounded-md cursor-pointer" 
                onClick={()=> setCount(count-1)}>-</button>
        <h2>{count}</h2>
        <button className="bg-blue-600 text-white px-2 rounded-md cursor-pointer" 
                onClick={()=> setCount(count+1)}>+</button>
      </div>

      <div className="flex items-center gap-4 mt-2">
        <button className="bg-blue-600 text-white px-2 rounded-md cursor-pointer" 
                onClick={()=> setCount2(count2-1)}>-</button>
        <h2>{count2}</h2>
        <button className="bg-blue-600 text-white px-2 rounded-md cursor-pointer" 
                onClick={()=> setCount2(count2+1)}>+</button>
      </div>
    </>
  )
}
