import vituum from "vituum";
import nunjucks from "@vituum/vite-plugin-nunjucks";
import postcss from "@vituum/vite-plugin-postcss";

import sass from "sass";

export default {
  plugins: [
    vituum(),
    nunjucks(),
    postcss(),
    {
      // Обработка SCSS файлов
      async transform(_, id) {
        if (id.endsWith(".scss")) {
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
