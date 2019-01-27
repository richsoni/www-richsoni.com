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
I added the error back:
```
//./src/pages/posts.tsx
import Content from '../components/content/'
```

Voila, the error is reproduced:
```
$ ./test-tools/start-image.sh ~/code/personal/richsoni.github.io       buildbot@50750cae5d63:/$ build yarn build
Cloning into '/opt/buildhome/repo'...
done.
Installing dependencies
Attempting node version '9.11.2' from .node-version
Downloading and installing node v9.11.2...
Downloading https://nodejs.org/dist/v9.11.2/node-v9.11.2-linux-x64.tar.xz...
#                                                                      ####                                                                   #######                                                                ##########                                                             #############                                                          #################                                                      ####################                                                   #######################                                                ##########################                                             #############################                                          ################################                                       ###################################                                    ######################################                                 ##########################################                             ############################################                           ###############################################                        ##################################################                     ####################################################                   ########################################################               ###########################################################            ##############################################################         #################################################################      ####################################################################   ############################################################################################################################################### 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v9.11.2 (npm v5.6.0)
Attempting ruby version 2.3.6, read from environment
Using ruby version 2.3.6
Using PHP version 5.6
Started restoring cached node modules
Finished restoring cached node modules
Started restoring cached yarn cache
Finished restoring cached yarn cache
Installing yarn at version 1.3.2
Installing Yarn!
> Downloading tarball...

[1/2]: https://yarnpkg.com/downloads/1.3.2/yarn-v1.3.2.tar.gz --> /tmp/yarn.tar.gz.MpXOOZlnrV
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:-100    91  100    91    0     0    531      0 --:--:-- --:--:-- --:--:--   535
  0     0    0   608    0     0   1707      0 --:--:-- --:--:-- --:--:--  1707
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:-100  865k  100  865k    0     0   656k      0  0:00:01  0:00:01 --:--:-- 1932k

[2/2]: https://yarnpkg.com/downloads/1.3.2/yarn-v1.3.2.tar.gz.asc --> /tmp/yarn.tar.gz.MpXOOZlnrV.asc
100    95  100    95    0     0   4368      0 --:--:-- --:--:-- --:--:--  4368
  0     0    0   612    0     0   5133      0 --:--:-- --:--:-- --:--:--  5133
100  1027  100  1027    0     0   7102      0 --:--:-- --:--:-- --:--:--  7102
> Verifying integrity...
gpg: Signature made Thu 02 Nov 2017 04:44:10 PM UTC using RSA key ID FD2497F5
gpg: Good signature from "Yarn Packaging <yarn@dan.cx>"
gpg: Note: This key has expired!
Primary key fingerprint: 72EC F46A 56B4 AD39 C907  BBB7 1646 B01B 86E5 0310
     Subkey fingerprint: 6A01 0C51 6600 6599 AA17  F081 46C2 130D FD24 97F5
> GPG signature looks good
> Extracting to ~/.yarn...
> Adding to $PATH...
> We've added the following to your /opt/buildhome/.profile
> If this isn't the profile of your current shell then please add the following to your correct profile:

export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

> Successfully installed Yarn 1.3.2! Please open another terminal where the `yarn` command will now be available.
Installing NPM modules using Yarn version 1.3.2
yarn install v1.3.2
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.4: The platform "linux" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "gatsby > mini-css-extract-plugin > schema-utils > ajv-errors@1.0.0" has unmet peer dependency "ajv@>=5.0.0".
warning "gatsby-plugin-typescript > @babel/preset-typescript@7.1.0" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "gatsby-plugin-typescript > @babel/preset-typescript > @babel/plugin-transform-typescript@7.2.0" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "gatsby-plugin-typescript > @babel/preset-typescript > @babel/plugin-transform-typescript > @babel/plugin-syntax-typescript@7.2.0" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "gatsby-plugin-typescript-checker > fork-ts-checker-webpack-plugin@0.5.0" has unmet peer dependency "tslint@^4.0.0 || ^5.0.0".
warning "gatsby-plugin-typescript-checker > fork-ts-checker-webpack-plugin@0.5.0" has unmet peer dependency "webpack@^2.3.0 || ^3.0.0 || ^4.0.0".
[4/4] Building fresh packages...
warning Your current version of Yarn is out of date. The latest version is "1.13.0" while you're on "1.3.2".
info To upgrade, run the following command:
$ curl -o- -L https://yarnpkg.com/install.sh | bash
Done in 27.33s.
NPM modules installed using Yarn
Started restoring cached go cache
Finished restoring cached go cache

unset GOOS;
unset GOARCH;
export GOROOT='/opt/buildhome/.gimme/versions/go1.10.linux.amd64';
export PATH="/opt/buildhome/.gimme/versions/go1.10.linux.amd64/bin:${PATH}";
go version >&2;

export GIMME_ENV='/opt/buildhome/.gimme/env/go1.10.linux.amd64.env';
go version go1.10 linux/amd64
Installing missing commands
Verify run directory
Executing user command: yarn build
yarn run v1.3.2
$ gatsby build
success open and validate gatsby-configs — 0.010 s
success load plugins — 0.229 s
success onPreInit — 0.747 s
success delete html and css files from previous builds — 0.008 s
success initialize cache — 0.009 s
success copy gatsby files — 0.050 s
success onPreBootstrap — 0.016 s
success source and transform nodes — 1.171 s
success building schema — 0.398 s
success createPages — 0.845 s
success createPagesStatefully — 0.053 s
success onPreExtractQueries — 0.000 s
success update schema — 0.273 s
success extract queries from components — 0.226 s
success run graphql queries — 11.809 s — 294/294 24.90 queries/second
success write out page data — 0.012 s
success write out redirect data — 0.003 s
success onPostBootstrap — 0.003 s

info bootstrap finished - 18.818 s


error Generating JavaScript bundles failed


  Error: ./src/pages/posts.tsx
  Module not found: Error: Can't resolve '../components/content/' in '/  opt/buildhome/repo/src/pages'
  resolve '../components/content/' in '/opt/buildhome/repo/src/pages'
    Parsed request is a directory
    using description file: /opt/buildhome/repo/package.json (relative   path: ./src/pages)
      Field 'browser' doesn't contain a valid alias configuration
      using description file: /opt/buildhome/repo/package.json (relativ  e path: ./src/components/content)
        as directory
          /opt/buildhome/repo/src/components/content doesn't exist
  [/opt/buildhome/repo/src/components/content]
   @ ./src/pages/posts.tsx 7:0-45 156:31-38
   @ ./.cache/async-requires.js
   @ ./.cache/production-app.js

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
Caching artifacts
Started saving node modules
Finished saving node modules
Started saving yarn cache
Finished saving yarn cache
Started saving pip cache
Finished saving pip cache
Started saving emacs cask dependencies
Finished saving emacs cask dependencies
Started saving maven dependencies
Finished saving maven dependencies
Started saving boot dependencies
Finished saving boot dependencies
Started saving go dependencies
Finished saving go dependencies
Cached node version v9.11.2
buildbot@50750cae5d63:/$
```

# Pulling in @netlify/build-image

The [netlify-build-image] project contains a `package.json` which is published to npm.

I was able to add this as a development dependency to my project:
```
yarn add --dev netlify/build-image
```

Then I wrote a script which would execute the netlify build:
```
$ cat script/netlify-build
#!/usr/bin/env bash
DIR=`pwd`
cd node_modules/@netlify/build-image
./test-tools/test-build.sh $DIR
```

Then I added a build command to my package.json:
```
$ cat package.json | grep 'netlify:build'
  "netlify:build": "./script/netlify-build"
```

This allows me to run the build locally:
```
yarn run netlify:build
```

I also created corresponding scripts for starting an image shell:
```
$ cat script/netlify-start-image

#!/usr/bin/env bash
DIR=`pwd`
cd node_modules/@netlify/build-image
./test-tools/start-image.sh $DIR

$ cat package.json | grep 'netlify:start-image'
"netlify:start-image": "./script/netlify-start-image"
```

And a shell can be accessed via:

```
yarn run netlify:start-image
```



[Netlify]: https://www.netlify.com/
[A Step-by-Step Guide: Deploying on Netlify]: https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/
[Github Pages]: https://pages.github.com/
[file-name-casing]: https://palantir.github.io/tslint/rules/file-name-casing/
[netlify-build-image]: https://github.com/netlify/build-image

