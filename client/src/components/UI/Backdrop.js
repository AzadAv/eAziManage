import React from 'react'
import "./Backdrop.css"
function Backdrop(props) {
  return (
    <div className='backdrop'
    >
        {props.children}
    </div>
  )
}

export default Backdrop