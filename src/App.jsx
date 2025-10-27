import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayOutOne from './Layouts/LayOutOne'
import Home from './pages/Home'
import ChekOut from './pages/ChekOut'
import ProductDetails from './pages/ProductDetails'
import LocalStorage from  "./pages/LocalStorage"
import Allproduct from './pages/Allproduct'
import Register from './pages/Register'
import Login from './pages/Login'


const App = () => {
  const myRoute =createBrowserRouter(createRoutesFromElements(
    <Route  path='/' element={<LayOutOne/>}>
      <Route  index  element={<Home/>}  />
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/checkout' element={<ChekOut/>}/>
      <Route path='/productdetails/:productId' element={<ProductDetails/>}/>
      <Route path='/all-Product' element={<Allproduct/>} />
      <Route path='/localstorage' element={<LocalStorage/>} />
    </Route>

  ))
  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App