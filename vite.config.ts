import { defineConfig, loadEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode = '' }: UserConfig) => {
	const {
		VITE_PORT,
	} = loadEnv(mode, process.cwd());

	return {
		plugins: [
			react(),
		],
		server: {
			port: Number(VITE_PORT),
			https: {
				key: fs.readFileSync('.cert/key.pem'),
				cert: fs.readFileSync('.cert/cert.pem'),
			},
		},
	}
});
