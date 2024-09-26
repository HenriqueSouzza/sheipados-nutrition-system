import { Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@/themes';
import { AuthProvider, ModalProvider, NotificationProvider, UserProvider } from '@/providers';
import { Routes } from '@/routes';

const App = () => (
	<Suspense fallback={<p>Loading...</p>}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NotificationProvider>
				<AuthProvider>
					<UserProvider>
						<ModalProvider>
							<Routes />
						</ModalProvider>
					</UserProvider>
				</AuthProvider>
			</NotificationProvider>
		</ThemeProvider>
	</Suspense >
);

export default App;
