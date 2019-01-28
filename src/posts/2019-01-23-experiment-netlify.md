---
layout: post
date: 2019-01-23
categories: [changelog]
tags: [netlify gatsby experiment]
revision: 1
title: "Building Richsoni.com with Netlify"
hero: /images/posts/2019-01-28-netlify-richsoni.png
---

 # Netlify

 **_[Netlify]: "An all-in-one workflow that combines global deployment, continuous integration, and automatic HTTPS. And that’s just the beginning"_**

[Netlify] has been a popular static site hosting provider since around 2016 See (  
  - [Ask HN: What free or low-cost static site hosting do you use most?]
  - [Static website hosting: who's fastest? AWS, Google, Firebase, Netlify or GitHub?]
  - [What is the best static website hosting provider?]

); 

#⚔ Github Pages vs. Netlify

This site, has been hosted on [Github Pages] since 2013 (_See '[How I Use Github Pages to Host My Blog]'_).
I am currently satisfied with using it as a hosting option for a site of this scale.
However, some more complex projects may require the more sophisticated features offered by [Netlify].

These features are outlined here: _'[GITHUB PAGES VS. NETLIFY]: Netlify is the upgrade you\'re looking for'_:

<table>
  <thead> <tr><th align="center"></th> <th align="center">GithubPages</th><th align="center">Netlify</th> </tr> </thead> 
<tbody>
<tr>
<td align="center">Build Limits</td>
<td align="center">10 Builds per hour</td>
<td align="center">3 Builds per minute</td>
</tr>

<tr>
<td align="center">1-click Rollbacks</td>
<td align="center">❌</td>
<td align="center">✅</td>
</tr>

<tr>
<td align="center">Asset Optimizations</td>
<td align="center">❌</td>
<td align="center">✅</td>
</tr>

<tr>
<td align="center">Form Handling</td>
<td align="center">❌</td>
<td align="center">✅</td>
</tr>

<tr>
<td align="center">Deploy Previews</td>
<td align="center">❌</td>
<td align="center">✅</td>
</tr>

<tr>
<td align="center">Continuous Deployment</td>
<td align="center">❌</td>
<td align="center">✅</td>
</tr>

<tr>
<td align="center">Custom Rewrites &amp; Redirects</td>
<td align="center">❌</td>
<td align="center">✅</td>
</tr>

<tr>
<td align="center">Compatible w/All Static Site Generators</td>
<td align="center">❌</td>
<td align="center">✅</td>
</tr>

<tr>
<td align="center">Prerendering</td>
<td align="center">❌</td>
<td align="center">✅</td>
</tr>

<tr>
<td align="center">Split Testing</td>
<td align="center">❌</td>
<td align="center">✅</td>
</tr>

<tr>
<td align="center">Lambda Functions Integration</td>
<td align="center">❌</td>
<td align="center">✅</td>
</tr>
</tbody>
</table>

Given the potential to use these features in other projects, I decided to give [Netlify] a whirl 🌬.

#🛳 Initial Deploy

[A Step-by-Step Guide: Deploying on Netlify] outlines a straightforward process for deploying a site to Netlify.
This article sufficed for me, except for one small hiccup I ran into when Netlify tried to build my site.

## Cannot Resolve Module

My first build spit out this error:
```
9:52:49 PM:   Error: ./src/pages/posts.tsx
9:52:49 PM:   Module not found: Error: Can't resolve '../components/content/' in '/opt/build  /repo/src/pages'
9:52:49 PM:   resolve '../components/content/' in '/opt/build/repo/src/pages'
```

Indeed my while `posts.tsx` was looking for a file called `../components/content/`, the file actually was named `../components/Content/`:
```
$ head -n1 src/pages/posts.tsx
import Content from '../components/content/'

$ ls src/components/
AlbumArtwork    FixedMenu       Logo            Table
AlbumMediaCard  Footer          MailingListHalf Tabs
BaseMeta        Half            MenuToggle      disqus
Breadcrumbs     LatestRelease   OverlayMenu
*Content*         Layout          ResponsiveMenu
EventIndex      LocationMap.tsx SocialButton
```

On MacOS this type of casing mismatch is acceptable.  However, the [netlify-build-image] requiers Ubuntu which respects directory casing.
This issue took me a while to identify, so its worth considering prevention options:
[] Typescript: [file-name-casing] rule would prevent, and automatically fix these issues in the future
[] Using the [netlify-build-image] to develop could have identified this issue more quickly

# Deploy Complete!

The site is located here: https://richsoni.netlify.com/

It was that easy!

# Debugging with the netlify-build-image

When researching prevention tactics for the casing mismatch error I faced, I found this library: [netlify-build-image].
The ability to locally build that container, and debug issues seems very valuable to me.
In the past, I have wasted a lot of time by redeploying changing up to the CI server when trying to fix a build.
So, I decided to check [netlify-build-image] out.

## Setup
The instructions for [netlify-build-image] are fairly clear, and simple:
I followed [Testing Locally](https://github.com/netlify/build-image#testing-locally), and pulled the docker image:
```
docker pull netlify/build
```

However, there was one thing that was not clear in the instructions:
*It was not clear that you had to clone the [netlify/build-image] repository*.

I opened a Pull Request (https://github.com/netlify/build-image/pull/252) with the tool to make the instructions more clear.
Hopefully they take the suggestions.

## The Build

Since my build worked on Netlify, I expected to run `build yarn build` in the container without any issues.
This was inded the case:
```
~/code/github/netlify/build-image(master)------------------------------------------------------------------------
$ ./test-tools/start-image.sh ~/code/personal/richsoni.github.io
buildbot@46702c0a6065:/$ build yarn build
...(Docker running the build)
Caching artifacts
Started saving node modules
Finished saving node modules
Started saving yarn cache
Finished saving yarn cache
Cached node version v9.11.2
```

### Reproducing the error

One thing to note from the README for [netlify-build-image] is the code to be tested needs to be committed tk.
I added the error back:
```
//./src/pages/posts.tsx
import Content from '../components/content/'
```

Voila, the error is reproduced:
```
$ ./test-tools/start-image.sh ~/code/personal/richsoni.github.io       buildbot@50750cae5d63:/$ build yarn build
Cloning into '/opt/buildhome/repo'...
... Other Output
  Error: ./src/pages/posts.tsx
  Module not found: Error: Can't resolve '../components/content/' in '/  opt/buildhome/repo/src/pages'
...
```

# Depending on @netlify/build-image

The [netlify-build-image] is published as a [public npm project](https://github.com/netlify/build-image/blob/master/package.json).

So, it can be added to a project as a `devDependency`:
```
yarn add --dev netlify/build-image
```

# Wrapping `@netlify/build-image`

I wrote two scripts to wrap this library:
```
$ cat script/netlify-build
#!/usr/bin/env bash
if git diff-index --quiet HEAD --; then
  PROJECT_DIR=`pwd`
  : ${1?"Usage: $0 First Argument must be the build command to run in the Netlify Image"}
  cd node_modules/@netlify/build-image
  ./test-tools/test-build.sh $PROJECT_DIR 'yarn run bootstrap_and_build'
else
  echo "Can only run this command with a clean git directory"
fi

$ cat script/netlify-start-image
#!/usr/bin/env bash
if git diff-index --quiet HEAD --; then
  PROJECT_DIR=`pwd`
  cd node_modules/@netlify/build-image
  ./test-tools/start-image.sh $PROJECT_DIR
else
  echo "Can only run this command with a clean git directory"
fi
```

The way I use them is described in the `package.json`:
```
$ cat package.json | grep 'netlify:build'
  "netlify:build": "./script/netlify-build 'yarn run build'",
  "netlify:start-image": "./script/netlify-start-image"
```

This allows me to interact with the [netlify-build-image] in a few different ways:

```
# Testing the build
$ yarn run netlify:build
=> $ ./script/netlify-build 'yarn run build'
... {OUTPUT}
✨  Done in 406.96s.

# Debugging the build
$ yarn run netlify:start-image
$> build 'yarn run build'
```

[Netlify]: https://www.netlify.com/
[A Step-by-Step Guide: Deploying on Netlify]: https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/
[Github Pages]: https://pages.github.com/
[file-name-casing]: https://palantir.github.io/tslint/rules/file-name-casing/
[netlify-build-image]: https://github.com/netlify/build-image
[Ask HN: What free or low-cost static site hosting do you use most?]:https://news.ycombinator.com/item?id=13021722
[Static website hosting: who's fastest? AWS, Google, Firebase, Netlify or GitHub?]: https://www.savjee.be/2017/10/Static-website-hosting-who-is-fastest/
[What is the best static website hosting provider?]: https://www.slant.co/topics/2256/~best-static-website-hosting-provider
[GITHUB PAGES VS. NETLIFY]: https://www.netlify.com/github-pages-vs-netlify/
[How I Use Github Pages to Host My Blog]: /posts/2013-12-03-how-i-use-github-pages-to-host-my-blog/
