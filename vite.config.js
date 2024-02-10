import vituum from "vituum";
import nunjucks from "@vituum/vite-plugin-nunjucks";
import postcss from "@vituum/vite-plugin-postcss";

export default {
  plugins: [vituum(), nunjucks(), postcss()],
};
