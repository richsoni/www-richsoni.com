---
layout: post
date: 2019-01-24
categories: [opinions]
tags: [lerna storybook]
revision: 1
title: "Comparing Lerna-Storybook Architectures"
hero: /images/posts/lerna-storybook.jpg
---

# ⚔ Conflicting Philosophies

When creating a [Lerna] project with [React] and [Storybook], there are two places in which [Storybook] can live:
* As a package managed by [Lerna]
* As a sibling to [Lerna] in the project root

There seems to be conflicting philosophies within the community when it comes to these two approaches:
* *Root* - [Guide — The Multi CRA Lerna Monorepo]
* *Root* - [Dohxis/lerna-starter-ts]
* *Package* - [FelixKuehl/cra-monorepo]
* *Package* - [nareshbhatia/lerna-workspaces-react-ts]

While I am only including 2 of each, *including [Storybook] in the project root is way more popular*.

I created [storybook-architecture-demo] which contains both architectures, so they can be compared side by side:
* [storybook-as-package] - [Lerna] project with [Storybook] installed at `packages/storybook`
* [storybook-in-root] - [Lerna] project with [Storybook] installed at `./`

# 🤓 My Take

While the method shown in [storybook-in-root] is more popular, I cannot figure out why.
*I see no benefit of architecting in with [Storybook] living in the project root*.

*Conversely, the [storybook-as-package] strategy has many advantages over [storybook-in-root]*

## 💅 Less Clutter in Root

The root folder of [storybook-as-package] has one concern ([Lerna]), while [storybook-in-root]([Lerna], [Storybook]).
This difference makes the [storybook-in-root] file structure more disjointed:

```
$ ls -la storybook-as-package
total 1448
drwxr-xr-x     8 rsoni  domain users     272 Jan 24 19:54 .
drwxr-xr-x     7 rsoni  domain users     238 Jan 24 19:53 ..
-rw-r--r--     1 rsoni  domain users     111 Jan 24 18:07 lerna.json
drwxr-xr-x  1485 rsoni  domain users   50490 Jan 24 19:10 node_modules
-rw-r--r--     1 rsoni  domain users     296 Jan 24 19:06 package.json
drwxr-xr-x     5 rsoni  domain users     170 Jan 24 18:34 packages
-rw-r--r--     1 rsoni  domain users     366 Jan 24 19:54 readme.md
-rw-r--r--     1 rsoni  domain users  727596 Jan 24 19:07 yarn.lock

$ ls -la storybook-in-root
total 1448
drwxr-xr-x    10 rsoni  domain users     340 Jan 24 19:55 .
drwxr-xr-x     7 rsoni  domain users     238 Jan 24 19:53 ..
drwxr-xr-x     4 rsoni  domain users     136 Jan 24 19:32 .storybook
-rw-r--r--     1 rsoni  domain users     111 Jan 24 19:21 lerna.json
drwxr-xr-x  1485 rsoni  domain users   50490 Jan 24 19:32 node_modules
-rw-r--r--     1 rsoni  domain users     618 Jan 24 19:32 package.json
drwxr-xr-x     4 rsoni  domain users     136 Jan 24 19:21 packages
-rw-r--r--     1 rsoni  domain users     373 Jan 24 19:55 readme.md
drwxr-xr-x     3 rsoni  domain users     102 Jan 24 19:32 src
-rw-r--r--     1 rsoni  domain users  727596 Jan 24 19:32 yarn.lock
```

In the `storybook-as-package` example the storybook setup script functions better:

This pollution also extends to the `package.json`:

```
$ cat storybook-as-package/package.json
{
  "name": "root",
  "private": true,
  "scripts": {
    "build:all": "lerna run build --parallel",
    "install:all": "lerna bootstrap && lerna link",
    "start:all": "lerna run start --parallel"
  },
  "devDependencies": {
    "lerna": "^3.10.5"
  },
  "workspaces": [
    "packages/*"
  ]
}

$ cat storybook-in-root/package.json
{
  "name": "root",
  "private": true,
  "scripts": {
    "build:all": "lerna run build --parallel",
    "install:all": "lerna bootstrap && lerna link",
    "start:all": "lerna run start --parallel",
    "storybook": "start-storybook -p 9009",
    "build-storybook": "build-storybook"
  },
  "devDependencies": {
    "lerna": "^3.10.5",
    "@storybook/react": "^4.1.11",
    "@storybook/addon-actions": "^4.1.11",
    "@storybook/addon-links": "^4.1.11",
    "@storybook/addons": "^4.1.11",
    "@babel/core": "^7.2.2",
    "babel-loader": "^8.0.5"
  },
  "workspaces": [
    "packages/*"
  ],
  "dependencies": {}
}
```

*For onboarding new developers to the project, keeping things simple is a huge advantage.*
*The less complexity the better.*

### 📡 Dependency Management

Since [Storybook] is managed by the root `package.json` in [storybook-in-root], commands like `lerna bootstrap` and `lerna link` do not work.

When [Storybook] is managed by [Lerna], `peerDepenencies` (React, Flow, Typescript), can be properly resolved.

Additionally, [storybook-as-package] mimicks real work imports better thank [storybook-in-root]:

```
$ cat storybook-in-root/src/stories/index.js | grep ExternalComponent
import ExternalComponent from "../../packages/external-component/dist/index.es";

$ cat storybook-as-package/packages/storybook/src/stories/index.js | grep ExternalComponent
import ExternalComponent from "@lerna-storybook-demo/external-component";
```

### 🏠 Local Development

With the [storybook-as-package] architecture, [Lerna] can serve [Storybook], a [React] server, and build an External Library all in one `start` command: `"start:all": "lerna run start --parallel"`.

With [storybook-in-root], a separate `yarn storybook` server is required.

#  ✌️Conclusion

*I see no reason to go with [storybook-in-root]*.  There are no apparent advantages it has over [storybook-as-package].  While [storybook-as-package] has many over [storybook-in-root].

[Lerna]: https://lernajs.io/
[React]: https://reactjs.org/
[Storybook]: https://storybook.js.org
[storybook-architecture-demo]: https://github.com/richsoni/lerna-storybook-architecture-demo/tree/master/storybook-as-package
[Guide — The Multi CRA Lerna Monorepo]: https://itnext.io/guide-react-app-monorepo-with-lerna-d932afb2e875
[Build your own React Component library with lerna and storybook]: https://codeburst.io/build-your-own-react-component-library-with-lerna-and-storybook-53298b186760
[Dohxis/lerna-starter-ts]: https://github.com/Dohxis/lerna-starter-ts
[FelixKuehl/cra-monorepo]: https://github.com/FelixKuehl/cra-monorepo
[nareshbhatia/lerna-workspaces-react-ts]: https://github.com/nareshbhatia/lerna-workspaces-react-ts
[storybook-as-package]: https://github.com/richsoni/lerna-storybook-architecture-demo/tree/master/storybook-as-package
[storybook-in-root]: https://github.com/richsoni/lerna-storybook-architecture-demo/tree/master/storybook-in-root
