import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [count,setCount] = useState(0)
   
    
  return (
    <div className='container my-5'>
      <div className="row px-3">
        
        <div className="col-md-6 mx-auto text-center bg-light py-5 shadow rounded">
        <h2 className='text-center'>Counter</h2>
            <h1 className={`display-4 fw-bold text-${count>=0?"success":"danger"} my-2`}>{count}</h1>
            <button className='btn btn-primary ' onClick={()=>setCount(count-1)}>Decrement</button>
            <button className='btn btn-primary mx-2'onClick={()=>setCount(count+1)}>Increment</button>
            
        </div>
      </div>
    </div>
  )
}

export default Counter
