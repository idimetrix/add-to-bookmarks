# **add-to-bookmarks**

The **addToBookmarks** function allows you to add a specified URL to the browser's bookmarks with a given title.

## Installation

You can install the package using **npm**, **yarn**, or **pnpm**.

```bash
pnpm add add-to-bookmarks

yarn install add-to-bookmarks

npm install add-to-bookmarks
```

## Usage

```tsx
import { addToBookmarks } from "add-to-bookmarks";

addToBookmarks("Example.com", "https://example.com");
```

## tsup

Bundle your TypeScript library with no config, powered by esbuild.

https://tsup.egoist.dev/

## How to use this

1. install dependencies

```
# pnpm
$ pnpm install

# yarn
$ yarn install

# npm
$ npm install
```

2. Add your code to `src`
3. Add export statement to `src/index.ts`
4. Test build command to build `src`.
   Once the command works properly, you will see `dist` folder.

```zsh
# pnpm
$ pnpm run build

# yarn
$ yarn run build

# npm
$ npm run build
```

5. Publish your package

```zsh
$ npm publish
```

## test package

https://www.npmjs.com/package/add-to-bookmarks
