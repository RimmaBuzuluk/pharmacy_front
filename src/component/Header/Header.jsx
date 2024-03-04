import { Link } from 'react-router-dom';
import './Header.css';
import { useDispatch } from 'react-redux';
import { setPreparationType } from '../../store/slice/typeFilter';

function Header() {
	const dispatch = useDispatch();
	const handelClick = () => {
		dispatch(setPreparationType(null));
	};
	return (
		<div className='Header'>
			<div className='rout'>
				<Link to='/' onClick={handelClick} className='rout_item'>
					Shop
				</Link>
				<Link to='/cart' className='rout_item'>
					Shopping Cart
				</Link>
			</div>
			<Link to='/auth'>auth</Link>
		</div>
	);
}

export default Header;
