import './Main.scss';
import { useEffect, useState } from 'react';
import Hero from './Hero';
import ProductList from './ProductList';
import Loader from './Loader';
import Message from './Message';

const Main = ({ data }) => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [initProducts, setInitProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
	const [recon, setRecon] = useState(false);
	const [msg, setMsg] = useState('');

	const [electronics, setElectronics] = useState(false);
	const [jewelery, setJewelery] = useState(false);
	const [menClothing, setMenClothing] = useState(false);
	const [womenClothing, setWomenClothing] = useState(false);

	useEffect(() => {
		setLoading(true);
		setError(false);
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((products) => {
				setInitProducts(products);
				setProducts(products);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				setError(true);
				setErrorMsg(`${err}`);
			});

		fetch('https://fakestoreapi.com/products/categories')
			.then((res) => res.json())
			.then((categorie) => {
				setCategories(categorie);
			})
			.catch((err) => {
				setError(true);
				setErrorMsg(`${err}`);
			});
	}, [recon]);

	const onSearch = (e) => {
		if (e.target.value.length > 3) {
			// setProducts([]);
			const titleProducts = products.filter((p) => p.title.toLowerCase().includes(e.target.value.toLowerCase()));
			const descProducts = products.filter((p) => p.description.toLowerCase().includes(e.target.value.toLowerCase()));
			let filteredProducts = [...descProducts, ...titleProducts];
			const noDupeProducts = filteredProducts.filter((item, i) => filteredProducts.indexOf(item) === i);
			setProducts(noDupeProducts);
			filteredProducts.length === 0 && setMsg('Nessun risultato trovato');
		}
		if (e.target.value.length < 4) {
			setProducts(initProducts);
			setMsg('');
		}
	};

	const onClickFilterCategory = (category) => {
		category === 'electronics' && setElectronics(!electronics);
		category === 'jewelery' && setJewelery(!jewelery);
		category === 'men clothing' && setMenClothing(!menClothing);
		category === 'women clothing' && setWomenClothing(!womenClothing);
	};

	useEffect(() => {
		let filterProductsByCategory = [];
		if (electronics) {
			let electronicsProducts = initProducts.filter((p) => p.category.toLowerCase() === 'electronics');
			filterProductsByCategory = [...filterProductsByCategory, ...electronicsProducts];
		}
		if (jewelery) {
			let jeweleryProducts = initProducts.filter((p) => p.category.toLowerCase() === 'jewelery');
			filterProductsByCategory = [...filterProductsByCategory, ...jeweleryProducts];
		}
		if (menClothing) {
			let menClothingProducts = initProducts.filter((p) => p.category.toLowerCase() === 'men clothing');
			filterProductsByCategory = [...filterProductsByCategory, ...menClothingProducts];
		}
		if (womenClothing) {
			let womenClothingProducts = initProducts.filter((p) => p.category.toLowerCase() === 'women clothing');
			filterProductsByCategory = [...filterProductsByCategory, ...womenClothingProducts];
		}

		if (filterProductsByCategory.length > 0) {
			setProducts(filterProductsByCategory);
		} else {
			setProducts(initProducts);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [electronics, jewelery, menClothing, womenClothing]);

	console.log(categories[0]);

	return (
		<main className='Main'>
			<Hero cover={data.cover} description={data.description} title={data.title} />

			<div className='Searchbox'>
				<div>
					<input type='text' onChange={onSearch} className='input-search' />
				</div>
				<div className='wrap-btn'>
					<button onClick={() => onClickFilterCategory(categories[0])} className={`category-btn ${electronics ? 'isActive' : null}`}>
						{categories[0]}
					</button>
					<button onClick={() => onClickFilterCategory(categories[1])} className={`category-btn ${jewelery ? 'isActive' : null}`}>
						{categories[1]}
					</button>
					<button onClick={() => onClickFilterCategory(categories[2])} className={`category-btn ${menClothing ? 'isActive' : null}`}>
						{categories[2]}
					</button>
					<button onClick={() => onClickFilterCategory(categories[3])} className={`category-btn ${womenClothing ? 'isActive' : null}`}>
						{categories[3]}
					</button>
				</div>
			</div>

			{loading ? <Loader /> : <ProductList products={products} />}

			{msg && <Message msg={msg} />}

			{error && (
				<>
					<Message msg={errorMsg} />{' '}
					<button className='recon-btn' onClick={() => setRecon(!recon)}>
						Try again!
					</button>
				</>
			)}
		</main>
	);
};

export default Main;
