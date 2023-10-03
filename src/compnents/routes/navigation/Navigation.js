import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import CartIcon from '../../cart-icon/Cart-icon'
import CartDropdown from '../../cart-dropdown/CartDropdown'
import { Fragment, useContext } from 'react'
import { UserContext } from '../../../context/User-context'
import { CartContext } from '../../../context/CartContext'
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import { signOutUser } from '../../../utilis/firebase'
import './Nav.scss'

const Navigation =() => {
    const { currentUser } = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);


  return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
            <CrwnLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {
                    currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                    ): (
                    <Link className='nav-link' to='/auth'>SIGN IN</Link>
                    )
                }
                <CartIcon />


            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation