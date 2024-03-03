import { useDispatch } from 'react-redux';
import './MenuItem.css';
import { setPreparationType } from '../../store/slice/typeFilter';

function MenuItem({ value }) {
	const dispatch = useDispatch();
	const handelClick = () => {
		dispatch(setPreparationType(value.lable));
	};

	return (
		<button className='MenuItem' onClick={handelClick}>
			<div>{value.value}</div>
		</button>
	);
}

export default MenuItem;
