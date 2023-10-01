import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import './Nav.scss'

const Navigation =() => {
  return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
            <CrwnLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link'>
                    SHOP
                </Link>

                <Link className='nav-link' to='/SignIn'>
                    SIGN IN
                </Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation