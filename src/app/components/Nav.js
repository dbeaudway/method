import React, { useEffect } from 'react'
import Link from 'next/link'
import '../styles/Nav.less'

function Nav ({ pathname }) {

  return (
    <header>
      <nav className="method-Nav">
        <ul>
          <li className="method-Nav-link">
            <svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
              <polygon className="c" points="6 4 0 4 0 2"></polygon>
              <polygon className="b" points="0 4 0 4 0 4"></polygon>
              <polygon className="b" points="3 6 3 6 6 2"></polygon>
              <polygon className="b" points="0 2 6 4 3 0"></polygon>
              <polygon className="c" points="3 0 3 0 6 4"></polygon>
              <polygon className="b" points="6 2 3 0 0 4"></polygon>
              <polygon className="c" points="0 2 3 6 0 2"></polygon>
              <polygon className="f" points="0 4 0 4 6 2"></polygon>
              <polygon className="c" points="0 4 6 2 6 4"></polygon>
              <polygon className="e" points="6 4 6 4 0 4"></polygon>
              <polygon className="a" points="3 6 6 2 6 2"></polygon>
              <polygon className="c" points="6 2 3 6 6 4"></polygon>
            </svg>
          </li>
          <li className="method-Nav-link">
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li className="method-Nav-link">
            <Link href='/results'>
              <a>Results</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
