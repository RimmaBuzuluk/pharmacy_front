import { useSelector } from 'react-redux';
import CartPreparationItem from '../../component/CartPreparationItem/CartPreparationItem';
import Register from '../../component/register/Register';
import './Cart.css';
import { selectIsAuth } from '../../store/slice/auth';
import { useEffect, useState } from 'react';
import axios from '../../axios';
import { useNavigate } from 'react-router-dom';

function Cart() {
	const isAuth = useSelector(selectIsAuth);
	const userData = useSelector(state => state.auth.data);
	const cartId = userData ? userData.cartId : null; // Перевірка на наявність userData
	const [cartItem, setCartItem] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [renderTotal, setRenderToral] = useState(0);
	const navigate = useNavigate();

	const render = () => {
		setRenderToral(renderTotal + 1);
	};

	useEffect(() => {
		if (cartId) {
			// Перевірка на наявність cartId перед виконанням запиту
			let url = `/carts/${cartId}/items`;

			axios
				.get(url)
				.then(response => {
					setCartItem(response.data.items);
					// const total = calculateTotalPrice(response.data);
					setTotalPrice(response.data.totalPrice);
					console.log(totalPrice);
				})
				.catch(error => {
					console.error('Сталася помилка при виконанні запиту:', error); // Виводимо помилку в консоль
				});
		}
	}, [isAuth, cartId, renderTotal]);

	const onClickSubmit = () => {
		axios
			.post(`/order/${cartId}`)
			.then(response => {
				navigate('/');
			})
			.catch(error => {
				console.error('Сталася помилка при виконанні запиту:', error); // Виводимо помилку в консоль
			});
	};

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
						<CartPreparationItem cartId={cartId} cartItem={cartItem} render={render} />
					))}
				</div>
			</div>
			<div className='cart_data'>
				<div className='cart_totalPrice'>Total Price: {totalPrice}</div>
				{cartItem.length > 0 && (
					<button className='submitButton' onClick={onClickSubmit}>
						Submit
					</button>
				)}
			</div>
		</div>
	);
}

export default Cart;
