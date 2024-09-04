import { Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@/themes';
import { AuthProvider, ModalProvider } from '@/providers';
import { Routes } from '@/routes';

const App = () => (
	<Suspense fallback={<p>Loading...</p>}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AuthProvider>
				<ModalProvider>
					<Routes />
				</ModalProvider>
			</AuthProvider>
		</ThemeProvider>
	</Suspense>
);

export default App;
