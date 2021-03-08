import {PropTypes} from 'prop-types';
import CategoryFilter from './CategoryFilter';

import './CategoriesFilter.scss';

function CategoriesFilter({categories, selectedCategories, setSelectedCategories}) {
	return (
		<div className='CategoriesFilter'>
			{categories.map((category) => (
				<CategoryFilter key={category} name={category} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
			))}
		</div>
	);
}

CategoriesFilter.propTypes = {
	categories: PropTypes.array.isRequired,
	selectedCategories: PropTypes.array.isRequired,
	setSelectedCategories: PropTypes.func.isRequired,
};

export default CategoriesFilter;
