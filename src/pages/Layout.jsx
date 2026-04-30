
import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
function Layout() {
    const location =useLocation()
    const hideNavbarRoutes=["/auth" , "/auth/signin"]
    const shouldHideNavbar=hideNavbarRoutes.includes(location.pathname)
    const[searchValue, setSearchValue]=useState("")
  return (
    <div>
        {!shouldHideNavbar && <Navbar setSearchValue={setSearchValue} /> }
       
    
        <Outlet context={{searchValue}}/>
    </div>
  )
}

export default Layout