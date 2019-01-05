---
layout: post
date: 2019-01-03
categories: [changelog]
tags: [gatsby typescript]
revision: 1
title: "Naive Typescript Conversion on RichSoni.com: Pass 3"
hero: /images/posts/gatsby-logo.jpg
---


This is the third pass of converting this site to Typescript.

### Previous Posts
* [Installing Typescript on RichSoni.com]
* [Typescript Conversion Pass 1]
* [Typescript Conversion Pass 2]

# Experiment Parameters

1. Convert all javascript files in `src/components` to typescript
2. Must include: a post with content from this document

# Strategy

This was a simple exercise, I renamed all of the files from `jsx` -> `tsx` and `js` -> `ts`.
Then I ran my server, and fixed all of the errors.

# Outcome

```
$ ./scripts/typescript-vs-javascript
68% (28 Typescript / 13 Javascript)
```

## Summary Of Changes

```
$ git diff --stat master
 package.json                                               |  1 +
 src/components/Content/{index.jsx => index.tsx}            |  4 ++--
 src/components/EventIndex/{index.js => index.tsx}          |  7 +++---
 src/components/FixedMenu/{index.js => index.tsx}           | 15 ++++++++-----
 src/components/Footer/{index.js => index.tsx}              |  2 +-
 src/components/LatestRelease/{index.jsx => index.tsx}      | 38 ++++++++++++++++++++++----------
 src/components/Layout/{index.js => index.tsx}              | 12 +++++++---
 src/components/Logo/{index.js => index.tsx}                |  6 ++---
 src/components/MailingListHalf/{index.js => index.tsx}     |  2 +-
 src/components/MenuToggle/{index.js => index.tsx}          | 22 +++++++++++--------
 src/components/OverlayMenu/{index.js => index.tsx}         |  4 ++--
 src/components/ResponsiveMenu/{index.js => index.tsx}      | 16 +++++++++-----
 src/components/SocialButton/{index.js => index.tsx}        | 27 +++++++++++------------
 src/components/Table/index.tsx                             | 11 ++++++----
 src/posts/2019-01-03-naive-typescript-conversion-pass-3.md | 76 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 yarn.lock                                                  |  5 +++++
 16 files changed, 183 insertions(+), 65 deletions(-)
```

## Learnings


I learned a few important things during this phase of the conversion.
I expect these learnings to be useful in future passes.

### JSX Requires the proper extension in Typescript

```
src/components/Footer/index.ts(8,5): error TS1005: '>' expecte
```

This was an error I saw a lot because I used to only use `.js` for `jsx` files.

### Pure Function Components

I write a lot of components in a pure functional form:
```
export default (props) =>{
 return <div>{props.children}</div>
}
```

React comes with a special typing for these functions:
```
type Props = {
  children: JSX.Element,
}
const Component: React.SFC<Props> = (props) => {
  return <div>{this.props.children}</div>
}
export default Component
```

### Optional Attributes

I used a lot of optional attributes on props.
To make an attribute optional, add a `?` after its key:

```
type Props = {
  requiredProp: boolean,
  optionalProp?: boolean,
}
```

## Improvements

### Vim Plugin

I added a vim plugin called [tsuquyomi], which leverages the TSServer to do a lot of neat things.
In this case, I used the quickfix list population facility to quickly navigate to failing `tsc` lines.

### Error Catching

A few significant type errors where caught by Typescript in this commit.
One was a component expecting a boolean value for a prop, and a string was being passed.

A few unneeded props where detected as well.


# Conclusion

At this point I am starting to get value out of using Typescript.  The code quality of the project has improved, and my productivity has potential gains through leveraging omnicomplete.

One thing I would like to note is that during this pass, I started to flesh out more types when I was feeling inspired.
I can see how writing new components will be easier with Typescript for sure.


[Artem Sapegin's CSSModules with Typescript Article]: https://medium.com/@sapegin/css-modules-with-typescript-and-webpack-6b221ebe5f10
[Angular University's Type Definitions Article]: https://blog.angular-university.io/typescript-2-type-system-how-do-type-definitions-work-in-npm-when-to-use-types-and-why-what-are-compiler-opt-in-types/
[Stackoverflow question on readonly state]: https://stackoverflow.com/questions/51074355/cannot-assign-to-state-because-it-is-a-constant-or-a-read-only-property
[Typescript Conversion Pass 1]: /posts/2018-12-18-naive-typescript-conversion-pass-1
[Typescript Conversion Pass 2]: /posts/2018-12-19-naive-typescript-conversion-pass-2
[Installing Typescript on RichSoni.com]: /posts/2018-12-10-installing-typescript
[tsuquyomi]: https://github.com/Quramy/tsuquyomi/
