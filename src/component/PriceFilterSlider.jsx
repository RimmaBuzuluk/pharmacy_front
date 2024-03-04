import React, { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilterSlider = ({ setPrice }) => {
	const [priceRange, setPriceRange] = useState([0, 10000]);
	const [maxPrice, setMaxPrice] = useState(10000);

	const handlePriceChange = value => {
		setPriceRange(value);
		setPrice(value);
		// onPriceChange(value);
	};

	return (
		<div>
			<div>
				{/* Відображення поточного діапазону ціни */}
				Ціна: від {priceRange[0]} до {priceRange[1]}
			</div>

			{/* Ползунок ціни */}
			<Slider className='h-4 w-10 my-4 ' range min={0} max={maxPrice} step={1} defaultValue={[0, maxPrice]} value={priceRange} onChange={handlePriceChange} />
		</div>
	);
};

export default PriceFilterSlider;
