import { useEffect, useState } from 'react';
import PreparationItem from '../../component/PreparationItem/PreparationItem';
import axios from '../../axios';
import SideBar from '../../component/SideBar/SideBar';
import '../../component/SideBar/SideBar.css';
import './Shop.css';
import { useDispatch, useSelector } from 'react-redux';
import PriceFilterSlider from '../../component/PriceFilterSlider';
import { selectIsAuth } from '../../store/slice/auth';

function Shop() {
	const dispatch = useDispatch();
	const [preparations, setPreparations] = useState([]);
	const [price, setPrice] = useState([]);
	const isAuth = useSelector(selectIsAuth);
	const preparationType = useSelector(state => state.typeFilter.preparationType);

	const handleAddToCart = itemId => {
		if (!isAuth) {
			alert('Щоб додати товар в корзину ви маєте авторизуватись');
		} else {
			const fields = { itemId };
			axios.post(`/carts/65e5ecaec3626d921b455713/items`, fields);
		}
	};

	useEffect(() => {
		let url = 'http://localhost:4444/preparation/allItem';
		if (preparationType) {
			url += `?preparationType=${preparationType}`;
		}
		if (price.length > 0) {
			if (preparationType) {
				url += `&`;
			} else {
				url += `?`;
			}
			url += `minPrice=${price[0]}&&maxPrice=${price[1]}`;
		}
		axios
			.get(url)
			.then(response => {
				setPreparations(response.data);
			})
			.catch(error => {
				console.error('Сталася помилка при виконанні запиту:', error); // Виводимо помилку в консоль
			});
	}, [preparationType, price]);

	return (
		<div className='Shop'>
			<SideBar />
			<div className='shopItems'>
				<div className='PriceFilter'>
					<div className='PriceFilter_title'>Price filter</div>
					<PriceFilterSlider setPrice={setPrice} />
				</div>
				<div>
					{preparations.length > 0 ? (
						<div className='Shop_Item'>
							{preparations.map(preparation => (
								<PreparationItem key={preparation._id} preparation={preparation} onClick={handleAddToCart} />
							))}
						</div>
					) : (
						<div>немає товарів</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Shop;
