import { useState } from 'react';
import './Auth.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../../store/slice/auth';
import { Navigate } from 'react-router-dom';

function Auth() {
	const [email, setEmail] = useState('test@gmail.com');
	const [password, setPassword] = useState('12345678');
	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);

	const handleEmailChange = e => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = e => {
		setPassword(e.target.value);
	};

	const onSubmit = async () => {
		const values = { email, password }; // Створення об'єкту з email та password
		const data = await dispatch(fetchAuth(values));
	};

	if (isAuth) {
		return <Navigate to='/' />;
	}

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
