---
layout: post
date: 2019-01-08
categories: [changelog]
tags: [gatsby typescript]
revision: 1
title: "Naive Typescript Conversion on RichSoni.com: Pass 4"
hero: /images/posts/gatsby-logo.jpg
---


This is the fourth pass of converting this site to Typescript.

### Previous Posts
* [Installing Typescript on RichSoni.com]
* [Typescript Conversion Pass 1]
* [Typescript Conversion Pass 2]
* [Typescript Conversion Pass 3]

# Experiment Parameters

1. Convert all javascript files in `src/` to typescript
2. Must include: a post with content from this document

# Strategy

Similarly to [Typescript Conversion Pass 3], I did a simple rename of all `js` files to `ts`:
```
$ git ls-files -- 'src/*.js'
src/pages/albums.js
src/pages/events.js
src/pages/index.js
src/pages/posts.js
src/pages/songs.js
src/pages/subscribe.js
src/templates/albums.js
src/templates/events.js
src/templates/posts.js
src/templates/songs.js

$ rename -n 's/.js$/.ts/' src/**/*.js
'src/pages/albums.js' would be renamed to 'src/pages/albums.ts'
'src/pages/events.js' would be renamed to 'src/pages/events.ts'
'src/pages/index.js' would be renamed to 'src/pages/index.ts'
'src/pages/posts.js' would be renamed to 'src/pages/posts.ts'
'src/pages/songs.js' would be renamed to 'src/pages/songs.ts'
'src/pages/subscribe.js' would be renamed to 'src/pages/subscribe.ts'
'src/templates/albums.js' would be renamed to 'src/templates/albums.ts'
'src/templates/events.js' would be renamed to 'src/templates/events.ts'
'src/templates/posts.js' would be renamed to 'src/templates/posts.ts'
'src/templates/songs.js' would be renamed to 'src/templates/songs.ts'
~/code/personal/richsoni.github.io(master)-------------------------------------rsoni@richsoni 10:13
```

# Outcome

```
$ ./scripts/typescript-vs-javascript
100% (47 Typescript / 0 Javascript)

$ cat ./scripts/typescript-vs-javascript
#!/usr/bin/env ruby

js = `git ls-files src/ | grep -e 'jsx\\?$' | wc -l`.to_i
ts = `git ls-files src/ | grep -e 'tsx\\?$' | wc -l`.to_i

puts "#{((ts/((js + ts) * 1.0)).round(2) * 100).to_i}% (#{ts} Typescript / #{js} Javascript)"
```

## Summary Of Changes

This was the largest set of changes I did throughout this whole project.  It took the longest amount of time by far (I lost track), and there was a lot learned during the process.

### Typescript Files

I converted a total of 18 Typescript files in this commit.  Besides the Gatsby files which are not in Typescript, this is the entirety of my application.

```
$ git diff master --stat -- '*.ts*'
  src/components/Tabs/index.tsx |   2 +-
  src/data/albums.d.ts          |  25 ++++
  src/data/events.d.ts          |  29 +++++
  src/data/graphql.d.ts         |  14 +++
  src/data/locations.d.ts       |  31 +++++
  src/data/remark.d.ts          |  39 +++++++
  src/data/songs.d.ts           |  25 ++++
  src/pages/albums.tsx          |  63 +++++++++++
  src/pages/events.tsx          | 120 ++++++++++++++++++++
  src/pages/index.tsx           |  68 +++++++++++
  src/pages/posts.tsx           | 180 +++++++++++++++++++++++++++++
  src/pages/songs.tsx           | 179 +++++++++++++++++++++++++++++
  src/pages/subscribe.tsx       |  42 +++++++
  src/templates/albums.tsx      |  90 +++++++++++++++
  src/templates/events.tsx      | 201 +++++++++++++++++++++++++++++++++
  src/templates/posts.tsx       |  52 +++++++++
  src/templates/songs.tsx       |  83 ++++++++++++++
  src/utils/data.ts             |  17 ++-
  18 files changed, 1255 insertions(+), 5 deletions(-)
```

### Gatsby Node

I had to alter my `gatsby-node` file to also look for Typescript file extensions:

```
diff --git a/gatsby-node.js b/gatsby-node.js
index e258cd8..cc074e4 100644
--- a/gatsby-node.js
+++ b/gatsby-node.js
@@ -54,7 +54,10 @@ exports.createPages = ({ graphql, actions }) => {
       result.data.allMarkdownRemark.edges.forEach(({ node }) => {
         const type = node.fields.relativeDirectory;
         const url = node.fields.url;
-        const template = path.resolve(`./src/templates/${type}.js`);
+        let template = path.resolve(`./src/templates/${type}.js`);
+        if(!existsSync(template)) {
+          template = path.resolve(`./src/templates/${type}.tsx`);
+        }
         if(existsSync(template))
         {
           //Create Basic Blog Pages
```

### SL script

I created a Script List (sl) script as well in this project in this branch:
```
$ cat scripts/sl
echo '\n------------------------------------------------\n'
echo 'SCRIPTS: \n'
echo "$ cat package.json | jq -r '.scripts | keys | map("yarn "+.) | join("__")' | sed 's/__/\'$'\n/g'"
cat package.json | jq -r '.scripts | keys | map("yarn "+.) | join("__")' | sed 's/__/\'$'\n/g'
echo '\n------------------------------------------------\n'

echo '\n$ tree scripts\n'
tree scripts
echo '\n------------------------------------------------\n'
```

```
$ sl

------------------------------------------------

SCRIPTS:

$ cat package.json | jq -r '.scripts | keys | map(yarn +.) | join(__)' | sed 's/__/\'$'
/g'
yarn build
yarn deploy
yarn develop
yarn serve
yarn start
yarn tsc:check
yarn tsc:coverage
yarn tsc:watch

------------------------------------------------


$ tree scripts

scripts
├── sl
├── typescript-vs-javascript
└── wav-to-aiff.sh

0 directories, 3 files

------------------------------------------------
```

## Learnings

I stepped into this commit confident in my tooling.
This allowed me to focus on learning Typescript.
I looked at each new file as an opportunity to not only make the compiler happy, but to actually implement Typings to the best of my ability.
This required a lot of reading, and fiddling with things.

This pushed me out of my comfort zone, and led me into some really interesting places.

### Design To Type

Converting a file from ESNext to Typescript feels more like adding tests to existing code than changing languages.
This is because the architecture decisions which are made when Typings are considered are similar to those made when testing is considered.
And, just like retroactively testing, retroactively typing can get hairy when boundaries between code are ill defined.

Perhaps the most striking example in my application is the GraphQL interface.

Gatsby's GraphQL API is the main way data is fed into the UI.
Various plugins can be used to provide different data transformations.
Additionally, Gatsby directly injects this data, which I passed around willy nilly.

This becomes problematic when you try to reuse Typings, but GraphQL queries do not match.
Ultimately, I would have architected my application differently if I had considered types from the get go.

As it stands, I have some generic types defined:
```
export interface RemarkFields {
  basename: string,
  url: string,
  date?: string,
  notdate?: string,
}

export interface RemarkNode extends GatsbyNode {
  frontmatter: RemarkFrontmatter,
  fields: RemarkFields,
  html?: string,
  id: string,
}
```

I also have specific types which extend those:

```
export interface LocationNode extends RemarkNode {
  fields: LocationFields,
  name: string,
  website: string,
  address: {
    region: string,
    locality: string,
    country: string,
  }
}
```

### GraphQL Generator is weird

I found this: https://www.camdub.io/2018/04/20/generating-typescript-types-gatsbyjs-graphql-schema/
Which notes that you can automate GraphQL type definition.

I found it confusing and verbose.  And, was happy enough with my hand crafted types, so I abandonded this library.

### Types VS Interfaces
It took me awhile to track down the n00b version of this answer:
Use interfaces until further noted, and interfaces can be extended.

https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types
https://www.typescriptlang.org/docs/handbook/interfaces.html

### Casting Types

One of the things that took me a while to figure out was the proper way to cast types.

Here is my cheat sheet on Typings:

```
type User { active: boolean }
interface Admin extends User { roles: object }
const firstActiveUser = (users: User[]): User { users.find((u) => u.active) }
const firstActiveAdmin: Admin = firstActiveUser(admins) as Admin
```

# Conclusion

This was a great exercise to see a wider swath of use cases in Typescript.
After this exercise I feel compitent enough to architect new features in Typescript.

I also completed the work for my Typescript conversion project in this exercise.

[Artem Sapegin's CSSModules with Typescript Article]: https://medium.com/@sapegin/css-modules-with-typescript-and-webpack-6b221ebe5f10
[Angular University's Type Definitions Article]: https://blog.angular-university.io/typescript-2-type-system-how-do-type-definitions-work-in-npm-when-to-use-types-and-why-what-are-compiler-opt-in-types/
[Stackoverflow question on readonly state]: https://stackoverflow.com/questions/51074355/cannot-assign-to-state-because-it-is-a-constant-or-a-read-only-property
[Typescript Conversion Pass 1]: /posts/2018-12-18-naive-typescript-conversion-pass-1
[Typescript Conversion Pass 2]: /posts/2018-12-19-naive-typescript-conversion-pass-2
[Installing Typescript on RichSoni.com]: /posts/2018-12-10-installing-typescript
[tsuquyomi]: https://github.com/Quramy/tsuquyomi/
