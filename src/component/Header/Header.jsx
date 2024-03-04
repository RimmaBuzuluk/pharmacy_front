import { Link } from 'react-router-dom';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPreparationType } from '../../store/slice/typeFilter';
import { logout, selectIsAuth } from '../../store/slice/auth';

function Header() {
	const dispatch = useDispatch();
	const handelClick = () => {
		dispatch(setPreparationType(null));
	};
	const isAuth = useSelector(selectIsAuth);

	const onClickLogout = () => {
		if (window.confirm('Are you sure you want to log')) {
			dispatch(logout());
			window.localStorage.removeItem('token');
		}
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
			{isAuth ? <button onClick={onClickLogout}>вихід</button> : <Link to='/auth'>auth</Link>}
		</div>
	);
}

export default Header;
