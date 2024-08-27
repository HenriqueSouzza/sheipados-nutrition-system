import { defineConfig, loadEnv, PreviewOptions, ServerOptions, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pages from 'vite-plugin-pages';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode = '' }: UserConfig) => {
	const {
		VITE_PORT,
		VITE_HTTPS,
		VITE_HOST
	} = loadEnv(mode, process.cwd());

	const server: ServerOptions = {}
	const preview: PreviewOptions = {}

	if (VITE_HTTPS === 'true') {
		const https = {
			key: fs.readFileSync('.cert/key.pem'),
			cert: fs.readFileSync('.cert/cert.pem'),
		}

		server.https = https
		preview.https = https
	}

	return {
		plugins: [
			react(),
			pages({
				extendRoute(route) {
					if (route.path === 'error404') {
						route.path = '*'
					}
				},
			})
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src')
			},
		},
		server: {
			port: Number(VITE_PORT),
			host: VITE_HOST,
			...server
		},
		preview: {
			port: 443,
			...preview
		},
	}
});
