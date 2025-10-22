import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
//import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: ['@babel/plugin-transform-named-capturing-groups-regex']
			}
		}),
		tailwindcss()
		// visualizer({
		//   open: true, // Automatically opens report in browser
		//   filename: "stats.html", // Output file
		//   gzipSize: true,
		//   brotliSize: true,
		// }),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	build: {
		minify: 'esbuild',
		rollupOptions: {
			external: [],
			treeshake: true
		}
	},
	define: {
		'process.env.NODE_ENV': '"production"'
	}
	// vite.config.ts
});
