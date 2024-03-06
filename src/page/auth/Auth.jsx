import { useState } from 'react';
import './Auth.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../../store/slice/auth';
import { Navigate, useNavigate } from 'react-router-dom';

function Auth() {
	const [email, setEmail] = useState('test@gmail.com');
	const [password, setPassword] = useState('12345678');
	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);
	const navigate = useNavigate();

	const handleEmailChange = e => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = e => {
		setPassword(e.target.value);
	};

	const onSubmit = async () => {
		try {
			const values = { email, password }; // Створення об'єкту з email та password
			const data = await dispatch(fetchAuth(values));
			navigate('/');
		} catch (error) {
			alert('Невдалося авторизуватися');
		}
	};

	console.log(isAuth);

	// if (isAuth) {
	// 	return <Navigate to='/' />;
	// }

	return (
		<div className='Auth'>
			<div className='auth_title'>Auth</div>
			<div className='auth_items'>
				<input value={email} onChange={handleEmailChange} />
				<input value={password} onChange={handlePasswordChange} type='password' />
			</div>
			<button onClick={onSubmit}>Вхід</button>
		</div>
	);
}

export default Auth;
