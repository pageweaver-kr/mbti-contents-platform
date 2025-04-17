// CI/CD
// Continuous Integration / Continuous Deployment
// Github Actions
// -> Github에서 우리에게 원격 컴퓨터(배포용) -> 명령
// .github/workflows/main.yml

// 1. 코드 작성/수정
// 2. Github Repo 코드 커밋/푸시
// 3. 프로젝트 빌드 -> 빌드파일
// 4. S3에 빌드파일 업로드
// 5. CloudFront Invalidation

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { prerender } from 'react-dom/static';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		prerender({
			routes: [
				'/',
				'/personalColor',
				'/blog/personalColor',
				'/personalColorEng',
				'/personalColorEng/result/ESTJ',
			],
			renderer: PuppeteerRenderer,
			server: {
				port: 3000,
				host: 'localhost',
			},
			rendererOptions: {
				maxConcurrentRoutes: 1,
				renderAfterTime: 500,
			},
			postProcess(renderedRoute) {
				(renderedRoute.html = renderedRoute.html
					.replace(/http:/i, 'https')
					.replace(/(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i)),
					'https://mbti.jadepost.net';
			},
		}),
	],
});
