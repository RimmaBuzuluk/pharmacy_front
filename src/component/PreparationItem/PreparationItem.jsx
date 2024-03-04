import { useSelector } from 'react-redux';
import './PreparationItem.css';
import { selectIsAuth } from '../../store/slice/auth';
import { useNavigate } from 'react-router-dom';

function PreparationItem({ preparation, onClick }) {
	const handlItem = event => {
		onClick(preparation._id);
	};
	return (
		<div className='PreparationItem'>
			<div className='PreparationItem_img'>
				<img src={preparation.preparationImg} />
			</div>
			<div className='preparationItem_information'>
				<div className='preparationItem_name'>{preparation.preparationName}</div>
				<div className='preparationItem_button'>
					<button onClick={handlItem}>add to Cart</button>
				</div>
			</div>
		</div>
	);
}

export default PreparationItem;
