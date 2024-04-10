import './nav.css'

import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='Nav'>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/">About</Link>
        </li>
        <li>
            <Link to="/">Departments</Link>
        </li>
      </ul>
    </nav>
  )
}
