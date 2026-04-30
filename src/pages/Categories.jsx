import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'

function Categories() {
  const { searchValue } = useOutletContext();
 

  return (
    <div>
        <Outlet context={{searchValue}}/>
    </div>
  )
}

export default Categories