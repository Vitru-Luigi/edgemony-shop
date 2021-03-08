import {useState} from 'react';
import Product from './Product';
import './ProductList.scss';
import PropTypes from 'prop-types';
import Search from './Search';

import CategoriesFilter from './CategoriesFilter';

const ProductList = ({products, categories}) => {
	const [searchTerm, setSearchTerm] = useState();
	const [selectedCategories, setSelectedCategories] = useState([]);

	const termRegexp = new RegExp(searchTerm, 'i');
	const filteredProducts = products.filter((product) => product.title.search(termRegexp) !== -1 && (selectedCategories.length === 0 || selectedCategories.includes(product.category)));
	return (
		<>
			<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<CategoriesFilter categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
			<section className='ProductList'>
				{filteredProducts.map((product, key) => (
					<Product key={key} product={product} />
				))}
			</section>
		</>
	);
};

ProductList.propTypes = {
	products: PropTypes.array.isRequired,
	categories: PropTypes.array.isRequired,
};

export default ProductList;
