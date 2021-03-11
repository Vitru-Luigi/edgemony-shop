import React from 'react';

const Title = ({children, ...props}) => (
	<div className='title' {...props}>
		{children}
	</div>
);

export default Title;
