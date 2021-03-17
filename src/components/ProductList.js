import ProductItem from './ProductItem';
import Message from './Message';
import {ProductListContainer, SearchBox} from '../styles';
import PropTypes from 'prop-types';
import Search from './Search';

import CategoriesFilter from './CategoriesFilter';
import {useHistory, useLocation} from 'react-router';

const ProductList = ({products, categories}) => {
	const location = useLocation();
	const history = useHistory();
	const searchParams = new URLSearchParams(location.search);

	const selectedCategoriesParam = searchParams.get('categories');
	const selectedCategories = selectedCategoriesParam ? selectedCategoriesParam.split(',') : [];

	const updateCategories = (categories) => {
		const selectedParam = categories.join(',');
		if (categories.length === 0) {
			searchParams.delete('categories');
		} else {
			searchParams.set('categories', selectedParam);
		}
		history.push({search: '?' + searchParams.toString()});
	};

	const searchTerm = searchParams.get('q') || '';
	function uptadeSearchTerm(term) {
		if (term) {
			searchParams.set('q', term);
		} else {
			searchParams.delete('q');
		}
		history.push({search: '?' + searchParams.toString()});
	}

	const termRegexp = new RegExp(searchTerm, 'i');
	const filteredProducts = products.filter((p) => p.title.search(termRegexp) !== -1 && (selectedCategories.length === 0 || selectedCategories.includes(p.category)));

	return (
		<>
			<SearchBox>
				<Search searchTerm={searchTerm} setSearchTerm={uptadeSearchTerm} />
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
