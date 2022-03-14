import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <nav>
            <Logo />
            <ul>
                <li>Campaigns</li>
                <li>Characters</li>
                <li>Encounters</li>
                <li>Signout</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar