export const getPersonsWorks = async (person) => {
  const allWorks = import.meta.glob('../pages/**/*.{md,mdx}');
  const worksF = [];
  for (const path in allWorks) {
    if (!path.includes(`/${person}/`)) {
      continue;
    }
    const work = await allWorks[path]();
    const fm = work.frontmatter;
    fm.url = work.url;
    fm.file = work.file;
    fm.path = path;
    worksF.push(fm);
  }
  return worksF;
};
