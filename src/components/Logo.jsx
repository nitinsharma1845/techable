import React from 'react'
import logo from '../assets/logo-2.png'

const Logo = ({width = '100px'}) => {
  return (
    <div>
        <img src={logo} alt="Techable" width={width} />
    </div>
  )
}

export default Logo