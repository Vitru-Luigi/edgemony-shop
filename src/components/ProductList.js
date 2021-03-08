import {useState} from 'react';
import Product from './Product';
import Message from './Message';
import SearchBox from '../containers/SearchBox';
import './ProductList.scss';
import PropTypes from 'prop-types';
import Search from './Search';

import CategoriesFilter from './CategoriesFilter';

const ProductList = ({products, categories, cart, setCart, openProductModal}) => {
	const [searchTerm, setSearchTerm] = useState();
	const [selectedCategories, setSelectedCategories] = useState([]);

	const termRegexp = new RegExp(searchTerm, 'i');
	const filteredProducts = products.filter((product) => product.title.search(termRegexp) !== -1 && (selectedCategories.length === 0 || selectedCategories.includes(product.category)));
	return (
		<>
			<SearchBox>
				<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				<CategoriesFilter categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
			</SearchBox>
			<section className='ProductList'>
				{filteredProducts.map((product, key) => (
					<Product key={key} product={product} cart={cart} setCart={setCart} openProductModal={() => openProductModal(product)} />
				))}
				{filteredProducts.length === 0 && <Message msg={'Product not found'} />}
			</section>
		</>
	);
};

ProductList.propTypes = {
	products: PropTypes.array.isRequired,
	categories: PropTypes.array.isRequired,
};

export default ProductList;
