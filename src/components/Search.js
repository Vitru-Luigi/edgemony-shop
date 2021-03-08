import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';

const Search = ({setSearchTerm}) => {
	return (
		<div className='Search'>
			<input type='text' onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search...' />
			<i class='fa fa-search'></i>
		</div>
	);
};

Search.prototype = {
	setSearchTerm: PropTypes.func.isRequired,
};

export default Search;
