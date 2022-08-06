import React from 'react'
import { Link } from 'react-router-dom'
import '../../../css/styles3875.css'
import logo from '../../../images/logo.png'
import NavbarCollapse from './components/NavbarCollapse'

function Navbar(props) {
    const { open } = props;
  return (
    <div className='navigation-wrap navigation-shadow bg-white'>
        <nav className='navbar navbar-hover navbar-expand-lg navbar-soft'>
            <div className='container'>
                <div onClick={() => open()} className='offcanvas-header'>
                    <div data-toggle="modal" data-target="#modal_aside_right" className='btn-md'>
                        <span className='navbar-toggler-icon'></span>
                    </div>
                </div>
                <figure className='mb-0 mx-auto'>
                    <Link to='/'>
                        <img src={logo} alt='' className='img-fluid logo' />
                    </Link>
                </figure>
                <NavbarCollapse />
            </div>
        </nav>
    </div>
  )
}

export default Navbar