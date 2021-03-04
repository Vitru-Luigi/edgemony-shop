import './Main.scss';
import { useEffect, useState } from 'react';
import Hero from './Hero';
import ProductList from './ProductList';
import Loader from './Loader';
import Message from './Message';

const Main = ({ data }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
	const [recon, setRecon] = useState(false);

	useEffect(() => {
		setLoading(true);
		setError(false);
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((products) => {
				setProducts(products);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				setError(true);
				setErrorMsg(`${err}`);
			});
	}, [recon]);

	return (
		<main className='Main'>
			<Hero cover={data.cover} description={data.description} title={data.title} />
			{loading ? <Loader /> : <ProductList products={products} />}
			{error && (
				<>
					<Message msg={errorMsg} />{' '}
					<button
						className='recon-btn'
						onClick={() => {
							setRecon(!recon);
						}}>
						Try again!
					</button>
				</>
			)}
		</main>
	);
};

export default Main;
