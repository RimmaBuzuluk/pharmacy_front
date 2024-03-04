import CartPreparationItem from '../../component/CartPreparationItem/CartPreparationItem';
import Register from '../../component/register/Register';
import './Cart.css';

function Cart() {
	return (
		<div className='Cart'>
			<div className='Cart_page'>
				<div className='cart_registration'>
					<Register />
				</div>
				<div className='cart_menu'>
					<CartPreparationItem />
				</div>
			</div>
			<div className='cart_data'>
				<div className='cart_totalPrice'>Total Price:9999</div>
				<button>Submit</button>
			</div>
		</div>
	);
}

export default Cart;
