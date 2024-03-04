import './Register.css';

function Register() {
	return (
		<div className='Registration'>
			<div className='registration_items'>
				<div className='register_item'>
					<div className='register_itemName'>Name:</div>
					<input />
				</div>
				<div className='register_item'>
					<div className='register_itemName'>Email:</div>
					<input />
				</div>
				<div className='register_item'>
					<div className='register_itemName'>Phone:</div>
					<input />
				</div>
				<div className='register_item'>
					<div className='register_itemName'>Address:</div>
					<input />
				</div>
				<div className='register_item'>
					<div className='register_itemName'>Password:</div>
					<input />
				</div>
			</div>
		</div>
	);
}

export default Register;
