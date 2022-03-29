import fs from "fs";
import YAML from "yaml";

let content = "";

function add(str) {
	content = `${content}${str}\n\n`;
}

function groupBy(list, keyGetter) {
	const map = new Map();
	list.forEach((item) => {
		const key = keyGetter(item);
		const collection = map.get(key);
		if (!collection) {
			map.set(key, [item]);
		} else {
			collection.push(item);
		}
	});
	return map;
}

function authorString(author) {
	if (!author.url)
		return author.name
	return `[${author.name}](${author.url})`
}

function updateCampuses(infile, outfile) {
	const file = fs.readFileSync(infile, "utf8");
	const campuses = YAML.parse(file);

	content = "";

	const byContinent = groupBy(campuses, (campus) => campus.continent);

	byContinent.forEach((continent) => {
		add(`# ${continent[0].continent}`);
		continent.forEach((campus) => {
			add(
				`## [${campus.name}](${campus.url})

${campus.city}, ${campus.country}

**First Piscine**: ${campus.dates.piscine || "unknown"} | **First Kickoff**: ${
					campus.dates.kickoff || "unknown"
				}`
			);

			campus.notes && add(campus.notes);

			if (campus.associations) {
				add(`### Associations`);
				campus.associations_url &&
					add(
						`Discover more on the campus' [associations directory](${campus.associations_url}).`
					);
				campus.associations.forEach((as) => {
					add(`#### [${as.name}](${as.url})`);
					add(`${as.description}`);
				});
			}
		});
	});

	fs.writeFile(outfile, content, (err) => {
		if (err) {
			console.error(err);
			return;
		}
	});

	fs.close(file);
}

function updateProjects(infile, outfile) {
	const file = fs.readFileSync(infile, "utf8");
	const { projects, testers } = YAML.parse(file);

	content = "";

	const byRank = groupBy(projects, (project) => project.rank);


	byRank.forEach((rank) => {
		add(`# Rank 0${rank[0].rank}`);
		rank.forEach((project) => {
			add(`## ${project.name}`);
			add(
				`[Intra](https://projects.intra.42.fr/projects/${project.slug})`
			);

			const ptesters = testers.filter((tester) =>
				tester.projects.includes(project.slug)
			);

			if (ptesters.length) {
				add("### Testers");

				ptesters.forEach((tester) =>
					add(
						`- [${tester.name}](${
							tester.url
						})${` by ${tester.authors?.map(authorString).join(", ")}`}`
						)

				);
			}
		});
	});

	fs.writeFile(outfile, content, (err) => {
		if (err) {
			console.error(err);
			return;
		}
	});
}

// updateCampuses("../data/campuses.yaml", "./campuses.md");
updateProjects("../data/projects.yaml", "../projects.md");
