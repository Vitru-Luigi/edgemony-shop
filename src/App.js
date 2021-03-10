import data from './utils/data';
import {fetchProducts, fetchCatogories} from './services/api';
import {useEffect, useState} from 'react';

import './components/Main.scss';
import Main from './containers/Main';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductModal from './components/ProductModal';
import CartModal from './components/CartModal';
import ProductList from './components/ProductList';
import Loader from './components/Loader';
import Alert from './components/Alert';

import './App.scss';

const App = () => {
	const [productInModal, setProductInModal] = useState(null);
	const [productModalIsOpen, setProductModalIsOpen] = useState(false);

	function openProductModal(product) {
		console.log(product);
		setProductInModal(product);
		setProductModalIsOpen(true);
	}

	function closeProductModal() {
		setProductModalIsOpen(false);
		setTimeout(() => {
			setProductInModal(null);
		}, 500);
	}

	useEffect(() => {
		if (productModalIsOpen) {
			document.body.style.height = `100vh`;
			document.body.style.overflow = `hidden`;
		} else {
			document.body.style.height = ``;
			document.body.style.overflow = ``;
		}
	}, [productModalIsOpen]);

	const [cartModalIsOpen, setCartModalIsOpen] = useState(false);

	function openCartModal() {
		setCartModalIsOpen(true);
	}

	function closeCartModal() {
		setCartModalIsOpen(false);
	}

	useEffect(() => {
		if (productModalIsOpen) {
			document.body.style.height = `100vh`;
			document.body.style.overflow = `hidden`;
		} else {
			document.body.style.height = ``;
			document.body.style.overflow = ``;
		}
	}, [productModalIsOpen]);

	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	const [cart, setCart] = useState([]);

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

	const totalPrice = cart.reduce((acc, cartItem) => {
		const product = cart.find((p) => p.id === cartItem.id);
		console.log(product);
		return acc + product.price * product.quantity;
		// return acc + product.price * quantity;
	}, 0);
	return (
		<>
			<Header logo={data.logo} cart={cart} products={products} openCartModal={openCartModal} totalPrice={totalPrice} />
			<Main>
				<Hero cover={data.cover} description={data.description} title={data.title} />
				{loading ? <Loader /> : <ProductList products={products} categories={categories} openProductModal={openProductModal} />}
				{apiError && <Alert msg={apiError} close={() => setApiError('')} retry={() => setRetry(!retry)} />}
			</Main>
			<ProductModal cart={cart} setCart={setCart} isOpen={productModalIsOpen} product={productInModal} closeProductModal={closeProductModal} />
			<CartModal cartModalIsOpen={cartModalIsOpen} closeCartModal={closeCartModal} cart={cart} setCart={setCart} totalPrice={totalPrice} />
			<Footer title={data.title} />
		</>
	);
};

export default App;
