// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';

import min from 'astro-min';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), min()],
  output: 'server',
  adapter: cloudflare()
});