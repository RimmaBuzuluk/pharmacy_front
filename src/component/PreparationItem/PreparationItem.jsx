import './PreparationItem.css';

function PreparationItem({ preparation }) {
	// console.log(preparation._id); // Отримаємо id
	return (
		<div className='PreparationItem'>
			<div className='PreparationItem_img'>
				<img src={preparation.preparationImg} />
			</div>
			<div className='preparationItem_information'>
				<div className='preparationItem_name'>{preparation.preparationName}</div>
				<div className='preparationItem_button'>
					<button>add to Cart</button>
				</div>
			</div>
		</div>
	);
}

export default PreparationItem;
