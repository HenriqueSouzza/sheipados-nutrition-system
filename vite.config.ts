import { defineConfig, loadEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode = '' }: UserConfig) => {
	const env = loadEnv(mode, process.cwd());

	return {
		plugins: [react()],
		server: {
			port: Number(env.VITE_PORT),
		},
	}
});
