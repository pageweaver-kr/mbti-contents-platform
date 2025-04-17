import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';

async function generateSitemap() {
	const hostname = 'https://mbti.jadepost.net';
	const routes = [
		'/',
		'/blog/personalColor',
		'/personalColor',
		'/personalColorEng',
	];

	const sitemapStream = new SitemapStream({ hostname });

	for (const route of routes) {
		sitemapStream.write({
			url: route,
			changefreq: 'weekly',
			priority: 0.8,
		});
	}
	sitemapStream.end();

	const sitemap = await streamToPromise(sitemapStream);
	const __dirname = path.dirname(new URL(import.meta.url).pathname);
	const outputPath = path.join(__dirname, 'dist', 'sitemap.xml');
	fs.writeFileSync(outputPath, sitemap.toString());
	console.log('sitemap.xml generated!');
}

generateSitemap();
