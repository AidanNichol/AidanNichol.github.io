export const getPersonsWorks = async (person) => {
  const allWorks = import.meta.glob('../pages/**/*.{md,mdx}');
  const works = [];
  for (const path in allWorks) {
    if (!path.includes(`/${person}/`)) {
      // console.log('skipping', person, path);
      continue;
    }
    const work = await allWorks[path]();
    const fm = work.frontmatter;
    fm.url = work.url;
    fm.file = work.file;
    fm.path = path;
    works.push(fm);
  }
  // console.log('using', works);
  return works;
};
