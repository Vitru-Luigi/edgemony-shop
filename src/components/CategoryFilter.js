import {PropTypes} from 'prop-types';
import {Button} from '../styles';

const CategoryFilter = ({name, selectedCategories, setSelectedCategories}) => {
	const isSelected = selectedCategories.includes(name);
	const toggleCategory = () => {
		const newSelected = isSelected ? selectedCategories.filter((category) => category !== name) : [...selectedCategories, name];
		setSelectedCategories(newSelected);
	};
	return (
		<Button isSelected={isSelected} onClick={toggleCategory}>
			{name}
		</Button>
	);
};

CategoryFilter.propTypes = {
	name: PropTypes.string.isRequired,
	selectedCategories: PropTypes.array.isRequired,
	setSelectedCategories: PropTypes.func.isRequired,
};

export default CategoryFilter;
