import { useSelector } from 'react-redux';
import CartPreparationItem from '../../component/CartPreparationItem/CartPreparationItem';
import Register from '../../component/register/Register';
import './Cart.css';
import { selectIsAuth } from '../../store/slice/auth';
import { useEffect, useState } from 'react';
import axios from '../../axios';

function Cart() {
	const isAuth = useSelector(selectIsAuth);
	const userData = useSelector(state => state.auth.data);
	const cartId = userData ? userData.cartId : null; // Перевірка на наявність userData
	const [cartItem, setCartItem] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	function calculateTotalPrice(items) {
		let total = 0;
		items.forEach(item => {
			total += item.totalPrice;
		});
		return total;
	}

	useEffect(() => {
		if (cartId) {
			// Перевірка на наявність cartId перед виконанням запиту
			let url = `http://localhost:4444/carts/${cartId}/items`;

			axios
				.get(url)
				.then(response => {
					setCartItem(response.data);
					const total = calculateTotalPrice(response.data);
					setTotalPrice(total);
				})
				.catch(error => {
					console.error('Сталася помилка при виконанні запиту:', error); // Виводимо помилку в консоль
				});
		}
	}, [isAuth, cartId]);

	return (
		<div className='Cart'>
			<div className='Cart_page'>
				{!isAuth ? (
					<div className='cart_registration'>
						<Register />
					</div>
				) : (
					<div></div>
				)}

				<div className='cart_menu'>
					{cartItem.map(cartItem => (
						<CartPreparationItem cartItem={cartItem} />
					))}
				</div>
			</div>
			<div className='cart_data'>
				<div className='cart_totalPrice'>Total Price: {totalPrice}</div>
				<button className='submitButton'>Submit</button>
			</div>
		</div>
	);
}

export default Cart;
