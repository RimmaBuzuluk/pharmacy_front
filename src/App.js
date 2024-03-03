import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import SideBar from './component/SideBar/SideBar';
import Shop from './page/Shop/Shop';
import Cart from './page/Cart/Cart';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<div className='Main'>
					<Routes>
						<Route path='/' element={<Shop />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
