import React, { useState } from 'react';
import './Register.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister, selectIsAuth } from '../../store/slice/auth';
import { Navigate, useNavigate } from 'react-router-dom';

function Register() {
	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);
	const navigate = useNavigate();

	const [name, setName] = useState('Римма Бузулук');
	const [email, setEmail] = useState('buzuluk@gmail.com');
	const [number, setNumber] = useState('0953272213');
	const [address, setAddress] = useState('lalal');
	const [password, setPassword] = useState('12345678');

	const handleNameChange = e => {
		setName(e.target.value);
	};

	const handleEmailChange = e => {
		setEmail(e.target.value);
	};

	const handlePhoneChange = e => {
		setNumber(e.target.value);
	};

	const handleAddressChange = e => {
		setAddress(e.target.value);
	};

	const handlePasswordChange = e => {
		setPassword(e.target.value);
	};

	const onSubmit = async () => {
		const values = { name, number, address, email, password };
		const data = await dispatch(fetchRegister(values));

		if (!data.payload) {
			return alert('не вдалось зареєструватись');
		}

		if ('token' in data.payload) {
			window.localStorage.setItem('token', data.payload.token);
			navigate('/');
		}
	};

	console.log(isAuth);

	return (
		<div className='Registration'>
			<div className='registration_items'>
				<div>Registration</div>
				<div className='register_item'>
					<div className='register_itemName'>Name:</div>
					<input value={name} onChange={handleNameChange} />
				</div>
				<div className='register_item'>
					<div className='register_itemName'>Email:</div>
					<input value={email} onChange={handleEmailChange} />
				</div>
				<div className='register_item'>
					<div className='register_itemName'>Phone:</div>
					<input value={number} onChange={handlePhoneChange} />
				</div>
				<div className='register_item'>
					<div className='register_itemName'>Address:</div>
					<input value={address} onChange={handleAddressChange} />
				</div>
				<div className='register_item'>
					<div className='register_itemName'>Password:</div>
					<input value={password} onChange={handlePasswordChange} />
				</div>
				<div className='registerButt'>
					<button onClick={onSubmit}>OK</button>
				</div>
			</div>
		</div>
	);
}

export default Register;
