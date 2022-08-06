import React from 'react'
import { Link } from 'react-router-dom'
import '../../../../css/styles3875.css'

function NavbarCollapse() {
  return (
    <div className="collapse navbar-collapse justify-content-between" id='main_nav99'>
        <ul className='navbar-nav ml-auto'>
            <li className="nav-item"><Link className="nav-link" to="/"> Home </Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login"> Login </Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register"> Register </Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact"> Contact </Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about"> About </Link></li>
        </ul>
        <ul className='navbar-nav'>
            <li className='nav-item search hidden-xs hidden-sm'>
                <Link className='nav-link' to='' >
                    <i className='fa fa-search'></i>
                </Link>
            </li>
        </ul>
        <div className='top-search navigation-shadow'>
            <div className='container'>
                <div className='input-group'>
                  <form action='#'>
                      <div className='row no-gutters mt-3'>
                          <div className='col'>
                              <input className='form-control border-secondary border-right-0 rounded-0' type='search' placeholder='Search' id='example-search-input4' />
                          </div>
                          <div className='col-auto'>
                              <Link className='btn btn-outline-secondary border-left-0 rounded-0 rounded-right' to='/'>
                                <i className='fa fa-search'></i>
                              </Link>
                          </div>
                      </div>
                  </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarCollapse