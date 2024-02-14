import vituum from 'vituum';
import nunjucks from '@vituum/vite-plugin-nunjucks';
import postcss from '@vituum/vite-plugin-postcss';
import posthtml from '@vituum/vite-plugin-posthtml';
import posthtmlNunjucks from 'posthtml-nunjucks';
import cssnano from 'cssnano';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import * as sass from 'sass';

export default {
  base: '/starter-vite-ts-nunj/', // TODO: for git pages
  plugins: [
    vituum(),
    nunjucks(),
    postcss({
      plugins: [
        cssnano(), // Для минимизации CSS
      ],
    }),
    posthtml({
      plugins: [
        posthtmlNunjucks(), // Обработка .njk файлов
      ],
    }),
    ViteImageOptimizer(),
    {
      // Обработка SCSS файлов
      async transform(_, id) {
        if (id.endsWith('.scss')) {
          const result = sass.compile(id);
          return {
            code: result.css.toString(),
            map: null,
          };
        }
      },
    },
  ],
};
