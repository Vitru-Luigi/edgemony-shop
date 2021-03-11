import data from './utils/data';
import {fetchProducts, fetchCatogories} from './services/api';
import {useEffect, useState} from 'react';

import './components/Main.scss';
import Main from './containers/Main';

import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductModal from './components/ProductModal';
import RightSideBar from './components/RightSideBar';
import ProductList from './components/ProductList';
import Loader from './components/Loader';
import Alert from './components/Alert';

import {Body} from './styles';

import './App.scss';

const App = () => {
	const [productInModal, setProductInModal] = useState(null);

	const [isProductOpen, setProductOpen] = useState(false);
	const [isCartOpen, setCartOpen] = useState(false);

	const openProductModal = (product) => {
		setProductInModal(product);
		setProductOpen(true);
	};

	const closeProductModal = () => {
		setProductOpen(false);
		setTimeout(() => {
			setProductInModal(null);
		}, 500);
	};

	// useEffect(() => {
	// 	if (isProductOpen || isCartOpen) {
	// 		document.body.style.height = `100vh`;
	// 		document.body.style.overflow = `hidden`;
	// 	} else {
	// 		document.body.style.height = ``;
	// 		document.body.style.overflow = ``;
	// 	}
	// }, [isProductOpen, isCartOpen]);

	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	const [loading, setLoading] = useState(false);
	const [apiError, setApiError] = useState(false);
	const [retry, setRetry] = useState(false);

	useEffect(() => {
		setLoading(true);
		setApiError('');
		Promise.all([fetchProducts(), fetchCatogories()])
			.then(([products, categories]) => {
				setProducts(products);
				setCategories(categories);
			})
			.catch((err) => setApiError(err.message))
			.finally(() => setLoading(false));
	}, [retry]);

	const [cart, setCart] = useState([]);

	const cartProducts = cart.map((cartItem) => {
		const {price, image, title, id} = products.find((p) => p.id === cartItem.id);
		return {price, image, title, id, quantity: cartItem.quantity};
	});

	const totalPrice = cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);

	const isInCart = (product) => product != null && cart.find((p) => p.id === product.id) != null;

	const addToCart = (productId) => setCart([...cart, {id: productId, quantity: 1}]);

	const removeFromCart = (productId) => setCart(cart.filter((product) => product.id !== productId));

	const setProductQuantity = (productId, quantity) => setCart(cart.map((product) => (product.id === productId ? {...product, quantity} : product)));

	const resetError = () => setApiError('');

	const toogleRetry = () => setRetry(!retry);

	const openCartModal = () => setCartOpen(true);

	const closeCartModal = () => setCartOpen(false);

	console.log(isProductOpen);

	return (
		<Body>
			<Header logo={data.logo} title={data.title} totalPrice={totalPrice} cartSize={cart.length} onCartClick={openCartModal} />
			<Main>
				<Hero cover={data.cover} description={data.description} title={data.title} />
				{loading ? <Loader /> : <ProductList products={products} categories={categories} openProductModal={openProductModal} />}
				{apiError && <Alert msg={apiError} close={resetError} retry={toogleRetry} />}
			</Main>
			<ProductModal isOpen={isProductOpen} product={productInModal} close={closeProductModal} inCart={isInCart(productInModal)} addToCart={addToCart} removeFromCart={removeFromCart} />
			<RightSideBar isOpen={isCartOpen} close={closeCartModal}>
				<Cart products={cartProducts} removeFromCart={removeFromCart} setProductQuantity={setProductQuantity} totalPrice={totalPrice} />
			</RightSideBar>
			<Footer title={data.title} />
		</Body>
	);
};

export default App;
