import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';

const App = () => {
	return (
		<>
			<CssBaseline />
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default App;
