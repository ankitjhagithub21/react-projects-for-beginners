import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import TodoApp from './projects/TodoApp'
import NoteTakingApp from './projects/NoteTakingApp'
import "./App.css"
import Counter from './projects/Counter'
import Navbar from './components/Navbar'
import WeatherApp from './projects/WeatherApp'
import RecipeFinder from './projects/RecipeFinder'
import AddToCart from './projects/AddToCart'
import Calculator from './projects/Calculator'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todoapp' element={<TodoApp/>}/>
        <Route path='/notetakingapp' element={<NoteTakingApp/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/weather' element={<WeatherApp/>}/>
        <Route path='/recipefinder' element={<RecipeFinder/>}/>
        <Route path='/addtocart' element={<AddToCart/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
