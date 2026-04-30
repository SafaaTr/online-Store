import React from 'react'
import { Outlet } from 'react-router-dom'
import imgauth from '/images/auth.png'

function Auth() {
  return (
    <div className=' h-screen relative  md:flex justify-between items-center pt-20 md:pt-0'>
        <Outlet/>
        <img src={imgauth} alt="" className=' hidden md:flex  w-700  object-cover h-full rounded-l-4xl' />
    </div>
  )
}

export default Auth