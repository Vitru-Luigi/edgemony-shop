import {PropTypes} from 'prop-types';

import './CategoryFilter.scss';

const CategoryFilter = ({name, selectedCategories, setSelectedCategories}) => {
	const isSelected = selectedCategories.includes(name);
	const className = 'CategoryFilter' + (isSelected ? ' selected' : '');
	const toggleCategory = () => {
		const newSelected = isSelected ? selectedCategories.filter((category) => category !== name) : [...selectedCategories, name];
		setSelectedCategories(newSelected);
	};

	return (
		<button key={name} className={className} onClick={toggleCategory}>
			{name}
		</button>
	);
};

CategoryFilter.propTypes = {
	name: PropTypes.string.isRequired,
	selectedCategories: PropTypes.array.isRequired,
	setSelectedCategories: PropTypes.func.isRequired,
};

export default CategoryFilter;