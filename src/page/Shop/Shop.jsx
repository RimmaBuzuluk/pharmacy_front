import { useEffect, useState } from 'react';
import PreparationItem from '../../component/PreparationItem/PreparationItem';
import axios from 'axios';
import SideBar from '../../component/SideBar/SideBar';
import '../../component/SideBar/SideBar.css';
import './Shop.css';
import { useDispatch, useSelector } from 'react-redux';

function Shop() {
	const dispatch = useDispatch();

	const [preparations, setPreparations] = useState([]);
	const preparationType = useSelector(state => state.typeFilter.preparationType);

	console.log(preparations.length > 0);
	// console.log(preparations);

	useEffect(() => {
		let url = 'http://localhost:4444/preparation/allItem';
		if (preparationType) {
			url += `?preparationType=${preparationType}`;
		}
		axios
			.get(url)
			.then(response => {
				setPreparations(response.data);
			})
			.catch(error => {
				console.error('Сталася помилка при виконанні запиту:', error); // Виводимо помилку в консоль
			});
	}, [preparationType]);

	return (
		<div className='Shop'>
			<SideBar />
			<div className='shopItems'>
				{preparations.length > 0 ? (
					<div className='Shop_Item'>
						{preparations.map(preparation => (
							<PreparationItem key={preparation._id} preparation={preparation} />
						))}
					</div>
				) : (
					<div>немає товарів</div>
				)}
			</div>
		</div>
	);
}

export default Shop;
