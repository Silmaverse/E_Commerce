import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayOutOne from './Layouts/LayOutOne'
import Home from './pages/Home'
import ChekOut from './pages/ChekOut'

const App = () => {
  const myRoute =createBrowserRouter(createRoutesFromElements(
    <Route  path='/' element={<LayOutOne/>}>
      <Route  index  element={<Home/>}  />
      <Route path='/checkout' element={<ChekOut/>}/>
    </Route>

  ))
  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App