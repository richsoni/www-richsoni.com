---
layout: post
date: 2018-12-18
categories: [changelog]
tags: [gatsby typescript]
revision: 1
title: "Naive Typescript Conversion on RichSoni.com: Pass 1"
hero: /images/posts/gatsby-logo.jpg
---

# Parameters
1. Merge within: ~1 hour (small amount of work)
2. Must include: a post with content from this document
3. Must include: A commit with some converted Typescript files

# Strategy

Locate all javascript files with no dependencies.

**Motivation**
The files with no dependencies can be quickly converted.


# Outcome

I was able to commit the code in a half hour, and took another half hour to make this write up, pretty meta.
Here is the [The Github Pull Request].

**Coverage Improvement**
2% (1 Typescript / 40 Javascript) → **17% (6 Typescript / 35 Javascript)**

**TSC Tooling**

Added 3 new tsc tasks:

    "tsc:coverage": "./scripts/typescript-vs-javascript 2> /dev/null",
    "tsc:check": "tsc --noEmit",
    "tsc:watch": "tsc --noEmit --watch"
    

The `tsc:coverage` task relies on a new script I wrote:

    #!/usr/bin/env ruby
    
    js = `git ls-files src/ | grep -e 'jsx\\?$' | wc -l`.to_i
    ts = `git ls-files src/ | grep -e 'tsx\\?$' | wc -l`.to_i
    
    puts "#{((ts/(js * 1.0)).round(2) * 100).to_i}% (#{ts} Typescript / #{js} Javascript)"

**Typescript**
There are still only minor benefits from Typescript at this point.  Most of these files only needed to be renamed.  The others just got `any` types added to them, which is pretty simple.



[Installing Typescript on RichSoni.com]: https://www.richsoni.com/posts/2018-12-10-installing-typescript
[The Github Pull Request]: https://github.com/richsoni/www-richsoni.com/pull/2/
