import data from '../utils/data';
import {fetchProducts, fetchCatogories} from '../services/api';
import {useEffect, useState} from 'react';

import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import Loader from '../components/Loader';
import Alert from '../components/Alert';

import {Body, Main} from '../styles';

const Home = () => {
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

	const resetError = () => setApiError('');

	const toogleRetry = () => setRetry(!retry);

	return (
		<Body>
			<Main>
				<Hero cover={data.cover} description={data.description} title={data.title} />
				{loading ? <Loader /> : <ProductList products={products} categories={categories} />}
				{apiError && <Alert msg={apiError} close={resetError} retry={toogleRetry} />}
			</Main>
		</Body>
	);
};

export default Home;
