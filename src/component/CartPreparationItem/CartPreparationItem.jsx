import { useSelector } from 'react-redux';
import './CartPreparationItem.css';
import { selectIsAuth } from '../../store/slice/auth';
import { useState } from 'react';
import axios from '../../axios';

function CartPreparationItem({ cartItem, render, cartId }) {
	const isAuth = useSelector(selectIsAuth);
	const [quantity, setQuantity] = useState(cartItem.quantity);
	const userData = useSelector(state => state.auth.data);

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
		// Відправка запиту на збільшення кількості
		axios
			.put(`/carts/${userData.cartId}/items/${cartItem._id}`, { quantity: quantity + 1 })
			.then(response => {
				render();
			})
			.catch(error => {
				console.error('Сталася помилка при збільшенні кількості елементів у корзині:', error);
			});
	};

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);

			// Відправка запиту на зменшення кількості
			axios
				.put(`/carts/${userData.cartId}/items/${cartItem._id}`, { quantity: quantity - 1 })
				.then(response => {
					render();
				})
				.catch(error => {
					console.error('Сталася помилка при зменшенні кількості елементів у корзині:', error);
				});
		}
	};

	const onClickDelete = () => {
		axios
			.delete(`carts/${cartId}/items/${cartItem._id}`)
			.then(response => {
				render();
			})
			.catch(error => {
				console.error('Сталася помилка при зменшенні кількості елементів у корзині:', error);
			});
	};

	return (
		<div className='CartPreparationItem'>
			<div className='CartPreparationItem_img'>
				<img src={`${cartItem.preparation.preparationImg}`} />
			</div>
			<div className='CartPreparationItem_inform'>
				<div className='CartPreparationItem_infText'>
					<div className='CartPreparationItem_name'>{cartItem.preparation.preparationName}</div>
					<div className='CartPreparationItem_price'>price:{cartItem.preparation.preparationPrice}</div>
				</div>
				<div className='counter'>
					<div className='counterInput'>{quantity}</div>
					<div className='count_buts'>
						<button className='increment' onClick={increaseQuantity}>
							+
						</button>
						<button className='decrement' onClick={decreaseQuantity}>
							-
						</button>
					</div>
				</div>
				<div onClick={onClickDelete} className='deleteItem'>
					<img src='https://cdn-icons-png.flaticon.com/512/1799/1799391.png' />
				</div>
			</div>
		</div>
	);
}

export default CartPreparationItem;
