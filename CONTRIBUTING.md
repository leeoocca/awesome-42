# Contributing to [awesome-42](https://github.com/leeoocca/awesome-42)

Please note that this project is released with a [Contributor Code of Conduct](code_of_conduct.md). By participating in this project you agree to abide by its terms.

---

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a issue
- Submitting a fix
- Proposing new sections
- Discussing the current contents of the list
- Becoming a curator

## Proposing changes

Pull requests are the best way to propose changes. We actively welcome your pull requests:

1. Fork the repo and create your branch from `master`.
1. Make the changes following the formatting guidelines.
1. If you've changed the sections structure, update the TOC (Table of Contents).
1. Issue that pull request!

## Formatting Guidelines

### [readme.md](readme.md)

**Links** to add:

- Anything that doesn't fit in either [campuses.yaml](#campusesyaml) or [projects.yaml](#projectsyaml).

When proposing changes, be sure to adhere to the following formatting:

```md
<!-- Link with description -->
- [Title](https://url) - Description.

<!-- Link without description -->
- [Title](https://url)
```

- Adding a description is always preferrable, especially if the link contents can't be guessed from the context of the section.
- `https` is preferrable for the URL when possible.
- Indentation is always done with tabs.

<!-- ### \*.yaml -->
<!-- how to write valid yaml -->
<!-- add order -->
<!-- testing -->

### [campuses.yaml](data/campuses.yaml)

**Links** to add:

- Campus
- Campus associations/clubs

**Schema**:

| Field                      | Required |   Type    | Description                                |
| -------------------------- | :------: | :-------: | ------------------------------------------ |
| `name`                     |    Y     |  string   | Full campus name                           |
| `city`                     |    Y     |  string   | English name of the city                   |
| `country`                  |    Y     |  string   | English name of the country                |
| `continent`                |    Y     | Continent | English name of the continent              |
| `url`                      |    Y     |    URL    | Campus homepage                            |
| `dates.piscine`            |          |   Date    | First day (or month) of the first Piscine  |
| `dates.kickoff`            |          |   Date    | First day (or month) of the first Kickoff  |
| `notes`                    |          |  string   | Can be valid Markdown                      |
| `associations_url`         |          |    URL    | Webpage that lists the campus associations |
| `associations.name`        |          |  string   |                                            |
| `associations.url`         |          |    URL    |                                            |
| `associations.description` |          |  string   |                                            |

**URL**s should always start with `https://` and be valid URLs.

**Continent**s

- Africa
- America
- Asia
- Europe
- Oceania

**Date** an either be:

- `YYYY-MM`
- `YYYY-MM-DD`
- `null`

**Template**:

```yaml
- name: ""
  city: ""
  country: ""
  continent: ""
  url: "https://"
  dates:
    piscine: ""
    kickoff: ""
  notes: ""
  associations_url: "https://"
  associations:
    - name: ""
      url: "https://"
      description: ""
```

### [projects.yaml](data/projects.yaml)

**Links** to add:

- Projects
- Resources
- Testers

**Schema**s:

| Field          | Required |        Type        | Description                    |
| -------------- | :------: | :----------------: | ------------------------------ |
| **project**    |
| `slug`         |    Y     |       string       |                                |
| `name`         |    Y     |       string       |                                |
| `rank`         |    Y     | number (`0` - `6`) |                                |
| **tester**     |
| `name`         |    Y     |       string       | Name of the project            |
| `url`          |    Y     |        URL         |                                |
| `projects`     |    Y     |      string[]      | Slugs of the related projects  |
| `authors.name` |          |       string       |                                |
| `authors.url`  |          |        URL         |                                |
| **resource**   |
| `name`         |    Y     |       string       | Short name for the linked page |
| `url`          |    Y     |        URL         |                                |
| `projects`     |    Y     |      string[]      | Slugs of the related projects  |

**URL**s should always start with `https://` and be valid URLs.

**Template**s:

```yaml
# projects:
  - slug: ""
    name: ""
    rank: 0
```

```yaml
# testers:
  - name: ""
    url: "https://"
    projects:
      - ""
    authors:
      - name: ""
        url: "https://"
```

```yaml
# resources:
  - name: ""
    url: "https://"
    projects:
      - ""
```

## Updating your PR

A lot of times, making a PR (Pull Request) adhere to the standards above can be difficult. If the maintainers notice anything that we'd like changed, we'll ask you to edit your PR before we merge it. There's no need to open a new PR, just edit the existing one. If you're not sure how to do that, here is a guide on the different ways you can update your PR so that we can merge it.

## Issues

We’re using Issues to host conversations that focus on the contents of this project.

If it’s within your possibilities, we highly encourage you to consider contributing with a [PR](#proposing-changes) instead.

Compare the use cases at the beginning of this file with the ones of [Discussions](#discussions) before proceeding to open a new issue.

## Discussions

We’re using Discussions as a place to connect with other members of our community. We hope that you:

- Ask questions you’re wondering about.
- Share ideas.
- Engage with other community members.
- Welcome others and are open-minded.

If you need to discuss something which directly affects the contents of this project, consider opening an [issue](#issuses) instead.

## License

By contributing to `awesome-42`, you agree that your contributions will be licensed under the CC0 1.0 Universal License. Read the [license file](license.md) for more information.
