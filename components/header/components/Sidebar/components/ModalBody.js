import React from 'react'
import { Link } from 'react-router-dom'
import '../../../../css/styles3875.css'

function ModalBody() {
  return (
    <div className='modal-body'>
        <nav className='list-group list-group-flush'>
            <ul className='navbar-nav'>
                <li className="nav-item"><Link className="nav-link" to="/"> Homes </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/login"> Login </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/register"> Register </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact"> Contact </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about"> About </Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default ModalBody