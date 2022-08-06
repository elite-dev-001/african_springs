import React from 'react'
import Link  from 'next/link'
// import '../../css/styles3875.css'

function TopBar() {
  return (
    <div className='topbar d-none d-sm-block'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-5'>
                    <div className='topbar-left'>
                        <div className='topbar-text'> {new Date().toDateString()} </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-7'>
                    <div className='list-unstyled topbar-right'>
                        <ul className='topbar-link'>
                            <li> <Link href='/about' > About </Link> </li>
                            <li> <Link href='/contact' > Contact Us </Link> </li>
                            <li> <Link href='/login' > Login / Register </Link> </li>
                        </ul>
                        <ul className='topbar-sosmed'>
                            <li><a href="https://www.facebook.com/AfricanSprings-103535282385150" rel='noreferrer' target='_blank' ><i className='fa fa-facebook' ></i></a></li>
                            <li><a href="https://twitter.com/AfricanSprings?s=20&t=bsAqPM8aS33s7EV1E8YhEg" rel='noreferrer' target='_blank' ><i className='fa fa-twitter' ></i></a></li>
                            <li><a href="https://www.instagram.com/africansprings/" rel='noreferrer' target='_blank' ><i className='fa fa-instagram' ></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar