import data from './utils/data';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useState} from 'react';

import './styles/scss/App.scss';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Product from './pages/Product';
import Page404 from './pages/Page404';
import Cart from './pages/Cart';

import Theme from './containers/Theme';

const App = () => {
	const [cart, setCart] = useState([]);
	const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
	function isInCart(product) {
		return product != null && cart.find((p) => p.id === product.id) != null;
	}
	function addToCart(product) {
		setCart([...cart, {...product, quantity: 1}]);
	}
	function removeFromCart(productId) {
		setCart(cart.filter((product) => product.id !== productId));
	}
	function setProductQuantity(productId, quantity) {
		setCart(cart.map((product) => (product.id === productId ? {...product, quantity} : product)));
	}

	return (
		<Theme>
			<Router>
				<Header logo={data.logo} title={data.title} totalPrice={totalPrice} cartSize={cart.length} />
				<Switch>
					<Route exact path='/cart'>
						<Cart products={cart} totalPrice={totalPrice} removeFromCart={removeFromCart} setProductQuantity={setProductQuantity} />
					</Route>
					<Route exact path='/product/:productId'>
						<Product addToCart={addToCart} removeFromCart={removeFromCart} isInCart={isInCart} />
					</Route>
					{/* <Route path='/*'>
						<Page404 />
					</Route> */}
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
				<Footer title={data.title} />
			</Router>
		</Theme>
	);
};

export default App;
