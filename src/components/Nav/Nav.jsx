import './nav.css'

import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='Nav'>
      <ul>
        <li>
            <Link to="/">Find a Doctor</Link>
        </li>
        <li>
            <Link to="/">Schedule Appointment Online</Link>
        </li>
        <li>
            <Link to="/departments">Departments</Link>
        </li>
        <li>
            <Link to="/">My Health Account</Link>
        </li>
      </ul>
    </nav>
  )
}
