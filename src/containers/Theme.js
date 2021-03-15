import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {Button} from '../styles';

const Theme = ({children}) => {
	const [theme, setTheme] = useState('light');

	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	return (
		<ThemeProvider theme={{mode: theme}}>
			<Button style={{marginTop: '5rem'}} onClick={themeToggler}>
				{theme}
			</Button>
			{children}
		</ThemeProvider>
	);
};

export default Theme;
