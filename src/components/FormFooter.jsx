import React from 'react'
import { Link } from 'react-router-dom'

function FormFooter({linkTo , textFooter ,textLink}) {
  return (
    <div>
        <p className='text-center'>
            {textFooter}
            <Link to={linkTo} className='underline font-semibold cursor-pointer'>{textLink}</Link>
        </p>
    </div>
  )
}

export default FormFooter