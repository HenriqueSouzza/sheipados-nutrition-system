import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@/themes';
import { AuthProvider } from '@/providers';

const App = () => (
	<Suspense fallback={<p>Loading...</p>}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AuthProvider>
				{useRoutes(routes)}
			</AuthProvider>
		</ThemeProvider>
	</Suspense>
);

export default App;
