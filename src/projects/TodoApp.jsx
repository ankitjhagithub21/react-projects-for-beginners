import React, { useState } from 'react'


const TodoApp = () => {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState("")
    const [btnText,setBtnText] = useState("Add")
    const [index,setIndex] = useState(null)
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const addEditTodo = () => {
       if(btnText==="Add"){
        setTodos([...todos, todo])
        setTodo("")
       }else{
       
        const updatedTodos = todos.map((t,i)=>{
            if(index===i){
                t=todo
            }
            return t
        })
        setTodos(updatedTodos)
        setBtnText("Add")
        setTodo("")
        setIndex(null)
       }
       

    }
    const removeTodo = (i) => {
        const updatedTodos = todos.filter((todo, index) => index !== i)
        setTodos(updatedTodos)

    }
    const editTodo = (i) => {
        setTodo(todos[i])
        setBtnText("Save")
        setIndex(i)
       console.log(`Edit todo of index ${i}`)

    }

    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-lg-6 mx-auto d-flex flex-column gap-2">
                    <div className="d-flex gap-2">
                        <input type="text" placeholder='Enter Todo' className='form-control' value={todo} onChange={handleChange} />
                        <button className='btn btn-primary' onClick={addEditTodo}>{btnText}</button>
                    </div>
                    <h2 className='text-center my-3'>Your Todos</h2>
                    {
                        todos.length === 0 ? <p className='text-center fs-5'>Nothing to display !!</p> : <ol className='list-unstyled'>

                            {
                                todos.map((todo, index) => {
                                    return <li key={index} className='fs-5 my-2  p-2 bg-dark text-light rounded'><span>{index+1}. </span>{todo} <button className='btn btn-danger ' onClick={() => removeTodo(index)}>X</button><button className='btn btn-info mx-2' onClick={()=>editTodo(index)}>Edit</button></li>
                                })
                            }

                        </ol>
                    }
                </div>
            </div>

        </div>
    )
}

export default TodoApp
