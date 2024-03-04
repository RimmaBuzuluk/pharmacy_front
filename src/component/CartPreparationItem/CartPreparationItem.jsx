import './CartPreparationItem.css';

function CartPreparationItem() {
	return (
		<div className='CartPreparationItem'>
			<div className='CartPreparationItem_img'>{/* <img src='https://vault.apteki.ua/one/files/4f6a338041deaafd36c90a4b09c4ffd7/153062/153062_0.jpg' /> */}</div>
			<div className='CartPreparationItem_inform'>
				<div className='CartPreparationItem_name'>name</div>
				<div className='CartPreparationItem_price'>price:90</div>
				<div class='counter'>
					<input className='counterInput' />
					<div className='count_buts'>
						<button class='decrement'>-</button>
						<button class='increment'>+</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartPreparationItem;
