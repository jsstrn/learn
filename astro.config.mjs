// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Learn with Jesstern',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/learn-with-jesstern' }],
			sidebar: [
				{
					label: 'Guides',	
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
