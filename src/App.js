import data from './utils/data';
import {fetchProducts, fetchCatogories} from './services/api';
import {useEffect, useState} from 'react';

import './components/Main.scss';
import Main from './containers/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Loader from './components/Loader';
import Alert from './components/Alert';

import './App.scss';

const App = () => {
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

	return (
		<>
			<Header logo={data.logo} />
			<Main>
				<Hero cover={data.cover} description={data.description} title={data.title} />
				{loading ? <Loader /> : <ProductList products={products} categories={categories} />}
				{apiError && <Alert msg={apiError} close={() => setApiError('')} retry={() => setRetry(!retry)} />}
			</Main>
			<Footer title={data.title} />
		</>
	);
};

export default App;
