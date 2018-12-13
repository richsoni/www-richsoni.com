---
layout: post
date: 2018-11-29
categories: [changelog]
tags: []
revision: 2
title: "Upgrading richsoni.com To Gatsby 2"
hero: /images/posts/gatsby-logo.jpg
---

This past summer, the codebase for richsoni.com was converted from [Jekyll](https://jekyllrb.com/) to [Gatsby](https://gatsbyjs.org).
A few weeks later, the Gatsby team [announced the release of Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/).  
C'est la vie.

After weeks of migrating data and code from Jekyll to Gatsby, I had no interest in doing an update from Gatsby 1.9 to Gatsby 2.0.
However, my interest was piqued this week, after a few murky attempts at installing [gatsby-plugin-typescript](https://www.npmjs.com/package/gatsby-plugin-typescript/).
It turns out that [Typescript] is bundled by default in Gatsby V2, making [gatsby-plugin-typescript](https://www.npmjs.com/package/gatsby-plugin-typescript/) unnecessary.
This was enough reason for me to perform the update.

# The Update Path

The update itself took a few hours, and was not too painful.
Although some changes where required, and some issues where discovered.

Listed on the [Gatsby V2 Announcement Page](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/) was a link to a [Gatsby V1 to V2 Migration Guide](https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/) the team put together.
During my own update, I found this article to be very helpful and informative.

However, in all honesty, I followed my own update strategy:
1. Upgrade Versions
2.  Fix All Yarn Errors and Warnings
3. Build
4. Fix All Build Errors and Warnings
5. Look At The Page
6. Fix All Visual Errors
7. Go Through [Gatsby V1 to V2 Migration Guide](https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/) to make sure I did not miss anything

There where some hiccups along the way, but I was able to complete the update in about 3 hours.

# Upgrading Versions

The first thing the [Gatsby V1 to V2 Migration Guide](https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/) recommends is [Upgrading The Gatsby Version](https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/#update-gatsby-version)
This was my first thought as well.

### Step 1: Upgrade Gatsby Version

```
yarn upgrade gatsby --latest
```

After running this command, I was challenged with several errors & warnings.
They all alluded to depending on Gatsby V1 instead of V2.
To save some time, I just upgraded everything.

### Step 2: Just Upgrade Everything
```
yarn upgrade --latest
```

After this command, there where much less errors & warnings, but still a few.
I used `yarn outdated` and `yarn check` to investigate:
```
$ yarn check
yarn check v1.10.1
error "ajv#json-schema-traverse@^0.4.1" doesn't satisfy found match of "json-schema-traverse@0.3.1"
error "regenerator-runtime" is wrong version: expected "0.11.1", got "0.10.5"
error "gatsby-plugin-pathdata#gatsby@1.x" doesn't satisfy found match of "gatsby@2.0.59"
error "gatsby#@babel/polyfill#regenerator-runtime@^0.11.1" doesn't satisfy found match of "regenerator-runtime@0.10.5"
warning "chokidar#fsevents#node-pre-gyp@^0.10.0" could be deduped from "0.10.3" to "node-pre-gyp@0.10.3"
error "ajv#json-schema-traverse" is wrong version: expected "0.4.1", got "0.3.1"
warning "eslint#ajv#json-schema-traverse@^0.3.0" could be deduped from "0.3.1" to "json-schema-traverse@0.3.1"
warning "relay-compiler#babel-polyfill#regenerator-runtime@^0.10.5" could be deduped from "0.10.5" to "regenerator-runtime@0.10.5"
error "relay-compiler#babel-runtime#regenerator-runtime@^0.11.0" doesn't satisfy found match of "regenerator-runtime@0.10.5"
warning "table#ajv#json-schema-traverse@^0.3.0" could be deduped from "0.3.1" to "json-schema-traverse@0.3.1"
info Found 4 warnings.
error Found 6 errors.
```

The only module I recognized in `yarn check`'s output was *gatsby-plugin-pathdata*.

## The Unmaintained *gatsby-plugin-pathdata* Library

Its a developers worst nightmare:
* *You are new to a framework*
* *You run into a requirement not described in the 'tutorial'*
* *You find only one plugin does what you need*
* *You realize this plugin is not well maintained*
* *You still lack the knowledge to write your own plugin*
* *You reluctantly add it, hoping that there are no issues*

*Voilà!* You get something like this:
```
error "gatsby-plugin-pathdata#gatsby@1.x" doesn't satisfy found match of "gatsby@2.0.59"
```

I tested the `gatsby develop` command, and it did not complain about that plugin.
At this point, I decided to put *gatsby-plugin-pathdata* off to the side.

**At the end of the migration I created an issue on the Github page for gatsby-plugin-pathdata and continued on with my life: https://github.com/barskern/gatsby-plugin-pathdata/issues/1**

### First Commit

Here are the changes made to the package.json (the first commit of the upgrade):

```
git diff package.json
-  "gatsby": "^1.9.277",
-  "gatsby-link": "^1.6.46",
+  "gatsby": "^2.0.0",
+  "gatsby-link": "^2.0.7",

-  "gatsby-plugin-react-helmet": "^2.0.11",
-  "gatsby-plugin-typography": "^1.7.19",
-  "gatsby-source-filesystem": "^1.5.39",
-  "gatsby-transformer-remark": "^1.7.44",
-  "gatsby-transformer-yaml": "^1.5.18",
+  "gatsby-plugin-react-helmet": "^3.0.3",
+  "gatsby-source-filesystem": "^2.0.10",
+  "gatsby-transformer-remark": "^2.1.14",
+  "gatsby-transformer-yaml": "^2.1.6",
```

# Gatsby Develop

The next thing I tried was to build my site with `gatsby develop`.
This produced an onslaught of errors and warnings.

## React

The first error I saw was this:
```
This dependency was not found:

* react in ./src/pages/index.js
```

I checked the [Gatsby V1 to V2 Migration Guide](https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/#manually-install-react), and it states:
*In v1, the react and react-dom packages were included as part of the gatsby package. They are now peerDependencies so you are required to install them into your project.*

I added `react` `prop-types` and `react-dom`, and some errors and warnings went away.

### Second Commit
```
git diff package.json
+  "prop-types": "^15.6.2",
+  "react": "^16.6.3",
+  "react-dom": "^16.6.3",
```

## ESLint

The next set of warnings I tackled was those which resembled this:
```
Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration.
```

I did not have ESLint installed in my project, so I was confused.
I searched quite a bit, and could find nowhere stating the ESlint was now required.
However, I simply followed the [link from the warning](https://github.com/yannickcr/eslint-plugin-react#configuration), which recommended adding a `.eslintrc`.
The ESlint errors went away!

### Third Commit

```
git diff .eslintrc
+  {
+    "extends": ["eslint:recommended", "plugin:react/recommended"]
+  }
```


# Import GraphQL

With the noise from ESLint gone, I now saw a ton of `graphql` warnings:
```
warning Using the global `graphql` tag is deprecated, and will not be supported in v3.
Import it instead like:  import { graphql } from 'gatsby' in file:
```

I ran a quick vim macro to update all of these:
```
vim `git jump grep graphql`
VIM MACRO: qq}Oimport {graphql} from 'graphql'^C:w^M:argnext^Mq
```

### Fourth Commit

This was many files, all the diffs looked like this:
```
+ import { graphql } from "gatsby"
```

# BoundActionCreators

After the GraphQL warnings where fixed, the only warning left was from *boundActionCreators*:
```
boundActionCreators is deprecated. Please use actions instead. For migration instructions, see https://gatsby.app/boundActionCreators
Check the following files:

archive/2018-08-04/bundle.js
...
```

I did a global search in my repo for *boundActionCreators*, and replaced it with *actions* in `gatsby-node.js`.
I still saw the warning since I skipped the one in the `archive/` folder.
I skipped this file since it was not part of my Gatsby project.
But, it seemed like Gatsby was still picking that file up.

I did some poking around, and found an issue with Gatsby's source.
While my file was not being imported by Webpack, Gatsby was still scanning it for boundActionCreators.
I opened an issue for Gatsby: https://github.com/gatsbyjs/gatsby/issues/10211

Since it did not break anything, I left that warning.

### Fifth Commit

```
diff gatsby-node.js
- exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
-  const { createNodeField } = boundActionCreators;
+ exports.onCreateNode = ({ node, getNode, actions }) => {
+  const { createNodeField } = actions;
- exports.createPages = ({ node, getNode, boundActionCreators }) => {
-  const {createPage, createRedirect } = boundActionCreators;
+ exports.createPages = ({ node, getNode, actions }) => {
+  const {createPage, createRedirect } = actions;
```

# Visit Page

With `gatsby develop` was running smoothly, I loaded http://localhost:8000 in my browser.
The site looked fairly functional, except that the chrome was missing (The Header and Footer).

I remembered seeing a section about this in [Gatsby V1 to V2 Migration Guide](https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/).

## Refactor Layout Components

The guide spells out the changes that need to be made.
Since I only had one layout, and the chrome is in its own wrapper (*Content*) component it was straight forward:
1. Move layouts/index.js to components/Layout/index.js
2. `import Layout from '../components/Layout' in *Content*, and wrap the JSX with it

After this change, my navigation and footer returned.
Upon further visual inspection, all was good with my site.

### Sixth Commit
```
git status
D ./src/layouts
R ./src/layouts/index.js -> ./src/components/Layouts/index.js
M ./src/components/Content/index.js

git diff ./src/components/Content/index.js
+ import Layout from '../Layout'
- return <div>
+ return <Layout>
+   <div>
- </div>
+   </div>
+ </Layout>
```


# Go Through Gatsby V1 to V2 Migration Guide

Now I went through the [Gatsby V1 to V2 Migration Guide](https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/) from start to finish.
Each section was either already complete, or not applicable except one minor improvement to the GraphQL interface.

### Remove Explicit GraphQL Names

[Gatsby V1 to V2 Migration Guide](https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/#explicit-query-names-no-longer-required) states that explicit names are no longer required for GraphQL queries in Gatsby V2.

I updated all of my queries to remove the explicit name, since I am not a fan.

### Seventh Commit

There where several files which had diffs similar to this:
```
git diff
-  query ThisIsExplicitQueryName($slug: String!) {
+  query($slug: String!) {
```

# Conclusions

Overall, I was pleased with the level of effort required for this upgrade.
However, my usage of Gatsby's features is not yet extensive, and I fear future upgrades.
My takeaway is to be weary of adding Gatsby Plugins.

[Typescript]: https://www.typescriptlang.org/
