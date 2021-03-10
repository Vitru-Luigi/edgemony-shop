import {PropTypes} from 'prop-types';
import CategoryFilter from './CategoryFilter';

import './CategoriesFilter.scss';

const CategoriesFilter = ({categories, selectedCategories, setSelectedCategories}) => (
	<div className='CategoriesFilter'>
		{categories.map((category) => (
			<CategoryFilter key={category} name={category} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
		))}
	</div>
);

CategoriesFilter.propTypes = {
	categories: PropTypes.array.isRequired,
	selectedCategories: PropTypes.array.isRequired,
	setSelectedCategories: PropTypes.func.isRequired,
};

export default CategoriesFilter;
