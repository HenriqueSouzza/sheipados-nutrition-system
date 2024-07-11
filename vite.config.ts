import { defineConfig, loadEnv, PreviewOptions, ServerOptions, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode = '' }: UserConfig) => {
	const {
		VITE_PORT,
		VITE_HTTPS,
		VITE_HOST
	} = loadEnv(mode, process.cwd());

	const server: ServerOptions = {}
	const preview: PreviewOptions = {
		https: {
			key: fs.readFileSync('.cert/key.pem'),
			cert: fs.readFileSync('.cert/cert.pem'),
		}
	}

	if (VITE_HTTPS === 'true') {
		server.https = preview.https
	}

	return {
		plugins: [
			react(),
		],
		server: {
			port: Number(VITE_PORT),
			host: VITE_HOST,
			...server
		},
		preview: {
			port: 443,
			https: {
				key: fs.readFileSync('.cert/key.pem'),
				cert: fs.readFileSync('.cert/cert.pem'),
			},
		},
	}
});
