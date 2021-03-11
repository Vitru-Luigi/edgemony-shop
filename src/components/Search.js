import React from 'react';
import PropTypes from 'prop-types';
import {SearchContainer, SearchInput, SearchIcon} from '../styles';

const Search = ({setSearchTerm}) => {
	return (
		<SearchContainer>
			<SearchInput type='text' onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search...' />
			<SearchIcon className='fa fa-search'></SearchIcon>
		</SearchContainer>
	);
};

Search.prototype = {
	setSearchTerm: PropTypes.func.isRequired,
};

export default Search;
