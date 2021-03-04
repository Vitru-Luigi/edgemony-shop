import data from './utils/data';

import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss';

const App = () => (
	<>
		<Header logo={data.logo} />
		<Main data={data} />
		<Footer title={data.title} />
	</>
);

export default App;
