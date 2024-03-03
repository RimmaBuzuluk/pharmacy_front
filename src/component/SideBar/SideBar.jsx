import MenuItem from '../menuItem/MenuItem';
import './SideBar.css';

function SideBar() {
	const MenuItemArr = [
		{ value: 'Pills', lable: 'Pills' },
		{ value: 'Capsules', lable: 'Capsules' },
		{ value: 'Krapli', lable: 'Krapli' },
		{ value: 'Plastiri', lable: 'Plastiri' },
		{ value: 'Injections', lable: 'Injections' },
		{ value: 'Cosmetic care', lable: 'CosmeticCare' },
		{ value: 'Adjust medically', lable: 'AdjustMedically' },
		{ value: 'Children and grown up children', lable: 'ChildrenAndGrownUpChildren' },
	];

	return (
		<div className='SideBar'>
			<div className='SideBar_title'>Shops</div>
			{MenuItemArr.map((value, label) => (
				<MenuItem value={value} />
			))}
		</div>
	);
}

export default SideBar;
