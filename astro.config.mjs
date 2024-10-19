import { defineConfig } from 'astro/config';
import remarkHtml from 'remark-html';
import { addZoomableClass, convertVideoLinks } from './remark-plugins';

export default defineConfig({
  markdown: {
    remarkPlugins: [addZoomableClass, convertVideoLinks, remarkHtml],
  },
});