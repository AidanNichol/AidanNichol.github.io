export function defaultLayoutPlugin() {
  // All remark and rehype plugins return a separate function
  return function (tree, file) {
    if (file.history[0].includes('mdx') && !file.data.astro.frontmatter?.layout) {
      file.data.astro.frontmatter.layout = '@layouts/work.astro';
    }
  };
}
