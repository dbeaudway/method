import React, { useEffect } from 'react'
import Link from 'next/link'
import '../styles/Nav.less'

function Nav ({ pathname }) {
  
  useEffect(() => {
    console.log('Fired')
  })

  return (
    <header>
      <nav className="method-Nav">
        <ul>
          <li className="method-Nav-link">
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li className="method-Nav-link">
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
