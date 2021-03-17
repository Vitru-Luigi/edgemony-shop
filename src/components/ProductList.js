import {useState} from 'react';
import ProductItem from './ProductItem';
import Message from './Message';
import {ProductListContainer, SearchBox} from '../styles';
import PropTypes from 'prop-types';
import Search from './Search';

import CategoriesFilter from './CategoriesFilter';
import {useHistory, useLocation} from 'react-router';

const ProductList = ({products, categories}) => {
	const [searchTerm, setSearchTerm] = useState();
	const location = useLocation();
	const history = useHistory();

	const selectedCategoriesParam = new URLSearchParams(location.search).get('categories');

	const selectedCategories = selectedCategoriesParam ? selectedCategoriesParam.split(',') : [];

	function updateCategories(categories) {
		const newParams = new URLSearchParams(location.search);
		const selectedParam = categories.join(',');
		if (categories.length === 0) {
			newParams.delete('categories');
		} else {
			newParams.set('categories', selectedParam);
		}
		history.push({search: '?' + newParams.toString()});
	}

	const termRegexp = new RegExp(searchTerm, 'i');

	const filteredProducts = products.filter((p) => p.title.search(termRegexp) !== -1 && (selectedCategories.length === 0 || selectedCategories.includes(p.category)));

	return (
		<>
			<SearchBox>
				<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				<CategoriesFilter categories={categories} selectedCategories={selectedCategories} setSelectedCategories={updateCategories} />
			</SearchBox>
			<ProductListContainer>
				{filteredProducts.map((product, key) => (
					<ProductItem key={key} product={product} />
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
