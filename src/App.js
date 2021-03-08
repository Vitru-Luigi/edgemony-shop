import data from './utils/data';
import {fetchProducts, fetchCatogories} from './services/api';
import {useEffect, useState} from 'react';

import './components/Main.scss';
import Main from './containers/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductModal from './components/ProductModal';
import ProductList from './components/ProductList';
import Loader from './components/Loader';
import Alert from './components/Alert';

import './App.scss';

const App = () => {
	const [productInModal, setProductInModal] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function openProductModal(product) {
		console.log(product);
		setProductInModal(product);
		setModalIsOpen(true);
	}

	function closeModal() {
		setModalIsOpen(false);
		setTimeout(() => {
			setProductInModal(null);
		}, 500);
	}

	useEffect(() => {
		if (modalIsOpen) {
			document.body.style.height = `100vh`;
			document.body.style.overflow = `hidden`;
		} else {
			document.body.style.height = ``;
			document.body.style.overflow = ``;
		}
	}, [modalIsOpen]);

	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	const [inCart, setInCart] = useState([]);
	console.log(inCart);

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
	return (
		<>
			<Header logo={data.logo} inCart={inCart} />
			<Main>
				<Hero cover={data.cover} description={data.description} title={data.title} />
				{loading ? <Loader /> : <ProductList products={products} categories={categories} openProductModal={openProductModal} />}
				{apiError && <Alert msg={apiError} close={() => setApiError('')} retry={() => setRetry(!retry)} />}
			</Main>
			<ProductModal inCart={inCart} addToCart={setInCart} isOpen={modalIsOpen} product={productInModal} closeModal={closeModal} />
			<Footer title={data.title} />
		</>
	);
};

export default App;
