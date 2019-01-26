---
layout: post
date: 2019-01-23
categories: [changelog]
tags: [netlify gatsby experiment]
revision: 1
title: "Building Richsoni.com with Netlify"
hero: 
---

[Netlify] is gaining popularity as an alternative to [Github Pages] for hosting static sites.
One of my first posts on this site, '[How I Use Github Pages to Host My Blog]' documented my experience using [Github Pages] to host my site.
That was back in 2013, and a lot has changed since then both on this site, and in technology offerings.

In this post, I am going to work through launching a parallel build of my site on [Netlify].
This will allow me to evaluate it as an alternative to hosting via Github pages.

# Initial Deploy

I followed [A Step-by-Step Guide: Deploying on Netlify], which got my site up with only one small hiccup:

## Cannot Resolve Module

My first builds spit out this error:

```
9:52:49 PM:   Error: ./src/pages/posts.tsx
9:52:49 PM:   Module not found: Error: Can't resolve '../components/content/' in '/opt/build  /repo/src/pages'
9:52:49 PM:   resolve '../components/content/' in '/opt/build/repo/src/pages'
```

Indeed my `posts.tsx` looked like this:
```
//./src/pages/posts.tsx
import Content from '../components/content/'
```

While the filesystem looked like this:
```
$ ls src/components/
AlbumArtwork    FixedMenu       Logo            Table
AlbumMediaCard  Footer          MailingListHalf Tabs
BaseMeta        Half            MenuToggle      disqus
Breadcrumbs     LatestRelease   OverlayMenu
Content         Layout          ResponsiveMenu
EventIndex      LocationMap.tsx SocialButton
```

Note the casing difference.  For some reason my machine allowed this casing mismatch, but Netlify did not.

This issue took me a while to identify.  Here are some possible prevention tactics:
[] Typescript: [file-name-casing] rule would prevent, and automatically fix these issues in the future
[] Using the [netlify-build-image] to develop could have identified this issue more quickly

# The Site

The site is located here: https://vigilant-wiles-695009.netlify.com/

# Developing with the netlify-build-image

It seemed valuable to [netlify-build-image] seemed to have a lot of benefits to me.  So, I decided to explore that option.

## Setup
This also was pretty simple.  I followed the [Testing Locally](https://github.com/netlify/build-image#testing-locally) instructions, and they made sense, except for one confusing point:

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
Cloning into '/opt/buildhome/repo'...
done.
Installing dependencies
Attempting node version '9.11.2' from .node-version
Downloading and installing node v9.11.2...
Downloading https://nodejs.org/dist/v9.11.2/node-v9.11.2-linux-x64.tar.xz...
Now using node v9.11.2 (npm v5.6.0)
Started restoring cached node modules
Finished restoring cached node modules
Started restoring cached yarn cache
Finished restoring cached yarn cache
Installing yarn at version 1.3.2
Installing Yarn!
> Downloading tarball...
yarn install v1.3.2
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
yarn run v1.3.2
$ gatsby build
... (gatsby doin' its thang)
success Building static HTML for pages — 2.202 s — 294/294 387.20 pages/second
info Done building in 31.159 sec
Done in 31.34s.
Caching artifacts
Started saving node modules
Finished saving node modules
Started saving yarn cache
Finished saving yarn cache
Cached node version v9.11.2
```

### Reproducing the error

One thing to note from the README for [netlify-build-image] is the code to be tested needs to be committed tk.

[Netlify]: https://www.netlify.com/
[A Step-by-Step Guide: Deploying on Netlify]: https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/
[Github Pages]: https://pages.github.com/
[file-name-casing]: https://palantir.github.io/tslint/rules/file-name-casing/
[netlify-build-image]: https://github.com/netlify/build-image

