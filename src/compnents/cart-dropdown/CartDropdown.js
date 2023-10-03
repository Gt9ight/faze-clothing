import Button from '../button/Button';
import './Cartdropdown.scss';

const CartDropdown = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown