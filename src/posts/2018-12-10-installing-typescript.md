---
layout: post
date: 2019-12-10
categories: [changelog]
tags: [gatsby typescript]
revision: 1
title: "Installing Typescript on richsoni.com"
hero: /images/posts/gatsby-logo.jpg
---

I recently upgraded [richsoni.com] to [Gatsby Version 2.0], A previous post, '[Upgrading richsoni.com To Gatsby 2]', chronicles that experience.

The main driver behind this upgrade was alleviate issues I was having with adding [Typescript] to the project.
As I mentioned in '[Upgrading richsoni.com To Gatsby 2]', I had the following assumption:
> 'However, my interest was piqued this week, after a few murky attempts at installing [gatsby-plugin-typescript](https://www.npmjs.com/package/gatsby-plugin-typescript/).
> It turns out that [Typescript] is bundled by default in Gatsby V2, making [gatsby-plugin-typescript](https://www.npmjs.com/package/gatsby-plugin-typescript/) unnecessary.
> This was enough reason for me to perform the update.
> However, to my disappointment, this was not the case.' ~ From '[Upgrading richsoni.com To Gatsby 2]'

This assumption was false, despite the [Gatsby Version 2.0] Release notes, mentioning [Typescript] support:
> Babel 7
> Babel helps ensure the JavaScript you write works across different browsers (including older versions of Internet Explorer).
> 
> The upgrade brings:
> 
> Improved build speed
> Experimental support for automatic polyfilling See also our docs for this feature
> **Support for more syntax e.g. TypeScript and JSX Fragments**
> ~ [Gatsby Version 2.0] Release Notes


I ended up repeating many of the steps I attempted before [Upgrading richsoni.com To Gatsby 2], and ran into many of the same errors😢

But, at last I finally got everything working the way I expected, and my site is ready for its [Typescript] conversion.

Since this was such an [Odyssey], I decided to outline the changes required in my repository.
Hopefully, any other brave souls jettisoned on this journey will heed this advice, and save themselves the pain and sorrow.

**At the end of this post, I give my recommended steps, hopefully it will save you from the obstacles I faced.**

#😱 Step 1: Hey Gatsby, I'm A Typescript File Now!

Since I thought [Gatsby Version 2.0] natively supported [Typescript], my first thought was to a file, and confirm that [Typescript] was working properly.

## ⚖ Obstacle 1: There are right and wrong files to choose

The first file I tried to convert was `src/pages/index.js`.
I abandoned this strategy because I realized converting this file was introducing a lot of change.

Instead, I searched for a file with the following attributes:
1. Not React
2. No Dependencies
3. Short

The file I decided to use was `src/util/data.js`, a set of basic data transform functions:

```
$ mv src/util/data.{js,tsx}
$ cat src/util/data.tsx

export const eventsWithSetlist = (events) => {
  return events
    .edges
    .map((e) => e.node)
    .filter((e) => e.frontmatter.setlist)
};

export const eventsBySong = (events, songs) => {
  return eventsWithSetlist(events)
  .reduce((songs, event) => {
    (event.frontmatter.setlist || []).map((song) => {
      if(!songs[song]) { songs[song] = [] }
      songs[song].push(event.fields.date)
    });
    return songs;
  }, {});
}

export const eventsWithSong = (events, song) => {
  return events
    .edges
    .filter((event) => event.node.frontmatter.setlist)
    .filter((event) => event.node.frontmatter.setlist.includes(song));
}

export const nodesByBasename = (collection) => {
  return collection.edges.map((e) => e.node).reduce((nodesByBasename, node) => {
    return {...nodesByBasename,
      [node.fields.basename]: node,
    };
  }, {})
};
```

I chose this file because of its size, and lack of dependencies.

## 👍🏻 Obstacle 2: LGTM

Running `gatsby-develop`, with my newly saved `data.tsx` generated errors.
This was expected, since the code was not converted to [Typescript].

However, I was faced with **absolutely 0 [Typescript] errors**.

After some digging around the internet, I found this comment in the 
I saw this listed in the `caveats` section of the README for [gatsby-plugin-typescript]:

> This plugin uses babel-plugin-transform-typescript to transpile typescript.
> **It does not do type checking.**
> Also since the TypeScript compiler is not involved, the following applies:  
> ...

# ✅ Step 2: Check Please!

Its not very useful to write typescript, and have zero errors shown.

I found this plugin: [gatsby-plugin-typescript-checker].
The README, for that plugin states:
> gatsby-plugin-typescript adds TypeScript transpilation but not type checking.
> This plug adds fork-ts-checker-webpack-plugin to Gatsby **to display type errors in the browser and the command line**.

Sounds Great! So I followed the installation steps in the README:

### Install Plugins

```
$ yarn add gatsby-plugin-typescript gatsby-plugin-typescript-checker
```

### Update gatsby-config.js:

```
plugins: [
  'gatsby-plugin-typescript',
  'gatsby-plugin-typescript-checker',
```

## 😕 Obstacle 3: Typescript?

After installing [gatsby-plugin-typescript-checker], I was faced with a new error:

```
error Plugin gatsby-plugin-typescript-checker returned an error
  Error: Cannot find module 'typescript'
```

#### Add Typescript

This error was resolved by simply adding [Typescript] as a dependency:

```
$ yarn add typescript
```

But, `gatsby-develop` was still confused:
```
error UNHANDLED REJECTION
  Error: Cannot find "tsconfig.json" file. Please check webpack and Fork  TsCheckerWebpackPlugin configuration.
  Possible errors:
    - wrong `context` directory in webpack configuration (if   `tsconfig` is not set or is a relative path in fork plugi  n configuration)
    - wrong `tsconfig` path in fork plugin configuration (sh  ould be a relative or absolute path)
```

Since I have no experience with creating a `tsconfig.json` file, I copied one from [gatsby-starter-typescript-plus]:
```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "esnext",
    "jsx": "preserve",
    "lib": ["dom", "es2015", "es2017"],
    "strict": true,
    "noEmit": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "removeComments": false,
    "preserveConstEnums": true
  },
  "include": ["./src/**/*"]
}
```

## 🎉 Voilà

Now `gastby-develop` was providing useful typescript errors:

```
27:71 Parameter 'node' implicitly has an 'any' type.
    25 |
    26 | export const nodesByBasename = (collection) => {
  > 27 |   return collection.edges.map((e) => e.node).reduce((nodesByBasename, node) => {
       |                                                                       ^
    28 |     return {...nodesByBasename,
    29 |       [node.fields.basename]: node,
    30 |     };
ℹ ｢wdm｣: Failed to compile.
```

# ✍️Step 3: Typescriptify

The most naive way to typscriptify this file is to simply add `any` types to all the variables:

```
+ export const eventsWithSetlist = (events: any) => {
+    .map((e: any) => e.node)
+    .filter((e: any) => e.frontmatter.setlist)

+ export const eventsBySong = (events: any) => {
+   .reduce((memo: any, event: any) => {
+     (event.frontmatter.setlist || []).map((song: any) => {

+ export const eventsWithSong = (events: any, song: any) => {
+     .filter((event: any) => event.node.frontmatter.setlist)
+     .filter((event: any) => event.node.frontmatter.setlist.includes(song))

+ export const nodesByBasename = (collection: any) => {
+   return collection.edges.map((e: any) => e.node).reduce((memo: any, node: any) => {
```

And, then Gatsby was happy!

# My Recommendation

To add [Typescript] to a [Gatsby Version 2.0] project, do the following:

### Step 1: Install Dependencies
```
$ yarn add gatsby-plugin-typescript gatsby-plugin-typescript-checker typescript`
```

### Step 2: Setup a tsconfig

Either run `tsc --init`, or copy an existing `tsconfig.json` from another project.

I took mine from [gatsby-starter-typescript-plus]:
```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "esnext",
    "jsx": "preserve",
    "lib": ["dom", "es2015", "es2017"],
    "strict": true,
    "noEmit": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "removeComments": false,
    "preserveConstEnums": true
  },
  "include": ["./src/**/*"]
}
```

### Step 3: Update Gatsby Config
```
plugins: [
  'gatsby-plugin-typescript',
  'gatsby-plugin-typescript-checker',
```

### Caveats

I am pretty sure I will have to add several more packages as I typescriptify my codebase.
When this happens I will post an update.

[richsoni.com]:https://richsoni.com
[Gatsby Version 2.0]: https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/
[Upgrading richsoni.com To Gatsby 2]: https://www.richsoni.com/posts/2018-11-29-gatsby-2-upgrade/
[Typescript]: https://www.typescriptlang.org/
[Odyssey]: https://en.wikipedia.org/wiki/Odyssey
[gatsby-plugin-typescript]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-typescript
[gatsby-plugin-typescript-checker]: https://www.gatsbyjs.org/packages/gatsby-plugin-typescript-checker/?=check
[gatsby-starter-typescript-plus]: https://github.com/resir014/gatsby-starter-typescript-plus
