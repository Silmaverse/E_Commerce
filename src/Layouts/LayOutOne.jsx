import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'

const LayOutOne = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default LayOutOne