---
layout: post
date: 2018-12-19
categories: [changelog]
tags: [gatsby typescript]
revision: 1
title: "Naive Typescript Conversion on RichSoni.com: Pass 2"
hero: /images/posts/gatsby-logo.jpg
---

This is the second pass at my Typescript conversion project.
The first part is chronicled in an older post titled: [Typescript Conversion Pass 1].

# Experiment Parameters
1. Merge within: ~1 hour (small amount of work)
2. Must include: a post with content from this document
3. Must include: A commit with some converted Typescript files

# Strategy

1. Convert files importing only libraries
2. Import files which only import other tsc converted files

# Outcome

```
$ ./scripts/typescript-vs-javascript
46% (19 Typescript / 22 Javascript)
```

## Summary Of Changes

```
$ git diff --stat master
 package.json                                               |   4 +++
 scripts/typescript-vs-javascript                           |   2 +-
 src/components/AlbumArtwork/{index.js => index.tsx}        |   5 ++--
 src/components/AlbumMediaCard/{index.js => index.tsx}      |   6 ++--
 src/components/BaseMeta/{index.js => index.tsx}            |   2 +-
 src/components/Breadcrumbs/{index.jsx => index.tsx}        |   6 ++--
 src/components/Half/index.js                               |  10 -------
 src/components/Half/index.tsx                              |  18 ++++++++++++
 src/components/LatestRelease/{index.js => index.jsx}       |   0
 src/components/{LocationMap.js => LocationMap.tsx}         |   3 +-
 src/components/ResponsiveMenu/{Margin.js => Margin.tsx}    |   0
 src/components/Table/{dateSort.js => dateSort.ts}          |   0
 src/components/Table/{index.js => index.tsx}               |  87 +++++++++++++++++++++++++++++-----------------------------
 src/components/Tabs/index.js                               |  29 --------------------
 src/components/Tabs/index.tsx                              |  37 +++++++++++++++++++++++++
 src/components/disqus/{component.js => component.tsx}      |   0
 src/posts/2018-12-18-naive-typescript-conversion-pass-1.md |   4 +--
 src/posts/2018-12-19-naive-typescript-conversion-pass-2.md | 167 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 src/utils/{momentify.js => momentify.ts}                   |   3 +-
 src/utils/{presenters.js => presenters.ts}                 |   9 +++---
 yarn.lock                                                  |  44 +++++++++++++++++++++++++++--
 21 files changed, 332 insertions(+), 104 deletions(-)
```

## Learnings

I learned a few important things during this phase of the conversion.
I expect these learnings to be useful in future passes.

### Importing Type Definitions

During this excersize, I was faced with a new error:
```Could not find a declaration file for module 'react-image-fallback'. 'node_modules/react-image-fallback/lib/index.js' implicitly has an 'any' type.```

In Typescript, a library is expected to export its Type Definitions.
If these are not present, then the compiler will complain in a way similar to the above.


This is usually resolved by a simple:
```
yarn add '@types/react-image-fallback'
```

[Angular University's Type Definitions Article] notes a few interesting things about custom type definitions.
It's worth a full read, but the relevant parts for this post are:
> This @types scoped package is where we can find a ton of useful type definitions, such as for example the type definitions of node that allow us to use  require for example.  
> ...  
> 
> The @types scope package contains type definitions for a lot of libraries, like Express, Sequelize, JQuery, and many others. So definitively have a look there if you are missing some type definitions, but make sure of two things first:
> 1. check if the package you are using already has types built-in, and if so prefer those
> 2. check if type definitions are already shipped with the compiler, more on this later


This commit required a few Type definitions to be added:

```
$ git diff master -- package.json
diff --git a/package.json b/package.json
index 4560e16..10c70f4 100644
--- a/package.json
+++ b/package.json
@@ -12,6 +12,10 @@
     "tsc:watch": "tsc --noEmit --watch"
   },
   "dependencies": {
+    "@types/react": "^16.7.17",
+    "@types/react-dom": "^16.0.11",
+    "@types/react-helmet": "^5.0.7",
+    "@types/react-image-fallback": "^8.0.0",
     "fs-exists-sync": "^0.1.0",
     "gatsby": "^2.0.0",
     "gatsby-link": "^2.0.7",
```

### Import CSS Modules

In Typescript, CSSModules require some massaging to work.  [Artem Sapegin's CSSModules with Typescript Article] describes why and how to get them working.
He also describes an easy way to bypass Typescript for importing CSSModules:
```
const styles = require('./styles.module.css');
```

In this commit, I went with the simple solution.

### Simple Types In React

React requires its own custom type definitions (`@types/react` and `@types/react-dom`).
Additionally, there where a few other things that needed to be done to convert jsx files.
Consider this example of a simple file taken from the commit:

```
$ git diff master -- src/components/Half/index.tsx
diff --git a/src/components/Half/index.tsx b/src/components/Half/index.tsx
new file mode 100644
index 0000000..d59e551
--- /dev/null
+++ b/src/components/Half/index.tsx
@@ -0,0 +1,18 @@
+import React from "react";
+const styles = require('./styles.module.css');
+
+type Props = {
+  style: any,
+}
+
+type State = {
+
+}
+
+export default class Half extends React.Component<Props, State>{
+  render(){
+    return <section className={styles.half} style={this.props.style}>
+      {this.props.children}
+    </section>
+  }
+}
```

This file defines two simple types: `Props` and `State`.
The `Half` class uses these types in its interface `React.Component<Props, State>`.

### React State

When declaring the immutable state of a React component, some more explicit types are sometimes required.
In these cases I employed this pattern:

```
const initialState = { activeTab: 0 }
type State = Readonly<typeof initialState>
export default class Tabs extends React.Component<Props, State> {
  readonly state: State = initialState
```

This was taken from a [Stackoverflow question on readonly state].

### More Types

In the same file, there are a few new type keywords that I employed:
```
const initialState = { activeTab: 0 }
type State = Readonly<typeof initialState>

type TabsType = {
  content: () => JSX.Element,
  title: string
}

type Props = {
  tabs: Array<TabsType>
}

export default class Tabs extends React.Component<Props, State> {
  readonly state: State = initialState

    render() {
      const activeTab = this.props.tabs[this.state.activeTab];
      {activeTab ? activeTab.content() : ''}
    }
}
```

In the `TabsType` definition, the `content` key declares a `() => JSX.Element` type.
This is because in the `render` method of the `Tabs` component, the `content` prop returns a JSX element.

There is also an Array of `TabsType` specified in the `Props` definition: `Array<TabsType>`

# Conclusion

I am trying to convert my codebase in a few small chunks, with as little change as possible.
This is to set myself a good foundation to explore Typescript.

My hypothesis is that I have two more one hour passes to complete this project.

[Artem Sapegin's CSSModules with Typescript Article]: https://medium.com/@sapegin/css-modules-with-typescript-and-webpack-6b221ebe5f10
[Typescript Conversion Pass 1]: /posts/2018-12-18-naive-typescript-conversion-pass-1
[Angular University's Type Definitions Article]: https://blog.angular-university.io/typescript-2-type-system-how-do-type-definitions-work-in-npm-when-to-use-types-and-why-what-are-compiler-opt-in-types/
[Stackoverflow question on readonly state]: https://stackoverflow.com/questions/51074355/cannot-assign-to-state-because-it-is-a-constant-or-a-read-only-property
