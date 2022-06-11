import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import tsconfigPaths from 'vite-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(),
	tsconfigPaths(),
	vitePluginImp({
		libList: [
			{
				libName: "antd",
				style: (name) => `antd/lib/${name}/style/index.less`,
			},
		],
	})],
	css: {
		preprocessorOptions: {
			less: {
				// 支持内联 JavaScript
				javascriptEnabled: true,
			}
		}
	},
	server: {
		proxy: {
			"/file": {
				target: "https://dev-tsp-1255645766.cos.ap-guangzhou.myqcloud.com",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/file/, ""),
			},
		},
	}
})