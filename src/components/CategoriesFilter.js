import {PropTypes} from 'prop-types';
import CategoryFilter from './CategoryFilter';
import {CategoriesFilterContainer} from '../styles';

const CategoriesFilter = ({categories, selectedCategories, setSelectedCategories}) => (
	<CategoriesFilterContainer>
		{categories.map((category) => (
			<CategoryFilter key={category} name={category} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
		))}
	</CategoriesFilterContainer>
);

CategoriesFilter.propTypes = {
	categories: PropTypes.array.isRequired,
	selectedCategories: PropTypes.array.isRequired,
	setSelectedCategories: PropTypes.func.isRequired,
};

export default CategoriesFilter;
