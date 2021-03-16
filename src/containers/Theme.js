import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {DarkModeButton} from '../styles';

const Theme = ({children}) => {
	const [theme, setTheme] = useState('light');

	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	return (
		<ThemeProvider theme={{mode: theme}}>
			<DarkModeButton style={{marginTop: '5rem'}} onClick={themeToggler}>
				{theme}
			</DarkModeButton>
			{children}
		</ThemeProvider>
	);
};

export default Theme;
