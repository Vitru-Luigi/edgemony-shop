import React from 'react';
import PropTypes from 'prop-types';

const Search = ({setSearchTerm}) => {
	return (
		<div className='Search'>
			<input type='text' onChange={(e) => setSearchTerm(e.target.value)} />
		</div>
	);
};

Search.prototype = {
	setSearchTerm: PropTypes.func.isRequired,
};

export default Search;
