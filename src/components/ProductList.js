import {useState} from 'react';
import ProductItem from './ProductItem';
import Message from './Message';
import {ProductListContainer, SearchBox} from '../styles';
import PropTypes from 'prop-types';
import Search from './Search';

import CategoriesFilter from './CategoriesFilter';

const ProductList = ({products, categories, cart, setCart}) => {
	const [searchTerm, setSearchTerm] = useState();
	const [selectedCategories, setSelectedCategories] = useState([]);

	const termRegexp = new RegExp(searchTerm, 'i');
	const filteredProducts = products.filter((p) => p.title.search(termRegexp) !== -1 && (selectedCategories.length === 0 || selectedCategories.includes(p.category)));

	return (
		<>
			<SearchBox>
				<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				<CategoriesFilter categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
			</SearchBox>
			<ProductListContainer>
				{filteredProducts.map((product, key) => (
					<ProductItem key={key} product={product} cart={cart} setCart={setCart} />
				))}
				{filteredProducts.length === 0 && <Message msg={'Product not found'} />}
			</ProductListContainer>
		</>
	);
};

ProductList.propTypes = {
	products: PropTypes.array.isRequired,
	categories: PropTypes.array.isRequired,
};

export default ProductList;
