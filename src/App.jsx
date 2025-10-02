import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayOutOne from './Layouts/LayOutOne'
import Home from './pages/Home'
import ChekOut from './pages/ChekOut'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  const myRoute =createBrowserRouter(createRoutesFromElements(
    <Route  path='/' element={<LayOutOne/>}>
      <Route  index  element={<Home/>}  />
      <Route path='/checkout' element={<ChekOut/>}/>
      <Route path='/productdetails' element={<ProductDetails/>}/>
    </Route>

  ))
  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App