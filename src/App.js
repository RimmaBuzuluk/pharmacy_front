import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import SideBar from './component/SideBar/SideBar';
import Shop from './page/Shop/Shop';
import Cart from './page/Cart/Cart';
import Auth from './page/auth/Auth';
import Register from './component/register/Register';
import { selectIsAuth } from './store/slice/auth';
import { useSelector } from 'react-redux';

function App() {
	const isAuth = useSelector(selectIsAuth);
	return (
		<Router>
			<div className='App'>
				<Header />
				<div className='Main'>
					<Routes>
						<Route path='/' element={<Shop />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/register' element={<Register />} />
						<Route path='/auth' element={<Auth />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
