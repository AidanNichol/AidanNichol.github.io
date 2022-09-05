export function defaultLayoutPluginMDX() {
  // All remark and rehype plugins return a separate function
  return function (tree, file) {
    console.log(file);
    file.data.astro.frontmatter.test = 'test MDX data';
    if (file.history[0].includes('works')) {
      file.data.astro.frontmatter.layout = '@layouts/work.astro';
    }
  };
}
