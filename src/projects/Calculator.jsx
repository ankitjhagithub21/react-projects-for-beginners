import React, { useState } from 'react'

const Calculator = () => {
  const [firstNumber,setFirstNumber] = useState('')
  const [secondNumber,setSecondNumber] = useState('')
  const [result,setResult] = useState(0)
  
  const add = () =>{
    setResult(firstNumber+secondNumber)

  }
  const sub = () =>{
    setResult(firstNumber-secondNumber)

  }
  const mul = () =>{
    setResult(firstNumber*secondNumber)

  }
  const div = () =>{
    setResult((firstNumber/secondNumber).toFixed(2))

  }
  return (
    <div className='container my-5'>
      <div className="row">
        
        <div className="col-lg-6 mx-auto shadow bg-light rounded py-2">
        <h2 className='text-center mb-2'>Calculator</h2>
          <input type="number" className='form-control mb-3' value={firstNumber} onChange={(e)=>setFirstNumber(parseInt(e.target.value))} placeholder='Enter First Number..'/>
          <input type="number" className='form-control' onChange={(e)=>setSecondNumber(parseInt(e.target.value))} value={secondNumber} placeholder='Enter Second Number..'/>
          <div className="d-flex gap-2 align-items-center justify-content-center my-3">
          <button className='btn btn-primary' onClick={add}>+</button>
          <button className='btn btn-primary' onClick={sub}>-</button>
          <button className='btn btn-primary' onClick={mul}>X</button>
          <button className='btn btn-primary' onClick={div}>/</button>
        
          </div>
          <p className='fs-5 text-center'>Result is:{result}</p>
        </div>
      </div>
    </div>
  )
}

export default Calculator
