import { getCollection } from "astro:content";
export const getPersonsWorks = async (person) => {
	const allWorks = await getCollection(person);
	// const worksF = await getPersonsWorks(page.person);
	// let base = import.meta.env.MODE === "development" ? `${person}/` : "";
	// const allWorks = import.meta.glob("../pages/**/*.{md,mdx}");
	const works = [];
	for (const work in allWorks) {
		const url = `/${person}/${work.slug}`;

		const fm = work.data;
		fm.url = url;
		fm.file = work.file;
		// fm.path = path;
		works.push(fm);
	}
	// console.log('using', works);
	return works;
};
