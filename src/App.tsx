import { Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@/themes';
import { AuthProvider } from '@/providers';
import { Routes } from '@/routes';

const App = () => (
	<Suspense fallback={<p>Loading...</p>}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</ThemeProvider>
	</Suspense>
);

export default App;
