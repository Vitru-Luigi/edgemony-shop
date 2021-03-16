import React from 'react';
import {Link} from 'react-router-dom';

import {NotFound404, NotFoundBody, NotFoundHeader, NotFoundMsg, Button} from '../styles';

function Page404() {
	let currentPath = window.location.pathname;

	return (
		<NotFound404>
			<NotFoundBody>
				<NotFoundHeader>404</NotFoundHeader>
				<NotFoundMsg>
					<p>
						OOPS! <br /> the requested URL {currentPath} <br /> was not found.
					</p>
					<Link to='/'>
						<Button type='button'>Go to Home</Button>{' '}
					</Link>
				</NotFoundMsg>
				<NotFoundMsg>credits : this is page is created by</NotFoundMsg>
			</NotFoundBody>
		</NotFound404>
	);
}

export default Page404;
