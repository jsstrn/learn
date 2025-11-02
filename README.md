# learn

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
