import React, { useState } from 'react'

const NoteTakingApp = () => {
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [notes,setNotes] = useState([])
    const [noteId,setNoteId] = useState(null)
    const [btnText,setBtnText] = useState("Add")
    const addEditNote = ()  =>{
        if(title===""){
            alert("Title is empty")
        }else if(desc===""){
            alert("Desc is empty")
        }else{
           if(btnText==="Add"){
            const note = {
                id:new Date().getTime(),
                title:title,
                desc:desc,
    
            }
           
            setNotes([...notes,note])
           
           }else{
            const updatedNotes = notes.map((note)=>{
                if(note.id===noteId){
                    note.title=title
                    note.desc=desc
                }
                return note
            })
            setNotes(updatedNotes)
            setNoteId(null)
            setBtnText("Add")

           }
           setTitle("")
           setDesc("")
        }
        
    }
    const removeNote = (id) =>{
        const updatedNotes = notes.filter((note)=> note.id!==id)
        setNotes(updatedNotes)
    }
    const editNote = (id) =>{
        setNoteId(id)
        setBtnText("Save")
        const findNote = notes.find((note)=>note.id===id)
        
        setTitle(findNote.title)
        setDesc(findNote.desc)
    }
  return (
    <div className='container mt-3'>
      <div className="row">
        <div className="col-md-6 mx-auto">
            <h2 className='text-center mb-3'>Note Taking App</h2>
            <input type="text" placeholder='Enter Title' className='form-control mb-3' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea  className="form-control mb-3" rows="5" placeholder='Enter Description' value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
            <button className='btn btn-primary' onClick={addEditNote}>{btnText}</button>
        </div>
      </div>
      <h2 className='text-center my-3'>Your Notes</h2>
      <div className="d-flex flex-wrap  justify-content-center flex-wrap mb-3 gap-3">
          {
            notes.length===0 ? <p className='fs-5 text-center'>Nothing to display !!</p> : (
                <>
                {
                    notes.map((note)=>{
                        return (
                            <div className='card p-2 bg-light' key={note.id}>
                                <h5 className="card-title">{note.title}</h5>
                                <p className='card-text'>{note.desc}</p>
                                <div className="d-flex gap-2 ">
                                <button className='btn btn-danger' onClick={()=>removeNote(note.id)}>X</button>
                                <button className='btn btn-info' onClick={()=>editNote(note.id)}>Edit</button>
                                </div>
                            </div>
                        )
                    })
                }
                </>
            )
          }     
      </div>
    </div>
  )
}

export default NoteTakingApp
