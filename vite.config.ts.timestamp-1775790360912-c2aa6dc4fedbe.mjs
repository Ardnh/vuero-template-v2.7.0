// vite.config.ts
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/__virtual__/vite-virtual-021083512e/0/cache/vite-npm-4.3.5-f8c81562b1-6b7f2189f0.zip/node_modules/vite/dist/node/index.js";
import Vue from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/__virtual__/@vitejs-plugin-vue-virtual-339760f815/0/cache/@vitejs-plugin-vue-npm-4.2.1-2b331ccfdc-a7266a4537.zip/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueRouter from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/__virtual__/unplugin-vue-router-virtual-b4d841e8fc/0/cache/unplugin-vue-router-npm-0.6.3-59826542fb-5067254bfd.zip/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/__virtual__/unplugin-vue-router-virtual-b4d841e8fc/0/cache/unplugin-vue-router-npm-0.6.3-59826542fb-5067254bfd.zip/node_modules/unplugin-vue-router/dist/index.mjs";
import Components from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/__virtual__/unplugin-vue-components-virtual-ec99d45765/0/cache/unplugin-vue-components-npm-0.24.1-db22f49865-9efe6c9cda.zip/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/__virtual__/unplugin-auto-import-virtual-8c638c9c32/0/cache/unplugin-auto-import-npm-0.15.3-08df6cbcd3-0fb0be99ee.zip/node_modules/unplugin-auto-import/dist/vite.js";
import Unfonts from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/__virtual__/unplugin-fonts-virtual-79cdc278a5/0/cache/unplugin-fonts-npm-1.0.3-6a0e140e2a-0128603ec3.zip/node_modules/unplugin-fonts/dist/vite.mjs";
import { VitePluginRadar } from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/__virtual__/vite-plugin-radar-virtual-35eaa913e9/0/cache/vite-plugin-radar-npm-0.7.0-db8b0b7d99-34f95da73c.zip/node_modules/vite-plugin-radar/dist/index.js";
import PurgeIcons from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/__virtual__/vite-plugin-purge-icons-virtual-694541600a/0/cache/vite-plugin-purge-icons-npm-0.9.2-a8bb2a5610-e2dca40dc0.zip/node_modules/vite-plugin-purge-icons/dist/index.mjs";
import ImageMin from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/__virtual__/vite-plugin-imagemin-virtual-0d06787df6/0/cache/vite-plugin-imagemin-npm-0.6.1-f240842e35-fe025bc8a1.zip/node_modules/vite-plugin-imagemin/dist/index.mjs";
import VueI18nPlugin from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/__virtual__/@intlify-unplugin-vue-i18n-virtual-3658c6414e/0/cache/@intlify-unplugin-vue-i18n-npm-0.10.0-ec4ccd43e4-50a15c32b7.zip/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { VitePWA } from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/__virtual__/vite-plugin-pwa-virtual-c20f4ca089/0/cache/vite-plugin-pwa-npm-0.14.7-0b0b4a53e4-e035894065.zip/node_modules/vite-plugin-pwa/dist/index.mjs";
import purgecss from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/cache/rollup-plugin-purgecss-npm-5.0.0-a97e9fed6d-305e7aaff5.zip/node_modules/rollup-plugin-purgecss/lib/rollup-plugin-purgecss.js";

// vite-plugin-vuero-doc/index.ts
import { join, basename } from "pathe";
import { compileTemplate, parse } from "@vue/compiler-sfc";

// vite-plugin-vuero-doc/markdown.ts
import yaml from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/cache/js-yaml-npm-4.1.0-3606f32312-c7830dfd45.zip/node_modules/js-yaml/dist/js-yaml.mjs";
import remarkShiki from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/__virtual__/@stefanprobst-remark-shiki-virtual-d650ec4c78/0/cache/@stefanprobst-remark-shiki-npm-2.2.1-ccb00ed754-4ebd7e4500.zip/node_modules/@stefanprobst/remark-shiki/src/index.js";
import rehypeExternalLinks from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/cache/rehype-external-links-npm-2.1.0-c75bb97351-3c2bb50f02.zip/node_modules/rehype-external-links/index.js";
import rehypeRaw from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/cache/rehype-raw-npm-6.1.1-d8b5afcf82-a1f9d309e6.zip/node_modules/rehype-raw/index.js";
import rehypeSlug from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/cache/rehype-slug-npm-5.1.0-ae08840ba8-2a7c17fd74.zip/node_modules/rehype-slug/index.js";
import rehypeAutolinkHeadings from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/cache/rehype-autolink-headings-npm-6.1.1-fe8058cc11-60782fb2e5.zip/node_modules/rehype-autolink-headings/index.js";
import rehypeStringify from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/cache/rehype-stringify-npm-9.0.3-8c345afd72-ff4b1f3f88.zip/node_modules/rehype-stringify/index.js";
import remarkParse from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/cache/remark-parse-npm-10.0.1-e654d7df78-505088e564.zip/node_modules/remark-parse/index.js";
import remarkGfm from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/cache/remark-gfm-npm-3.0.1-4a9f6f751e-02254f74d6.zip/node_modules/remark-gfm/index.js";
import remarkRehype from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/cache/remark-rehype-npm-10.1.0-bd8e6f7d8b-b9ac8acff3.zip/node_modules/remark-rehype/index.js";
import remarkFrontmatter from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/cache/remark-frontmatter-npm-4.0.1-05fc38c624-c1c448923c.zip/node_modules/remark-frontmatter/index.js";
import { getHighlighter } from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/cache/shiki-npm-0.14.2-c7824692d5-f2a14302b1.zip/node_modules/shiki/dist/index.js";
import { unified } from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/cache/unified-npm-10.1.2-731093c9be-053e7c65ed.zip/node_modules/unified/index.js";
var langs = ["vue", "vue-html", "typescript", "bash", "scss"];
async function createProcessor(theme) {
  const highlighter = await getHighlighter({
    theme,
    langs
  });
  return unified().use(remarkParse).use(remarkFrontmatter).use(() => (tree, file) => {
    if (tree.children[0].type === "yaml") {
      file.data.frontmatter = yaml.load(tree.children[0].value);
    }
  }).use(remarkGfm).use(remarkShiki, { highlighter }).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw).use(rehypeExternalLinks, { rel: ["nofollow"], target: "_blank" }).use(rehypeSlug).use(rehypeAutolinkHeadings, {
    behavior: "append",
    content: {
      type: "element",
      tagName: "i",
      properties: {
        className: ["iconify toc-link-anchor"],
        dataIcon: "feather:link"
      },
      children: []
    }
  }).use(rehypeStringify);
}
async function createProcessors(theme) {
  return {
    light: await createProcessor(typeof theme === "string" ? theme : theme.light),
    dark: await createProcessor(typeof theme === "string" ? theme : theme.dark)
  };
}

// vite-plugin-vuero-doc/transform.ts
import { kebabCase } from "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/.yarn/cache/scule-npm-1.0.0-8594be5875-57f745022e.zip/node_modules/scule/dist/index.mjs";
var SELF_CLOSING_TAG_REGEX = /<([^\s></]+)([^>]+)\/>/g;
var OPEN_TAG_REGEX = /<([^\s></]+)/g;
var CLOSE_TAG_REGEX = /<\/([^\s></]+)/g;
function transformExampleMarkup(raw) {
  let output = raw;
  let content = null;
  if (content = raw.match(/<!--example-->([\s\S]*?)<!--\/example-->/)) {
    const kebabContent = content[1].replaceAll(SELF_CLOSING_TAG_REGEX, (substring, tag) => {
      return substring.replace("/>", `></${tag.trim()}>`);
    }).replaceAll(OPEN_TAG_REGEX, (substring) => {
      return `<${kebabCase(substring.substring(1).trim())}`;
    }).replaceAll(CLOSE_TAG_REGEX, (substring) => {
      return `</${kebabCase(substring.substring(2).trim())}`;
    }).replaceAll("&#x27;", "'");
    output = output.replace(content[1], kebabContent);
  }
  return output;
}
function transformSlots(source, condition = "") {
  if (source.includes("<!--code-->") && source.includes("<!--example-->")) {
    return `<template ${condition} #default>${source}`.replace(
      `<!--code-->`,
      `</template><template ${condition} #code>
<slot name="code"><div v-pre>`
    ).replace(`<!--/code-->`, `</div></slot>
</template>`).replace(
      `<!--example-->`,
      `<template ${condition} #example>
<slot name="example">`
    ).replace(`<!--/example-->`, `</slot>
</template>`);
  }
  if (source.includes("<!--code-->")) {
    return `<template ${condition} #default>${source}`.replace(
      `<!--code-->`,
      `</template><template ${condition} #code>
<slot name="code"><div v-pre>`
    ).replace(
      `<!--/code-->`,
      `</div></slot>
</template>
<template ${condition} #example><slot name="example"></slot></template>`
    );
  }
  if (source.includes("<!--example-->")) {
    return `<template ${condition} #default>${source}`.replace(
      `<!--example-->`,
      `</template><template ${condition} #example>
<slot name="example">`
    ).replace(
      `<!--/example-->`,
      `</slot>
</template>
<template ${condition} #code><slot name="code"></slot></template>`
    );
  }
  return `<template ${condition} #default>${source}</template><template ${condition} #example><slot name="example"></slot></template><template ${condition} #code><slot name="code"></slot></template>`;
}

// vite-plugin-vuero-doc/index.ts
function parseId(id) {
  const index = id.indexOf("?");
  if (index < 0)
    return id;
  else
    return id.slice(0, index);
}
function VitePluginVueroDoc(options) {
  let config;
  let processors;
  const cwd = process.cwd();
  const pathPrefix = options.pathPrefix ? join(cwd, options.pathPrefix) : cwd;
  async function markdownToVue(id, raw) {
    var _a, _b;
    const path = parseId(id);
    const input = transformExampleMarkup(raw);
    if (!processors)
      processors = await createProcessors(options.shiki.theme);
    const [vFileLight, vFileDark] = await Promise.all([
      processors.light.process(input),
      processors.dark.process(input)
    ]);
    const contentLight = vFileLight.toString();
    const contentDark = vFileDark.toString();
    const frontmatter = ((_a = vFileLight.data) == null ? void 0 : _a.frontmatter) ?? {};
    const slotLight = transformSlots(contentLight, 'v-if="!darkmode.isDark"');
    const slotDark = transformSlots(contentDark, 'v-if="darkmode.isDark"');
    const sfc = [
      `<template>`,
      `  <${options.wrapperComponent} :frontmatter="frontmatter" :source-meta="sourceMeta">`,
      `    ${slotLight}`,
      `    ${slotDark}`,
      `  </${options.wrapperComponent}>`,
      `</template>`
    ].join("\n");
    const result = parse(sfc, {
      filename: path,
      sourceMap: true
    });
    if (result.errors.length || result.descriptor.template === null) {
      console.error(result.errors);
      throw new Error(`Markdown: unable to parse virtual file generated for "${id}"`);
    }
    const { code, errors } = compileTemplate({
      filename: path,
      id: path,
      source: result.descriptor.template.content,
      preprocessLang: result.descriptor.template.lang,
      transformAssetUrls: false
    });
    if (errors.length) {
      console.error(errors);
      throw new Error(`Markdown: unable to compile virtual file "${id}"`);
    }
    let sourceMeta = "undefined";
    if ((_b = options.sourceMeta) == null ? void 0 : _b.enabled) {
      sourceMeta = JSON.stringify({
        relativePath: path.substring(cwd.length),
        basename: basename(path),
        path: (config == null ? void 0 : config.isProduction) ? "" : path,
        editProtocol: (config == null ? void 0 : config.isProduction) ? "" : options.sourceMeta.editProtocol
      });
    }
    const output = [
      `import { reactive } from 'vue'`,
      `import { useDarkmode } from '/@src/stores/darkmode'`,
      code.replace("export function render", "function render"),
      `const __frontmatter = ${JSON.stringify(frontmatter)};`,
      `const setup = () => ({`,
      `  frontmatter: reactive(__frontmatter),`,
      `  darkmode: useDarkmode(),`,
      `  sourceMeta: ${sourceMeta},`,
      `});`,
      `const __script = { render, setup };`,
      (config == null ? void 0 : config.isProduction) ? "" : `__script.__hmrId = ${JSON.stringify(path)};`,
      `export default __script;`
    ].join("\n");
    return output;
  }
  return {
    name: "vite-plugin-vuero-doc",
    enforce: "pre",
    configResolved(_config) {
      config = _config;
    },
    async transform(raw, id) {
      if (id.endsWith(".md") && id.startsWith(pathPrefix)) {
        return await markdownToVue(id, raw);
      }
    }
  };
}

// vite.config.ts
var __vite_injected_original_import_meta_url = "file:///Users/muhammadardanhilal/Documents/work/web/template/themeforest-xvhbzShK-vuero-vuejs-3-admin-and-webapp-ui-kit/template-vuero-v2.7.0/vite.config.ts";
var MINIFY_IMAGES = process.env.MINIFY ? process.env.MINIFY === "true" : false;
var vite_config_default = defineConfig({
  // Project root directory (where index.html is located).
  root: process.cwd(),
  // Base public path when served in development or production.
  // You also need to add this base like `history: createWebHistory('my-subdirectory')`
  // in ./src/router.ts
  // base: '/my-subdirectory/',
  base: "/",
  // Directory to serve as plain static assets.
  publicDir: "public",
  // Adjust console output verbosity.
  logLevel: "info",
  // development server configuration
  server: {
    // Vite 4 defaults to 5173, but you can override it with the port option.
    port: 3e3
  },
  /**
   * By default, Vite will crawl your index.html to detect dependencies that
   * need to be pre-bundled. If build.rollupOptions.input is specified,
   * Vite will crawl those entry points instead.
   *
   * @see https://vitejs.dev/config/#optimizedeps-entries
   */
  optimizeDeps: {
    include: [
      "@ckeditor/ckeditor5-vue",
      "@ckeditor/ckeditor5-build-classic",
      "@iconify/iconify",
      "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js",
      "@vee-validate/zod",
      "@vueuse/core",
      "@vueuse/head",
      "@vueform/multiselect",
      "@vueform/slider",
      "axios",
      "billboard.js",
      "dayjs",
      "dropzone",
      "dragula",
      "defu",
      "filepond",
      "filepond-plugin-file-validate-size",
      "filepond-plugin-file-validate-type",
      "filepond-plugin-image-exif-orientation",
      "filepond-plugin-image-crop",
      "filepond-plugin-image-edit",
      "filepond-plugin-image-preview",
      "filepond-plugin-image-resize",
      "filepond-plugin-image-transform",
      "imask",
      "nprogress",
      "notyf",
      "mapbox-gl",
      "photoswipe/lightbox",
      "photoswipe",
      "plyr",
      "v-calendar",
      "vee-validate",
      "vue",
      "vue-scrollto",
      "vue3-apexcharts",
      "vue-tippy",
      "vue-i18n",
      "vue-router",
      "unplugin-vue-router/runtime",
      "simplebar",
      "simple-datatables",
      "tiny-slider/src/tiny-slider",
      "vue-accessible-color-picker",
      "zod",
      "@stefanprobst/remark-shiki",
      "rehype-external-links",
      "rehype-raw",
      "rehype-sanitize",
      "rehype-stringify",
      "rehype-slug",
      "rehype-autolink-headings",
      "remark-gfm",
      "remark-parse",
      "remark-rehype",
      "shiki",
      "unified",
      "workbox-window",
      "textarea-markdown-editor/dist/esm/bootstrap"
    ]
    // disabled: false,
  },
  // Will be passed to @rollup/plugin-alias as its entries option.
  resolve: {
    alias: [
      {
        find: "/@src/",
        replacement: `/src/`
      }
    ]
  },
  build: {
    minify: "terser",
    // Do not warn about large chunks
    // chunkSizeWarningLimit: Infinity,
    // Double the default size threshold for inlined assets
    // https://vitejs.dev/config/build-options.html#build-assetsinlinelimit
    assetsInlineLimit: 4096 * 2
    // commonjsOptions: { include: [] },
  },
  plugins: [
    /**
     * plugin-vue plugin inject vue library and allow sfc files to work (*.vue)
     *
     * @see https://github.com/vitejs/vite/tree/main/packages/plugin-vue
     */
    Vue({
      include: [/\.vue$/]
    }),
    /**
     * unplugin-vue-i18n plugin does i18n resources pre-compilation / optimizations
     *
     * @see https://github.com/intlify/bundle-tools/blob/main/packages/unplugin-vue-i18n/README.md
     */
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "./src/locales/**"),
      fullInstall: false,
      compositionOnly: true
    }),
    /**
     * unplugin-vue-router plugin generate routes based on file system
     * allow to use typed routes and usage of defineLoader
     *
     * @see https://github.com/posva/unplugin-vue-router
     * @see https://github.com/vuejs/rfcs/blob/ad69da2aee9242ef88f036713db68f3ef274bb1b/active-rfcs/0000-router-use-loader.md
     */
    VueRouter({
      routesFolder: "src/pages",
      /**
       * Data Fetching is an experimental feature from vue & vue-router
       *
       * @see https://github.com/vuejs/rfcs/discussions/460
       * @see https://github.com/posva/unplugin-vue-router/tree/main/src/data-fetching
       */
      dataFetching: true
    }),
    /**
     * unplugin-auto-import allow to automaticaly import modules/components
     *
     * @see https://github.com/antfu/unplugin-auto-import
     */
    AutoImport({
      dts: true,
      imports: ["vue", "@vueuse/core", VueRouterAutoImports]
    }),
    /**
     * This is an internal vite plugin that load markdown files as vue components.
     *
     * @see /documentation
     * @see /vite-plugin-vuero-doc
     * @see /src/components/partials/documentation/DocumentationItem.vue
     * @see /src/composable/useMarkdownToc.ts
     */
    VitePluginVueroDoc({
      pathPrefix: "documentation",
      wrapperComponent: "DocumentationItem",
      shiki: {
        theme: {
          light: "min-light",
          dark: "github-dark"
        }
      },
      sourceMeta: {
        enabled: true,
        editProtocol: "vscode://vscode-remote/wsl+Ubuntu"
        // or 'vscode://file'
      }
    }),
    /**
     * unplugin-vue-components plugin is responsible of autoloading components
     * documentation and md file are loaded for elements and components sections
     *
     * @see https://github.com/antfu/unplugin-vue-components
     */
    Components({
      dirs: ["documentation", "src/components", "src/layouts"],
      extensions: ["vue", "md"],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    /**
     * vite-plugin-purge-icons plugin is responsible of autoloading icones from multiples providers
     *
     * @see https://icones.netlify.app/
     * @see https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
     */
    PurgeIcons(),
    /**
     * vite-plugin-fonts plugin inject webfonts from differents providers
     *
     * @see https://github.com/stafyniaksacha/vite-plugin-fonts
     */
    Unfonts({
      google: {
        families: [
          {
            name: "Fira Code",
            styles: "wght@400;600"
          },
          {
            name: "Montserrat",
            styles: "wght@500;600;700;800;900"
          },
          {
            name: "Roboto",
            styles: "wght@300;400;500;600;700"
          }
        ]
      }
    }),
    /**
     * vite-plugin-radar plugin inject snippets from analytics providers
     *
     * @see https://github.com/stafyniaksacha/vite-plugin-radar
     */
    !process.env.GTM_ID ? void 0 : VitePluginRadar({
      gtm: {
        id: process.env.GTM_ID
      }
    }),
    /**
     * vite-plugin-pwa generate manifest.json and register services worker to enable PWA
     *
     * @see https://github.com/antfu/vite-plugin-pwa
     */
    VitePWA({
      base: "/",
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Vuero - A complete Vue 3 design system",
        short_name: "Vuero",
        start_url: "/?utm_source=pwa",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    /**
     * rollup-plugin-purgecss plugin is responsible of purging css rules
     * that are not used in the bundle
     *
     * @see https://github.com/FullHuman/purgecss/tree/main/packages/rollup-plugin-purgecss
     */
    purgecss({
      output: false,
      content: [`./src/**/*.vue`],
      variables: false,
      safelist: {
        standard: [
          /(autv|lnil|lnir|fas?)/,
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/
        ]
      },
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, "");
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
      }
    }),
    /**
     * vite-plugin-imagemin optimize all images sizes from public or asset folder
     *
     * @see https://github.com/anncwb/vite-plugin-imagemin
     */
    !MINIFY_IMAGES ? void 0 : ImageMin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 60
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS1wbHVnaW4tdnVlcm8tZG9jL2luZGV4LnRzIiwgInZpdGUtcGx1Z2luLXZ1ZXJvLWRvYy9tYXJrZG93bi50cyIsICJ2aXRlLXBsdWdpbi12dWVyby1kb2MvdHJhbnNmb3JtLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL211aGFtbWFkYXJkYW5oaWxhbC9Eb2N1bWVudHMvd29yay93ZWIvdGVtcGxhdGUvdGhlbWVmb3Jlc3QteHZoYnpTaEstdnVlcm8tdnVlanMtMy1hZG1pbi1hbmQtd2ViYXBwLXVpLWtpdC90ZW1wbGF0ZS12dWVyby12Mi43LjBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tdWhhbW1hZGFyZGFuaGlsYWwvRG9jdW1lbnRzL3dvcmsvd2ViL3RlbXBsYXRlL3RoZW1lZm9yZXN0LXh2aGJ6U2hLLXZ1ZXJvLXZ1ZWpzLTMtYWRtaW4tYW5kLXdlYmFwcC11aS1raXQvdGVtcGxhdGUtdnVlcm8tdjIuNy4wL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tdWhhbW1hZGFyZGFuaGlsYWwvRG9jdW1lbnRzL3dvcmsvd2ViL3RlbXBsYXRlL3RoZW1lZm9yZXN0LXh2aGJ6U2hLLXZ1ZXJvLXZ1ZWpzLTMtYWRtaW4tYW5kLXdlYmFwcC11aS1raXQvdGVtcGxhdGUtdnVlcm8tdjIuNy4wL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSwgZGlybmFtZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xuaW1wb3J0IHsgVnVlUm91dGVyQXV0b0ltcG9ydHMgfSBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgVW5mb250cyBmcm9tICd1bnBsdWdpbi1mb250cy92aXRlJ1xuaW1wb3J0IHsgVml0ZVBsdWdpblJhZGFyIH0gZnJvbSAndml0ZS1wbHVnaW4tcmFkYXInXG5pbXBvcnQgUHVyZ2VJY29ucyBmcm9tICd2aXRlLXBsdWdpbi1wdXJnZS1pY29ucydcbmltcG9ydCBJbWFnZU1pbiBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZW1pbidcbmltcG9ydCBWdWVJMThuUGx1Z2luIGZyb20gJ0BpbnRsaWZ5L3VucGx1Z2luLXZ1ZS1pMThuL3ZpdGUnXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xuaW1wb3J0IHB1cmdlY3NzIGZyb20gJ3JvbGx1cC1wbHVnaW4tcHVyZ2Vjc3MnXG5cbi8vIGxvY2FsIHZpdGUgcGx1Z2luXG5pbXBvcnQgeyBWaXRlUGx1Z2luVnVlcm9Eb2MgfSBmcm9tICcuL3ZpdGUtcGx1Z2luLXZ1ZXJvLWRvYydcblxuLy8gb3B0aW9ucyB2aWEgZW52IHZhcmlhYmxlc1xuY29uc3QgTUlOSUZZX0lNQUdFUyA9IHByb2Nlc3MuZW52Lk1JTklGWSA/IHByb2Nlc3MuZW52Lk1JTklGWSA9PT0gJ3RydWUnIDogZmFsc2VcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBtYWluIGNvbmZpZ3VyYXRpb24gZmlsZSBmb3Igdml0ZWpzXG4gKlxuICogQHNlZSBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIC8vIFByb2plY3Qgcm9vdCBkaXJlY3RvcnkgKHdoZXJlIGluZGV4Lmh0bWwgaXMgbG9jYXRlZCkuXG4gIHJvb3Q6IHByb2Nlc3MuY3dkKCksXG4gIC8vIEJhc2UgcHVibGljIHBhdGggd2hlbiBzZXJ2ZWQgaW4gZGV2ZWxvcG1lbnQgb3IgcHJvZHVjdGlvbi5cbiAgLy8gWW91IGFsc28gbmVlZCB0byBhZGQgdGhpcyBiYXNlIGxpa2UgYGhpc3Rvcnk6IGNyZWF0ZVdlYkhpc3RvcnkoJ215LXN1YmRpcmVjdG9yeScpYFxuICAvLyBpbiAuL3NyYy9yb3V0ZXIudHNcbiAgLy8gYmFzZTogJy9teS1zdWJkaXJlY3RvcnkvJyxcbiAgYmFzZTogJy8nLFxuICAvLyBEaXJlY3RvcnkgdG8gc2VydmUgYXMgcGxhaW4gc3RhdGljIGFzc2V0cy5cbiAgcHVibGljRGlyOiAncHVibGljJyxcbiAgLy8gQWRqdXN0IGNvbnNvbGUgb3V0cHV0IHZlcmJvc2l0eS5cbiAgbG9nTGV2ZWw6ICdpbmZvJyxcbiAgLy8gZGV2ZWxvcG1lbnQgc2VydmVyIGNvbmZpZ3VyYXRpb25cbiAgc2VydmVyOiB7XG4gICAgLy8gVml0ZSA0IGRlZmF1bHRzIHRvIDUxNzMsIGJ1dCB5b3UgY2FuIG92ZXJyaWRlIGl0IHdpdGggdGhlIHBvcnQgb3B0aW9uLlxuICAgIHBvcnQ6IDMwMDAsXG4gIH0sXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0LCBWaXRlIHdpbGwgY3Jhd2wgeW91ciBpbmRleC5odG1sIHRvIGRldGVjdCBkZXBlbmRlbmNpZXMgdGhhdFxuICAgKiBuZWVkIHRvIGJlIHByZS1idW5kbGVkLiBJZiBidWlsZC5yb2xsdXBPcHRpb25zLmlucHV0IGlzIHNwZWNpZmllZCxcbiAgICogVml0ZSB3aWxsIGNyYXdsIHRob3NlIGVudHJ5IHBvaW50cyBpbnN0ZWFkLlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvI29wdGltaXplZGVwcy1lbnRyaWVzXG4gICAqL1xuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXG4gICAgICAnQGNrZWRpdG9yL2NrZWRpdG9yNS12dWUnLFxuICAgICAgJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYycsXG4gICAgICAnQGljb25pZnkvaWNvbmlmeScsXG4gICAgICAnQG1hcGJveC9tYXBib3gtZ2wtZ2VvY29kZXIvZGlzdC9tYXBib3gtZ2wtZ2VvY29kZXIubWluLmpzJyxcbiAgICAgICdAdmVlLXZhbGlkYXRlL3pvZCcsXG4gICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICdAdnVldXNlL2hlYWQnLFxuICAgICAgJ0B2dWVmb3JtL211bHRpc2VsZWN0JyxcbiAgICAgICdAdnVlZm9ybS9zbGlkZXInLFxuICAgICAgJ2F4aW9zJyxcbiAgICAgICdiaWxsYm9hcmQuanMnLFxuICAgICAgJ2RheWpzJyxcbiAgICAgICdkcm9wem9uZScsXG4gICAgICAnZHJhZ3VsYScsXG4gICAgICAnZGVmdScsXG4gICAgICAnZmlsZXBvbmQnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXNpemUnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXR5cGUnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1leGlmLW9yaWVudGF0aW9uJyxcbiAgICAgICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtY3JvcCcsXG4gICAgICAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLWVkaXQnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3JyxcbiAgICAgICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcmVzaXplJyxcbiAgICAgICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtdHJhbnNmb3JtJyxcbiAgICAgICdpbWFzaycsXG4gICAgICAnbnByb2dyZXNzJyxcbiAgICAgICdub3R5ZicsXG4gICAgICAnbWFwYm94LWdsJyxcbiAgICAgICdwaG90b3N3aXBlL2xpZ2h0Ym94JyxcbiAgICAgICdwaG90b3N3aXBlJyxcbiAgICAgICdwbHlyJyxcbiAgICAgICd2LWNhbGVuZGFyJyxcbiAgICAgICd2ZWUtdmFsaWRhdGUnLFxuICAgICAgJ3Z1ZScsXG4gICAgICAndnVlLXNjcm9sbHRvJyxcbiAgICAgICd2dWUzLWFwZXhjaGFydHMnLFxuICAgICAgJ3Z1ZS10aXBweScsXG4gICAgICAndnVlLWkxOG4nLFxuICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvcnVudGltZScsXG4gICAgICAnc2ltcGxlYmFyJyxcbiAgICAgICdzaW1wbGUtZGF0YXRhYmxlcycsXG4gICAgICAndGlueS1zbGlkZXIvc3JjL3Rpbnktc2xpZGVyJyxcbiAgICAgICd2dWUtYWNjZXNzaWJsZS1jb2xvci1waWNrZXInLFxuICAgICAgJ3pvZCcsXG4gICAgICAnQHN0ZWZhbnByb2JzdC9yZW1hcmstc2hpa2knLFxuICAgICAgJ3JlaHlwZS1leHRlcm5hbC1saW5rcycsXG4gICAgICAncmVoeXBlLXJhdycsXG4gICAgICAncmVoeXBlLXNhbml0aXplJyxcbiAgICAgICdyZWh5cGUtc3RyaW5naWZ5JyxcbiAgICAgICdyZWh5cGUtc2x1ZycsXG4gICAgICAncmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzJyxcbiAgICAgICdyZW1hcmstZ2ZtJyxcbiAgICAgICdyZW1hcmstcGFyc2UnLFxuICAgICAgJ3JlbWFyay1yZWh5cGUnLFxuICAgICAgJ3NoaWtpJyxcbiAgICAgICd1bmlmaWVkJyxcbiAgICAgICd3b3JrYm94LXdpbmRvdycsXG4gICAgICAndGV4dGFyZWEtbWFya2Rvd24tZWRpdG9yL2Rpc3QvZXNtL2Jvb3RzdHJhcCcsXG4gICAgXSxcbiAgICAvLyBkaXNhYmxlZDogZmFsc2UsXG4gIH0sXG4gIC8vIFdpbGwgYmUgcGFzc2VkIHRvIEByb2xsdXAvcGx1Z2luLWFsaWFzIGFzIGl0cyBlbnRyaWVzIG9wdGlvbi5cbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICcvQHNyYy8nLFxuICAgICAgICByZXBsYWNlbWVudDogYC9zcmMvYCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgIC8vIERvIG5vdCB3YXJuIGFib3V0IGxhcmdlIGNodW5rc1xuICAgIC8vIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogSW5maW5pdHksXG4gICAgLy8gRG91YmxlIHRoZSBkZWZhdWx0IHNpemUgdGhyZXNob2xkIGZvciBpbmxpbmVkIGFzc2V0c1xuICAgIC8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvYnVpbGQtb3B0aW9ucy5odG1sI2J1aWxkLWFzc2V0c2lubGluZWxpbWl0XG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDQwOTYgKiAyLFxuICAgIC8vIGNvbW1vbmpzT3B0aW9uczogeyBpbmNsdWRlOiBbXSB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgLyoqXG4gICAgICogcGx1Z2luLXZ1ZSBwbHVnaW4gaW5qZWN0IHZ1ZSBsaWJyYXJ5IGFuZCBhbGxvdyBzZmMgZmlsZXMgdG8gd29yayAoKi52dWUpXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZS90cmVlL21haW4vcGFja2FnZXMvcGx1Z2luLXZ1ZVxuICAgICAqL1xuICAgIFZ1ZSh7XG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvXSxcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIHVucGx1Z2luLXZ1ZS1pMThuIHBsdWdpbiBkb2VzIGkxOG4gcmVzb3VyY2VzIHByZS1jb21waWxhdGlvbiAvIG9wdGltaXphdGlvbnNcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL2Jsb2IvbWFpbi9wYWNrYWdlcy91bnBsdWdpbi12dWUtaTE4bi9SRUFETUUubWRcbiAgICAgKi9cbiAgICBWdWVJMThuUGx1Z2luKHtcbiAgICAgIGluY2x1ZGU6IHJlc29sdmUoZGlybmFtZShmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpLCAnLi9zcmMvbG9jYWxlcy8qKicpLFxuICAgICAgZnVsbEluc3RhbGw6IGZhbHNlLFxuICAgICAgY29tcG9zaXRpb25Pbmx5OiB0cnVlLFxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogdW5wbHVnaW4tdnVlLXJvdXRlciBwbHVnaW4gZ2VuZXJhdGUgcm91dGVzIGJhc2VkIG9uIGZpbGUgc3lzdGVtXG4gICAgICogYWxsb3cgdG8gdXNlIHR5cGVkIHJvdXRlcyBhbmQgdXNhZ2Ugb2YgZGVmaW5lTG9hZGVyXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N2YS91bnBsdWdpbi12dWUtcm91dGVyXG4gICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvcmZjcy9ibG9iL2FkNjlkYTJhZWU5MjQyZWY4OGYwMzY3MTNkYjY4ZjNlZjI3NGJiMWIvYWN0aXZlLXJmY3MvMDAwMC1yb3V0ZXItdXNlLWxvYWRlci5tZFxuICAgICAqL1xuICAgIFZ1ZVJvdXRlcih7XG4gICAgICByb3V0ZXNGb2xkZXI6ICdzcmMvcGFnZXMnLFxuXG4gICAgICAvKipcbiAgICAgICAqIERhdGEgRmV0Y2hpbmcgaXMgYW4gZXhwZXJpbWVudGFsIGZlYXR1cmUgZnJvbSB2dWUgJiB2dWUtcm91dGVyXG4gICAgICAgKlxuICAgICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvcmZjcy9kaXNjdXNzaW9ucy80NjBcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3Bvc3ZhL3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdHJlZS9tYWluL3NyYy9kYXRhLWZldGNoaW5nXG4gICAgICAgKi9cbiAgICAgIGRhdGFGZXRjaGluZzogdHJ1ZSxcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIHVucGx1Z2luLWF1dG8taW1wb3J0IGFsbG93IHRvIGF1dG9tYXRpY2FseSBpbXBvcnQgbW9kdWxlcy9jb21wb25lbnRzXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1hdXRvLWltcG9ydFxuICAgICAqL1xuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgZHRzOiB0cnVlLFxuICAgICAgaW1wb3J0czogWyd2dWUnLCAnQHZ1ZXVzZS9jb3JlJywgVnVlUm91dGVyQXV0b0ltcG9ydHNdLFxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBhbiBpbnRlcm5hbCB2aXRlIHBsdWdpbiB0aGF0IGxvYWQgbWFya2Rvd24gZmlsZXMgYXMgdnVlIGNvbXBvbmVudHMuXG4gICAgICpcbiAgICAgKiBAc2VlIC9kb2N1bWVudGF0aW9uXG4gICAgICogQHNlZSAvdml0ZS1wbHVnaW4tdnVlcm8tZG9jXG4gICAgICogQHNlZSAvc3JjL2NvbXBvbmVudHMvcGFydGlhbHMvZG9jdW1lbnRhdGlvbi9Eb2N1bWVudGF0aW9uSXRlbS52dWVcbiAgICAgKiBAc2VlIC9zcmMvY29tcG9zYWJsZS91c2VNYXJrZG93blRvYy50c1xuICAgICAqL1xuICAgIFZpdGVQbHVnaW5WdWVyb0RvYyh7XG4gICAgICBwYXRoUHJlZml4OiAnZG9jdW1lbnRhdGlvbicsXG4gICAgICB3cmFwcGVyQ29tcG9uZW50OiAnRG9jdW1lbnRhdGlvbkl0ZW0nLFxuICAgICAgc2hpa2k6IHtcbiAgICAgICAgdGhlbWU6IHtcbiAgICAgICAgICBsaWdodDogJ21pbi1saWdodCcsXG4gICAgICAgICAgZGFyazogJ2dpdGh1Yi1kYXJrJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBzb3VyY2VNZXRhOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGVkaXRQcm90b2NvbDogJ3ZzY29kZTovL3ZzY29kZS1yZW1vdGUvd3NsK1VidW50dScsIC8vIG9yICd2c2NvZGU6Ly9maWxlJ1xuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIHVucGx1Z2luLXZ1ZS1jb21wb25lbnRzIHBsdWdpbiBpcyByZXNwb25zaWJsZSBvZiBhdXRvbG9hZGluZyBjb21wb25lbnRzXG4gICAgICogZG9jdW1lbnRhdGlvbiBhbmQgbWQgZmlsZSBhcmUgbG9hZGVkIGZvciBlbGVtZW50cyBhbmQgY29tcG9uZW50cyBzZWN0aW9uc1xuICAgICAqXG4gICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGRpcnM6IFsnZG9jdW1lbnRhdGlvbicsICdzcmMvY29tcG9uZW50cycsICdzcmMvbGF5b3V0cyddLFxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcbiAgICAgIGR0czogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiB2aXRlLXBsdWdpbi1wdXJnZS1pY29ucyBwbHVnaW4gaXMgcmVzcG9uc2libGUgb2YgYXV0b2xvYWRpbmcgaWNvbmVzIGZyb20gbXVsdGlwbGVzIHByb3ZpZGVyc1xuICAgICAqXG4gICAgICogQHNlZSBodHRwczovL2ljb25lcy5uZXRsaWZ5LmFwcC9cbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS9wdXJnZS1pY29ucy90cmVlL21haW4vcGFja2FnZXMvdml0ZS1wbHVnaW4tcHVyZ2UtaWNvbnNcbiAgICAgKi9cbiAgICBQdXJnZUljb25zKCksXG5cbiAgICAvKipcbiAgICAgKiB2aXRlLXBsdWdpbi1mb250cyBwbHVnaW4gaW5qZWN0IHdlYmZvbnRzIGZyb20gZGlmZmVyZW50cyBwcm92aWRlcnNcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3N0YWZ5bmlha3NhY2hhL3ZpdGUtcGx1Z2luLWZvbnRzXG4gICAgICovXG4gICAgVW5mb250cyh7XG4gICAgICBnb29nbGU6IHtcbiAgICAgICAgZmFtaWxpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRmlyYSBDb2RlJyxcbiAgICAgICAgICAgIHN0eWxlczogJ3dnaHRANDAwOzYwMCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTW9udHNlcnJhdCcsXG4gICAgICAgICAgICBzdHlsZXM6ICd3Z2h0QDUwMDs2MDA7NzAwOzgwMDs5MDAnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1JvYm90bycsXG4gICAgICAgICAgICBzdHlsZXM6ICd3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogdml0ZS1wbHVnaW4tcmFkYXIgcGx1Z2luIGluamVjdCBzbmlwcGV0cyBmcm9tIGFuYWx5dGljcyBwcm92aWRlcnNcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3N0YWZ5bmlha3NhY2hhL3ZpdGUtcGx1Z2luLXJhZGFyXG4gICAgICovXG4gICAgIXByb2Nlc3MuZW52LkdUTV9JRFxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogVml0ZVBsdWdpblJhZGFyKHtcbiAgICAgICAgICBndG06IHtcbiAgICAgICAgICAgIGlkOiBwcm9jZXNzLmVudi5HVE1fSUQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG5cbiAgICAvKipcbiAgICAgKiB2aXRlLXBsdWdpbi1wd2EgZ2VuZXJhdGUgbWFuaWZlc3QuanNvbiBhbmQgcmVnaXN0ZXIgc2VydmljZXMgd29ya2VyIHRvIGVuYWJsZSBQV0FcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXB3YVxuICAgICAqL1xuICAgIFZpdGVQV0Eoe1xuICAgICAgYmFzZTogJy8nLFxuICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLnN2ZycsICdmYXZpY29uLmljbycsICdyb2JvdHMudHh0JywgJ2FwcGxlLXRvdWNoLWljb24ucG5nJ10sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnVnVlcm8gLSBBIGNvbXBsZXRlIFZ1ZSAzIGRlc2lnbiBzeXN0ZW0nLFxuICAgICAgICBzaG9ydF9uYW1lOiAnVnVlcm8nLFxuICAgICAgICBzdGFydF91cmw6ICcvP3V0bV9zb3VyY2U9cHdhJyxcbiAgICAgICAgZGlzcGxheTogJ3N0YW5kYWxvbmUnLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLTE5MngxOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdwd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiByb2xsdXAtcGx1Z2luLXB1cmdlY3NzIHBsdWdpbiBpcyByZXNwb25zaWJsZSBvZiBwdXJnaW5nIGNzcyBydWxlc1xuICAgICAqIHRoYXQgYXJlIG5vdCB1c2VkIGluIHRoZSBidW5kbGVcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Z1bGxIdW1hbi9wdXJnZWNzcy90cmVlL21haW4vcGFja2FnZXMvcm9sbHVwLXBsdWdpbi1wdXJnZWNzc1xuICAgICAqL1xuICAgIHB1cmdlY3NzKHtcbiAgICAgIG91dHB1dDogZmFsc2UsXG4gICAgICBjb250ZW50OiBbYC4vc3JjLyoqLyoudnVlYF0sXG4gICAgICB2YXJpYWJsZXM6IGZhbHNlLFxuICAgICAgc2FmZWxpc3Q6IHtcbiAgICAgICAgc3RhbmRhcmQ6IFtcbiAgICAgICAgICAvKGF1dHZ8bG5pbHxsbmlyfGZhcz8pLyxcbiAgICAgICAgICAvLShsZWF2ZXxlbnRlcnxhcHBlYXIpKHwtKHRvfGZyb218YWN0aXZlKSkkLyxcbiAgICAgICAgICAvXig/ISh8Lio/OiljdXJzb3ItbW92ZSkuKy1tb3ZlJC8sXG4gICAgICAgICAgL15yb3V0ZXItbGluayh8LWV4YWN0KS1hY3RpdmUkLyxcbiAgICAgICAgICAvZGF0YS12LS4qLyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0RXh0cmFjdG9yKGNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgY29udGVudFdpdGhvdXRTdHlsZUJsb2NrcyA9IGNvbnRlbnQucmVwbGFjZSgvPHN0eWxlW15dKz88XFwvc3R5bGU+L2dpLCAnJylcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRXaXRob3V0U3R5bGVCbG9ja3MubWF0Y2goL1tBLVphLXowLTktXy86XSpbQS1aYS16MC05LV8vXSsvZykgfHwgW11cbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiB2aXRlLXBsdWdpbi1pbWFnZW1pbiBvcHRpbWl6ZSBhbGwgaW1hZ2VzIHNpemVzIGZyb20gcHVibGljIG9yIGFzc2V0IGZvbGRlclxuICAgICAqXG4gICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5uY3diL3ZpdGUtcGx1Z2luLWltYWdlbWluXG4gICAgICovXG4gICAgIU1JTklGWV9JTUFHRVNcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IEltYWdlTWluKHtcbiAgICAgICAgICBnaWZzaWNsZToge1xuICAgICAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXG4gICAgICAgICAgICBpbnRlcmxhY2VkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wdGlwbmc6IHtcbiAgICAgICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW96anBlZzoge1xuICAgICAgICAgICAgcXVhbGl0eTogNjAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbmdxdWFudDoge1xuICAgICAgICAgICAgcXVhbGl0eTogWzAuOCwgMC45XSxcbiAgICAgICAgICAgIHNwZWVkOiA0LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3Znbzoge1xuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZVZpZXdCb3gnLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlRW1wdHlBdHRycycsXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gIF0sXG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbXVoYW1tYWRhcmRhbmhpbGFsL0RvY3VtZW50cy93b3JrL3dlYi90ZW1wbGF0ZS90aGVtZWZvcmVzdC14dmhielNoSy12dWVyby12dWVqcy0zLWFkbWluLWFuZC13ZWJhcHAtdWkta2l0L3RlbXBsYXRlLXZ1ZXJvLXYyLjcuMC92aXRlLXBsdWdpbi12dWVyby1kb2NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tdWhhbW1hZGFyZGFuaGlsYWwvRG9jdW1lbnRzL3dvcmsvd2ViL3RlbXBsYXRlL3RoZW1lZm9yZXN0LXh2aGJ6U2hLLXZ1ZXJvLXZ1ZWpzLTMtYWRtaW4tYW5kLXdlYmFwcC11aS1raXQvdGVtcGxhdGUtdnVlcm8tdjIuNy4wL3ZpdGUtcGx1Z2luLXZ1ZXJvLWRvYy9pbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbXVoYW1tYWRhcmRhbmhpbGFsL0RvY3VtZW50cy93b3JrL3dlYi90ZW1wbGF0ZS90aGVtZWZvcmVzdC14dmhielNoSy12dWVyby12dWVqcy0zLWFkbWluLWFuZC13ZWJhcHAtdWkta2l0L3RlbXBsYXRlLXZ1ZXJvLXYyLjcuMC92aXRlLXBsdWdpbi12dWVyby1kb2MvaW5kZXgudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbiwgUmVzb2x2ZWRDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHR5cGUgeyBQcm9jZXNzb3IgfSBmcm9tICd1bmlmaWVkJ1xuaW1wb3J0IHR5cGUgeyBUaGVtZSB9IGZyb20gJ3NoaWtpJ1xuXG5pbXBvcnQgeyBqb2luLCBiYXNlbmFtZSB9IGZyb20gJ3BhdGhlJ1xuaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBwYXJzZSB9IGZyb20gJ0B2dWUvY29tcGlsZXItc2ZjJ1xuXG5pbXBvcnQgeyBjcmVhdGVQcm9jZXNzb3JzIH0gZnJvbSAnLi9tYXJrZG93bidcbmltcG9ydCB7IHRyYW5zZm9ybUV4YW1wbGVNYXJrdXAsIHRyYW5zZm9ybVNsb3RzIH0gZnJvbSAnLi90cmFuc2Zvcm0nXG5cbmZ1bmN0aW9uIHBhcnNlSWQoaWQ6IHN0cmluZykge1xuICBjb25zdCBpbmRleCA9IGlkLmluZGV4T2YoJz8nKVxuICBpZiAoaW5kZXggPCAwKSByZXR1cm4gaWRcbiAgZWxzZSByZXR1cm4gaWQuc2xpY2UoMCwgaW5kZXgpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGx1Z2luT3B0aW9ucyB7XG4gIHBhdGhQcmVmaXg/OiBzdHJpbmdcbiAgd3JhcHBlckNvbXBvbmVudDogc3RyaW5nXG4gIHNoaWtpOiB7XG4gICAgdGhlbWU6XG4gICAgICB8IFRoZW1lXG4gICAgICB8IHtcbiAgICAgICAgICBsaWdodDogVGhlbWVcbiAgICAgICAgICBkYXJrOiBUaGVtZVxuICAgICAgICB9XG4gIH1cbiAgc291cmNlTWV0YT86IHtcbiAgICBlbmFibGVkPzogYm9vbGVhblxuICAgIGVkaXRQcm90b2NvbD86IHN0cmluZ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWaXRlUGx1Z2luVnVlcm9Eb2Mob3B0aW9uczogUGx1Z2luT3B0aW9ucykge1xuICBsZXQgY29uZmlnOiBSZXNvbHZlZENvbmZpZyB8IHVuZGVmaW5lZFxuICBsZXQgcHJvY2Vzc29yczogeyBsaWdodDogUHJvY2Vzc29yOyBkYXJrOiBQcm9jZXNzb3IgfSB8IHVuZGVmaW5lZFxuXG4gIGNvbnN0IGN3ZCA9IHByb2Nlc3MuY3dkKClcbiAgY29uc3QgcGF0aFByZWZpeCA9IG9wdGlvbnMucGF0aFByZWZpeCA/IGpvaW4oY3dkLCBvcHRpb25zLnBhdGhQcmVmaXgpIDogY3dkXG5cbiAgYXN5bmMgZnVuY3Rpb24gbWFya2Rvd25Ub1Z1ZShpZDogc3RyaW5nLCByYXc6IHN0cmluZykge1xuICAgIGNvbnN0IHBhdGggPSBwYXJzZUlkKGlkKVxuXG4gICAgLy8gdHJhbnNmb3JtIGV4YW1wbGUgbWFya3VwIHRvIHVzZSBrZWJhYi1jYXNlIHdpdGhvdXQgc2VsZi1jbG9zaW5nIGVsZW1lbnRzLlxuICAgIC8vIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgcmVoeXBlLXJhdyByZXF1aXJlcyB2YWxpZCBodG1sIChvbmx5IHNvbWUgdGFncyBhcmUgc2VsZi1jbG9zYWJsZSlcbiAgICBjb25zdCBpbnB1dCA9IHRyYW5zZm9ybUV4YW1wbGVNYXJrdXAocmF3KVxuXG4gICAgLy8gcHJvY2VzcyBtYXJrZG93biB3aXRoIHJlbWFya1xuICAgIGlmICghcHJvY2Vzc29ycykgcHJvY2Vzc29ycyA9IGF3YWl0IGNyZWF0ZVByb2Nlc3NvcnMob3B0aW9ucy5zaGlraS50aGVtZSlcblxuICAgIGNvbnN0IFt2RmlsZUxpZ2h0LCB2RmlsZURhcmtdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgcHJvY2Vzc29ycy5saWdodC5wcm9jZXNzKGlucHV0KSxcbiAgICAgIHByb2Nlc3NvcnMuZGFyay5wcm9jZXNzKGlucHV0KSxcbiAgICBdKVxuXG4gICAgY29uc3QgY29udGVudExpZ2h0ID0gdkZpbGVMaWdodC50b1N0cmluZygpXG4gICAgY29uc3QgY29udGVudERhcmsgPSB2RmlsZURhcmsudG9TdHJpbmcoKVxuICAgIGNvbnN0IGZyb250bWF0dGVyID0gdkZpbGVMaWdodC5kYXRhPy5mcm9udG1hdHRlciA/PyB7fVxuXG4gICAgLy8gcmVwbGFjZSBjb2RlL2V4YW1wbGUgc2xvdHMgcGxhY2Vob2xkZXJzXG4gICAgY29uc3Qgc2xvdExpZ2h0ID0gdHJhbnNmb3JtU2xvdHMoY29udGVudExpZ2h0LCAndi1pZj1cIiFkYXJrbW9kZS5pc0RhcmtcIicpXG4gICAgY29uc3Qgc2xvdERhcmsgPSB0cmFuc2Zvcm1TbG90cyhjb250ZW50RGFyaywgJ3YtaWY9XCJkYXJrbW9kZS5pc0RhcmtcIicpXG5cbiAgICAvLyB3cmFwIGNvbnRlbnQgaW4gd3JhcHBlciBjb21wb25lbnQgZGVmYXVsdCBzbG90XG4gICAgY29uc3Qgc2ZjID0gW1xuICAgICAgYDx0ZW1wbGF0ZT5gLFxuICAgICAgYCAgPCR7b3B0aW9ucy53cmFwcGVyQ29tcG9uZW50fSA6ZnJvbnRtYXR0ZXI9XCJmcm9udG1hdHRlclwiIDpzb3VyY2UtbWV0YT1cInNvdXJjZU1ldGFcIj5gLFxuICAgICAgYCAgICAke3Nsb3RMaWdodH1gLFxuICAgICAgYCAgICAke3Nsb3REYXJrfWAsXG4gICAgICBgICA8LyR7b3B0aW9ucy53cmFwcGVyQ29tcG9uZW50fT5gLFxuICAgICAgYDwvdGVtcGxhdGU+YCxcbiAgICBdLmpvaW4oJ1xcbicpXG5cbiAgICAvLyBwYXJzZSB0ZW1wbGF0ZSB3aXRoIHZ1ZSBzZmMgY29tcGlsZXJcbiAgICBjb25zdCByZXN1bHQgPSBwYXJzZShzZmMsIHtcbiAgICAgIGZpbGVuYW1lOiBwYXRoLFxuICAgICAgc291cmNlTWFwOiB0cnVlLFxuICAgIH0pXG5cbiAgICBpZiAocmVzdWx0LmVycm9ycy5sZW5ndGggfHwgcmVzdWx0LmRlc2NyaXB0b3IudGVtcGxhdGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0LmVycm9ycylcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNYXJrZG93bjogdW5hYmxlIHRvIHBhcnNlIHZpcnR1YWwgZmlsZSBnZW5lcmF0ZWQgZm9yIFwiJHtpZH1cImApXG4gICAgfVxuXG4gICAgLy8gY29tcGlsZSB0ZW1wbGF0ZSB3aXRoIHZ1ZSBzZmMgY29tcGlsZXJcbiAgICBjb25zdCB7IGNvZGUsIGVycm9ycyB9ID0gY29tcGlsZVRlbXBsYXRlKHtcbiAgICAgIGZpbGVuYW1lOiBwYXRoLFxuICAgICAgaWQ6IHBhdGgsXG4gICAgICBzb3VyY2U6IHJlc3VsdC5kZXNjcmlwdG9yLnRlbXBsYXRlLmNvbnRlbnQsXG4gICAgICBwcmVwcm9jZXNzTGFuZzogcmVzdWx0LmRlc2NyaXB0b3IudGVtcGxhdGUubGFuZyxcbiAgICAgIHRyYW5zZm9ybUFzc2V0VXJsczogZmFsc2UsXG4gICAgfSlcblxuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9ycylcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNYXJrZG93bjogdW5hYmxlIHRvIGNvbXBpbGUgdmlydHVhbCBmaWxlIFwiJHtpZH1cImApXG4gICAgfVxuXG4gICAgLy8gc291cmNlIGlzIHVzZWQgdG8gZGlzcGxheSBlZGl0IHNvdXJjZSBsaW5rIGluIHRoZSBkb2NzXG4gICAgbGV0IHNvdXJjZU1ldGEgPSAndW5kZWZpbmVkJ1xuICAgIGlmIChvcHRpb25zLnNvdXJjZU1ldGE/LmVuYWJsZWQpIHtcbiAgICAgIHNvdXJjZU1ldGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHJlbGF0aXZlUGF0aDogcGF0aC5zdWJzdHJpbmcoY3dkLmxlbmd0aCksXG4gICAgICAgIGJhc2VuYW1lOiBiYXNlbmFtZShwYXRoKSxcbiAgICAgICAgcGF0aDogY29uZmlnPy5pc1Byb2R1Y3Rpb24gPyAnJyA6IHBhdGgsXG4gICAgICAgIGVkaXRQcm90b2NvbDogY29uZmlnPy5pc1Byb2R1Y3Rpb24gPyAnJyA6IG9wdGlvbnMuc291cmNlTWV0YS5lZGl0UHJvdG9jb2wsXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGluamVjdCBmcm9udG1hdHRlci9kYXJrbW9kZSBhbmQgaG1ySWQgaW50byB0aGUgY29tcGlsZWQgcmVuZGVyIGZ1bmN0aW9uXG4gICAgY29uc3Qgb3V0cHV0ID0gW1xuICAgICAgYGltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJ2AsXG4gICAgICBgaW1wb3J0IHsgdXNlRGFya21vZGUgfSBmcm9tICcvQHNyYy9zdG9yZXMvZGFya21vZGUnYCxcblxuICAgICAgY29kZS5yZXBsYWNlKCdleHBvcnQgZnVuY3Rpb24gcmVuZGVyJywgJ2Z1bmN0aW9uIHJlbmRlcicpLFxuXG4gICAgICBgY29uc3QgX19mcm9udG1hdHRlciA9ICR7SlNPTi5zdHJpbmdpZnkoZnJvbnRtYXR0ZXIpfTtgLFxuICAgICAgYGNvbnN0IHNldHVwID0gKCkgPT4gKHtgLFxuICAgICAgYCAgZnJvbnRtYXR0ZXI6IHJlYWN0aXZlKF9fZnJvbnRtYXR0ZXIpLGAsXG4gICAgICBgICBkYXJrbW9kZTogdXNlRGFya21vZGUoKSxgLFxuICAgICAgYCAgc291cmNlTWV0YTogJHtzb3VyY2VNZXRhfSxgLFxuICAgICAgYH0pO2AsXG4gICAgICBgY29uc3QgX19zY3JpcHQgPSB7IHJlbmRlciwgc2V0dXAgfTtgLFxuXG4gICAgICBjb25maWc/LmlzUHJvZHVjdGlvbiA/ICcnIDogYF9fc2NyaXB0Ll9faG1ySWQgPSAke0pTT04uc3RyaW5naWZ5KHBhdGgpfTtgLFxuICAgICAgYGV4cG9ydCBkZWZhdWx0IF9fc2NyaXB0O2AsXG4gICAgXS5qb2luKCdcXG4nKVxuXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAndml0ZS1wbHVnaW4tdnVlcm8tZG9jJyxcbiAgICBlbmZvcmNlOiAncHJlJyxcbiAgICBjb25maWdSZXNvbHZlZChfY29uZmlnKSB7XG4gICAgICBjb25maWcgPSBfY29uZmlnXG4gICAgfSxcbiAgICBhc3luYyB0cmFuc2Zvcm0ocmF3LCBpZCkge1xuICAgICAgaWYgKGlkLmVuZHNXaXRoKCcubWQnKSAmJiBpZC5zdGFydHNXaXRoKHBhdGhQcmVmaXgpKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBtYXJrZG93blRvVnVlKGlkLCByYXcpXG4gICAgICB9XG4gICAgfSxcbiAgfSBzYXRpc2ZpZXMgUGx1Z2luXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpdGVQbHVnaW5WdWVyb0RvY1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbXVoYW1tYWRhcmRhbmhpbGFsL0RvY3VtZW50cy93b3JrL3dlYi90ZW1wbGF0ZS90aGVtZWZvcmVzdC14dmhielNoSy12dWVyby12dWVqcy0zLWFkbWluLWFuZC13ZWJhcHAtdWkta2l0L3RlbXBsYXRlLXZ1ZXJvLXYyLjcuMC92aXRlLXBsdWdpbi12dWVyby1kb2NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tdWhhbW1hZGFyZGFuaGlsYWwvRG9jdW1lbnRzL3dvcmsvd2ViL3RlbXBsYXRlL3RoZW1lZm9yZXN0LXh2aGJ6U2hLLXZ1ZXJvLXZ1ZWpzLTMtYWRtaW4tYW5kLXdlYmFwcC11aS1raXQvdGVtcGxhdGUtdnVlcm8tdjIuNy4wL3ZpdGUtcGx1Z2luLXZ1ZXJvLWRvYy9tYXJrZG93bi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbXVoYW1tYWRhcmRhbmhpbGFsL0RvY3VtZW50cy93b3JrL3dlYi90ZW1wbGF0ZS90aGVtZWZvcmVzdC14dmhielNoSy12dWVyby12dWVqcy0zLWFkbWluLWFuZC13ZWJhcHAtdWkta2l0L3RlbXBsYXRlLXZ1ZXJvLXYyLjcuMC92aXRlLXBsdWdpbi12dWVyby1kb2MvbWFya2Rvd24udHNcIjtpbXBvcnQgeWFtbCBmcm9tICdqcy15YW1sJ1xuaW1wb3J0IHJlbWFya1NoaWtpIGZyb20gJ0BzdGVmYW5wcm9ic3QvcmVtYXJrLXNoaWtpJ1xuaW1wb3J0IHJlaHlwZUV4dGVybmFsTGlua3MgZnJvbSAncmVoeXBlLWV4dGVybmFsLWxpbmtzJ1xuaW1wb3J0IHJlaHlwZVJhdyBmcm9tICdyZWh5cGUtcmF3J1xuaW1wb3J0IHJlaHlwZVNsdWcgZnJvbSAncmVoeXBlLXNsdWcnXG5pbXBvcnQgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyBmcm9tICdyZWh5cGUtYXV0b2xpbmstaGVhZGluZ3MnXG5pbXBvcnQgcmVoeXBlU3RyaW5naWZ5IGZyb20gJ3JlaHlwZS1zdHJpbmdpZnknXG5pbXBvcnQgcmVtYXJrUGFyc2UgZnJvbSAncmVtYXJrLXBhcnNlJ1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tICdyZW1hcmstZ2ZtJ1xuaW1wb3J0IHJlbWFya1JlaHlwZSBmcm9tICdyZW1hcmstcmVoeXBlJ1xuaW1wb3J0IHJlbWFya0Zyb250bWF0dGVyIGZyb20gJ3JlbWFyay1mcm9udG1hdHRlcidcbmltcG9ydCB7IGdldEhpZ2hsaWdodGVyLCB0eXBlIElUaGVtZVJlZ2lzdHJhdGlvbiwgdHlwZSBMYW5nLCB0eXBlIFRoZW1lIH0gZnJvbSAnc2hpa2knXG5pbXBvcnQgeyB1bmlmaWVkLCB0eXBlIFByb2Nlc3NvciB9IGZyb20gJ3VuaWZpZWQnXG5cbmNvbnN0IGxhbmdzID0gWyd2dWUnLCAndnVlLWh0bWwnLCAndHlwZXNjcmlwdCcsICdiYXNoJywgJ3Njc3MnXSBzYXRpc2ZpZXMgTGFuZ1tdXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9jZXNzb3IodGhlbWU6IElUaGVtZVJlZ2lzdHJhdGlvbik6IFByb21pc2U8UHJvY2Vzc29yPiB7XG4gIGNvbnN0IGhpZ2hsaWdodGVyID0gYXdhaXQgZ2V0SGlnaGxpZ2h0ZXIoe1xuICAgIHRoZW1lLFxuICAgIGxhbmdzLFxuICB9KVxuXG4gIHJldHVybiB1bmlmaWVkKClcbiAgICAudXNlKHJlbWFya1BhcnNlKVxuICAgIC51c2UocmVtYXJrRnJvbnRtYXR0ZXIpXG4gICAgLnVzZSgoKSA9PiAodHJlZSwgZmlsZSkgPT4ge1xuICAgICAgaWYgKHRyZWUuY2hpbGRyZW5bMF0udHlwZSA9PT0gJ3lhbWwnKSB7XG4gICAgICAgIC8vIHN0b3JlIGZyb250bWF0dGVyIGluIHZmaWxlXG4gICAgICAgIGZpbGUuZGF0YS5mcm9udG1hdHRlciA9IHlhbWwubG9hZCh0cmVlLmNoaWxkcmVuWzBdLnZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgLnVzZShyZW1hcmtHZm0pXG4gICAgLnVzZShyZW1hcmtTaGlraSwgeyBoaWdobGlnaHRlciB9KVxuICAgIC51c2UocmVtYXJrUmVoeXBlLCB7IGFsbG93RGFuZ2Vyb3VzSHRtbDogdHJ1ZSB9KVxuICAgIC51c2UocmVoeXBlUmF3KVxuICAgIC51c2UocmVoeXBlRXh0ZXJuYWxMaW5rcywgeyByZWw6IFsnbm9mb2xsb3cnXSwgdGFyZ2V0OiAnX2JsYW5rJyB9KVxuICAgIC51c2UocmVoeXBlU2x1ZylcbiAgICAudXNlKHJlaHlwZUF1dG9saW5rSGVhZGluZ3MsIHtcbiAgICAgIGJlaGF2aW9yOiAnYXBwZW5kJyxcbiAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgICAgICB0YWdOYW1lOiAnaScsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBjbGFzc05hbWU6IFsnaWNvbmlmeSB0b2MtbGluay1hbmNob3InXSxcbiAgICAgICAgICBkYXRhSWNvbjogJ2ZlYXRoZXI6bGluaycsXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudXNlKHJlaHlwZVN0cmluZ2lmeSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2Nlc3NvcnMoXG4gIHRoZW1lOlxuICAgIHwgVGhlbWVcbiAgICB8IHtcbiAgICAgICAgbGlnaHQ6IFRoZW1lXG4gICAgICAgIGRhcms6IFRoZW1lXG4gICAgICB9XG4pOiBQcm9taXNlPHsgbGlnaHQ6IFByb2Nlc3NvcjsgZGFyazogUHJvY2Vzc29yIH0+IHtcbiAgcmV0dXJuIHtcbiAgICBsaWdodDogYXdhaXQgY3JlYXRlUHJvY2Vzc29yKHR5cGVvZiB0aGVtZSA9PT0gJ3N0cmluZycgPyB0aGVtZSA6IHRoZW1lLmxpZ2h0KSxcbiAgICBkYXJrOiBhd2FpdCBjcmVhdGVQcm9jZXNzb3IodHlwZW9mIHRoZW1lID09PSAnc3RyaW5nJyA/IHRoZW1lIDogdGhlbWUuZGFyayksXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL211aGFtbWFkYXJkYW5oaWxhbC9Eb2N1bWVudHMvd29yay93ZWIvdGVtcGxhdGUvdGhlbWVmb3Jlc3QteHZoYnpTaEstdnVlcm8tdnVlanMtMy1hZG1pbi1hbmQtd2ViYXBwLXVpLWtpdC90ZW1wbGF0ZS12dWVyby12Mi43LjAvdml0ZS1wbHVnaW4tdnVlcm8tZG9jXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbXVoYW1tYWRhcmRhbmhpbGFsL0RvY3VtZW50cy93b3JrL3dlYi90ZW1wbGF0ZS90aGVtZWZvcmVzdC14dmhielNoSy12dWVyby12dWVqcy0zLWFkbWluLWFuZC13ZWJhcHAtdWkta2l0L3RlbXBsYXRlLXZ1ZXJvLXYyLjcuMC92aXRlLXBsdWdpbi12dWVyby1kb2MvdHJhbnNmb3JtLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tdWhhbW1hZGFyZGFuaGlsYWwvRG9jdW1lbnRzL3dvcmsvd2ViL3RlbXBsYXRlL3RoZW1lZm9yZXN0LXh2aGJ6U2hLLXZ1ZXJvLXZ1ZWpzLTMtYWRtaW4tYW5kLXdlYmFwcC11aS1raXQvdGVtcGxhdGUtdnVlcm8tdjIuNy4wL3ZpdGUtcGx1Z2luLXZ1ZXJvLWRvYy90cmFuc2Zvcm0udHNcIjtpbXBvcnQgeyBrZWJhYkNhc2UgfSBmcm9tICdzY3VsZSdcblxuY29uc3QgU0VMRl9DTE9TSU5HX1RBR19SRUdFWCA9IC88KFteXFxzPjwvXSspKFtePl0rKVxcLz4vZ1xuY29uc3QgT1BFTl9UQUdfUkVHRVggPSAvPChbXlxccz48L10rKS9nXG5jb25zdCBDTE9TRV9UQUdfUkVHRVggPSAvPFxcLyhbXlxccz48L10rKS9nXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1FeGFtcGxlTWFya3VwKHJhdzogc3RyaW5nKSB7XG4gIGxldCBvdXRwdXQgPSByYXdcbiAgbGV0IGNvbnRlbnQ6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gbnVsbFxuICBpZiAoKGNvbnRlbnQgPSByYXcubWF0Y2goLzwhLS1leGFtcGxlLS0+KFtcXHNcXFNdKj8pPCEtLVxcL2V4YW1wbGUtLT4vKSkpIHtcbiAgICBjb25zdCBrZWJhYkNvbnRlbnQgPSBjb250ZW50WzFdXG4gICAgICAucmVwbGFjZUFsbChTRUxGX0NMT1NJTkdfVEFHX1JFR0VYLCAoc3Vic3RyaW5nLCB0YWcpID0+IHtcbiAgICAgICAgcmV0dXJuIHN1YnN0cmluZy5yZXBsYWNlKCcvPicsIGA+PC8ke3RhZy50cmltKCl9PmApXG4gICAgICB9KVxuICAgICAgLnJlcGxhY2VBbGwoT1BFTl9UQUdfUkVHRVgsIChzdWJzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8JHtrZWJhYkNhc2Uoc3Vic3RyaW5nLnN1YnN0cmluZygxKS50cmltKCkpfWBcbiAgICAgIH0pXG4gICAgICAucmVwbGFjZUFsbChDTE9TRV9UQUdfUkVHRVgsIChzdWJzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8LyR7a2ViYWJDYXNlKHN1YnN0cmluZy5zdWJzdHJpbmcoMikudHJpbSgpKX1gXG4gICAgICB9KVxuICAgICAgLnJlcGxhY2VBbGwoJyYjeDI3OycsIFwiJ1wiKVxuXG4gICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoY29udGVudFsxXSwga2ViYWJDb250ZW50KVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtU2xvdHMoc291cmNlOiBzdHJpbmcsIGNvbmRpdGlvbjogc3RyaW5nID0gJycpIHtcbiAgaWYgKHNvdXJjZS5pbmNsdWRlcygnPCEtLWNvZGUtLT4nKSAmJiBzb3VyY2UuaW5jbHVkZXMoJzwhLS1leGFtcGxlLS0+JykpIHtcbiAgICByZXR1cm4gYDx0ZW1wbGF0ZSAke2NvbmRpdGlvbn0gI2RlZmF1bHQ+JHtzb3VyY2V9YFxuICAgICAgLnJlcGxhY2UoXG4gICAgICAgIGA8IS0tY29kZS0tPmAsXG4gICAgICAgIGA8L3RlbXBsYXRlPjx0ZW1wbGF0ZSAke2NvbmRpdGlvbn0gI2NvZGU+XFxuPHNsb3QgbmFtZT1cImNvZGVcIj48ZGl2IHYtcHJlPmBcbiAgICAgIClcbiAgICAgIC5yZXBsYWNlKGA8IS0tL2NvZGUtLT5gLCBgPC9kaXY+PC9zbG90PlxcbjwvdGVtcGxhdGU+YClcbiAgICAgIC5yZXBsYWNlKFxuICAgICAgICBgPCEtLWV4YW1wbGUtLT5gLFxuICAgICAgICBgPHRlbXBsYXRlICR7Y29uZGl0aW9ufSAjZXhhbXBsZT5cXG48c2xvdCBuYW1lPVwiZXhhbXBsZVwiPmBcbiAgICAgIClcbiAgICAgIC5yZXBsYWNlKGA8IS0tL2V4YW1wbGUtLT5gLCBgPC9zbG90PlxcbjwvdGVtcGxhdGU+YClcbiAgfVxuXG4gIGlmIChzb3VyY2UuaW5jbHVkZXMoJzwhLS1jb2RlLS0+JykpIHtcbiAgICByZXR1cm4gYDx0ZW1wbGF0ZSAke2NvbmRpdGlvbn0gI2RlZmF1bHQ+JHtzb3VyY2V9YFxuICAgICAgLnJlcGxhY2UoXG4gICAgICAgIGA8IS0tY29kZS0tPmAsXG4gICAgICAgIGA8L3RlbXBsYXRlPjx0ZW1wbGF0ZSAke2NvbmRpdGlvbn0gI2NvZGU+XFxuPHNsb3QgbmFtZT1cImNvZGVcIj48ZGl2IHYtcHJlPmBcbiAgICAgIClcbiAgICAgIC5yZXBsYWNlKFxuICAgICAgICBgPCEtLS9jb2RlLS0+YCxcbiAgICAgICAgYDwvZGl2Pjwvc2xvdD5cXG48L3RlbXBsYXRlPlxcbjx0ZW1wbGF0ZSAke2NvbmRpdGlvbn0gI2V4YW1wbGU+PHNsb3QgbmFtZT1cImV4YW1wbGVcIj48L3Nsb3Q+PC90ZW1wbGF0ZT5gXG4gICAgICApXG4gIH1cblxuICBpZiAoc291cmNlLmluY2x1ZGVzKCc8IS0tZXhhbXBsZS0tPicpKSB7XG4gICAgcmV0dXJuIGA8dGVtcGxhdGUgJHtjb25kaXRpb259ICNkZWZhdWx0PiR7c291cmNlfWBcbiAgICAgIC5yZXBsYWNlKFxuICAgICAgICBgPCEtLWV4YW1wbGUtLT5gLFxuICAgICAgICBgPC90ZW1wbGF0ZT48dGVtcGxhdGUgJHtjb25kaXRpb259ICNleGFtcGxlPlxcbjxzbG90IG5hbWU9XCJleGFtcGxlXCI+YFxuICAgICAgKVxuICAgICAgLnJlcGxhY2UoXG4gICAgICAgIGA8IS0tL2V4YW1wbGUtLT5gLFxuICAgICAgICBgPC9zbG90PlxcbjwvdGVtcGxhdGU+XFxuPHRlbXBsYXRlICR7Y29uZGl0aW9ufSAjY29kZT48c2xvdCBuYW1lPVwiY29kZVwiPjwvc2xvdD48L3RlbXBsYXRlPmBcbiAgICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgYDx0ZW1wbGF0ZSAke2NvbmRpdGlvbn0gI2RlZmF1bHQ+JHtzb3VyY2V9PC90ZW1wbGF0ZT5gICtcbiAgICBgPHRlbXBsYXRlICR7Y29uZGl0aW9ufSAjZXhhbXBsZT48c2xvdCBuYW1lPVwiZXhhbXBsZVwiPjwvc2xvdD48L3RlbXBsYXRlPmAgK1xuICAgIGA8dGVtcGxhdGUgJHtjb25kaXRpb259ICNjb2RlPjxzbG90IG5hbWU9XCJjb2RlXCI+PC9zbG90PjwvdGVtcGxhdGU+YFxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9rQixTQUFTLFNBQVMsZUFBZTtBQUNybUIsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZUFBZTtBQUN0QixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGFBQWE7QUFDcEIsU0FBUyx1QkFBdUI7QUFDaEMsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sbUJBQW1CO0FBQzFCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGNBQWM7OztBQ1ZyQixTQUFTLE1BQU0sZ0JBQWdCO0FBQy9CLFNBQVMsaUJBQWlCLGFBQWE7OztBQ0x5bEIsT0FBTyxVQUFVO0FBQ2pwQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLHlCQUF5QjtBQUNoQyxPQUFPLGVBQWU7QUFDdEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sdUJBQXVCO0FBQzlCLFNBQVMsc0JBQXNFO0FBQy9FLFNBQVMsZUFBK0I7QUFFeEMsSUFBTSxRQUFRLENBQUMsT0FBTyxZQUFZLGNBQWMsUUFBUSxNQUFNO0FBRTlELGVBQXNCLGdCQUFnQixPQUErQztBQUNuRixRQUFNLGNBQWMsTUFBTSxlQUFlO0FBQUEsSUFDdkM7QUFBQSxJQUNBO0FBQUEsRUFDRixDQUFD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
