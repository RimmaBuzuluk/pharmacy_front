import { useSelector } from 'react-redux';
import './CartPreparationItem.css';
import { selectIsAuth } from '../../store/slice/auth';
import { useState } from 'react';
import axios from '../../axios';

function CartPreparationItem({ cartItem }) {
	const isAuth = useSelector(selectIsAuth);
	const [quantity, setQuantity] = useState(cartItem.quantity);
	const userData = useSelector(state => state.auth.data);

	console.log(userData.cartId);
	const increaseQuantity = () => {
		setQuantity(quantity + 1);
		// Відправка запиту на збільшення кількості
		console.log(quantity);
		axios
			.put(`/carts/${userData.cartId}/items/${cartItem._id}`, { quantity: quantity + 1 })
			.then(response => {
				// Оновлення стану або виконання інших необхідних дій після успішної відповіді
			})
			.catch(error => {
				console.error('Сталася помилка при збільшенні кількості елементів у корзині:', error);
			});
	};

	const decreaseQuantity = () => {
		setQuantity(quantity - 1);

		// Відправка запиту на зменшення кількості
		axios
			.put(`/carts/${userData.cartId}/items/${cartItem._id}`, { quantity: quantity - 1 })
			.then(response => {
				// Оновлення стану або виконання інших необхідних дій після успішної відповіді
			})
			.catch(error => {
				console.error('Сталася помилка при зменшенні кількості елементів у корзині:', error);
			});
	};

	const handleQuantityChange = event => {
		setQuantity(event.target.value);
	};

	console.log(quantity);
	return (
		<div className='CartPreparationItem'>
			{isAuth ? (
				<>
					<div className='CartPreparationItem_img'>
						<img src={`${cartItem.preparation.preparationImg}`} />
					</div>
					<div className='CartPreparationItem_inform'>
						<div className='CartPreparationItem_name'>{cartItem.preparation.preparationName}</div>
						<div className='CartPreparationItem_price'>price:{cartItem.preparation.preparationPrice}</div>
						<div className='counter'>
							<input className='counterInput' onChange={handleQuantityChange} value={quantity} />
							<div className='count_buts'>
								<button className='decrement' onClick={decreaseQuantity}>
									-
								</button>
								<button className='increment' onClick={increaseQuantity}>
									+
								</button>
							</div>
						</div>
					</div>
				</>
			) : (
				<div>Для того щоб зберегти продукт в корзину необхідно зареєстуваись</div>
			)}
		</div>
	);
}

export default CartPreparationItem;
