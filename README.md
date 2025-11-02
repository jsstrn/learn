# learn

## About

This site lives on [learn.jesstern.com](https://learn.jesstern.com) and a backup server lives on [learn.jsrn.dev](https://learn.jsrn.dev).

## 🏗️ Getting started

Create a new Astro project with the Starlight theme.

```sh
npm create astro@latest -- --template starlight
```

Clone the project and install dependencies.

```sh
npm install
```

Start development server and visit [localhost:4321](http://localhost:4321).

```sh
npm run dev
```

In certain cases, we may want to build and preview the site (e.g. testing the search bar).

First, we run the `build` script and then the `preview` script. We can run both commands sequentially with the logical AND (`&&`) operator.

```sh
npm run build && npm run preview
```

## 🖋️ Writing content

Starlight is made for documentation and they have some neat features to make documentation more readable for the user.

We can add a file tree with the [`FileTree`](https://starlight.astro.build/components/file-tree/) component.

This is an example of using the shorthand for an [Aside](https://starlight.astro.build/components/asides/) component in an `.mdx` file with custom title and icon. Choose from `note`, `tip`, `caution`, or `danger`. Select from the list of available [icons](https://starlight.astro.build/reference/icons/#all-icons).

```txt
:::tip[Did you know?]{icon="heart"}
Astro helps you build faster websites with [“Islands Architecture”](https://docs.astro.build/en/concepts/islands/).
:::
```

We can do interesting things with [code blocks](https://starlight.astro.build/guides/authoring-content/#code-blocks) such as adding highlights and showing line diffs. This can be especially useful for documentating code changes for students.

Another useful feature is to hide content [details](https://starlight.astro.build/guides/authoring-content/#details) to avoid students from viewing solutions until they choose to reveal them. We can also use the [`Tab`](https://starlight.astro.build/components/tabs/) component to achieve this.

When walking through a tutorial, it may be helpful to use the [`Steps`](https://starlight.astro.build/components/steps/) component.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📖 Read the docs

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
