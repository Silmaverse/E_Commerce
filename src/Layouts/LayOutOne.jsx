import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'
import ResNav from '../components/ResNav'
import Footer from '../components/Footer'

const LayOutOne = () => {
  return (
    <>
    <NavBar/>
    <ResNav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default LayOutOne