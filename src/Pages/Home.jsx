import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <div className="container my-5">
     <div className="row">
      <div className="col-lg-6 mx-auto d-flex flex-column gap-3 text-center ">
      <Link to={"/todoapp"} className='bg-dark rounded py-2 shadow text-decoration-none text-white fs-5'>Todo App</Link>
      <Link to={"/addtocart"} className='bg-dark rounded py-2 shadow text-decoration-none text-white fs-5'>Add To Cart</Link>
      <Link to={"/weather"} className='bg-dark rounded py-2 shadow text-decoration-none text-white fs-5'>Weather App</Link>
      <Link to={"/calculator"} className='bg-dark rounded py-2 shadow text-decoration-none text-white fs-5'>Calculator</Link>
      <Link to={"/recipefinder"} className='bg-dark rounded py-2 shadow text-decoration-none text-white fs-5'>Recipe Finder</Link>
      <Link to={"/notetakingapp"} className='bg-dark rounded py-2 shadow text-decoration-none text-white fs-5'>Note Taking App</Link>
      <Link to={"/counter"} className='bg-dark rounded py-2 shadow text-decoration-none text-white fs-5'>Counter</Link>
      </div>
     </div>
   </div>
  )
}

export default Home
