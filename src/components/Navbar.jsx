import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container-fluid bg-dark py-3 shadow text-center'>
      <div className="row">
       
        <h2 className='text-white'>React Projects for beginners</h2>
        <Link className='fs-5' to={"/"}>Home</Link>
      </div>
    </div>
  )
}

export default Navbar
