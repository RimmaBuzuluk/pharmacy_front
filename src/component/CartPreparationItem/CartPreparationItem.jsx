import { useSelector } from 'react-redux';
import './CartPreparationItem.css';
import { selectIsAuth } from '../../store/slice/auth';

function CartPreparationItem({ cartItem }) {
	const isAuth = useSelector(selectIsAuth);

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
							<input className='counterInput' value={cartItem.quantity} />
							<div className='count_buts'>
								<button className='decrement'>-</button>
								<button className='increment'>+</button>
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
