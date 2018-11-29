---
layout: post
categories: productivity
tags: [technology, productivity, bash]
blurb: 'Once this tool is understood, it provides levels of wizardry to its user'
title: 'Practical Uses For Bash Globbing'
date: 2014-01-14
---

*The first half of this article discusses <a href='#whatGlobbingIs'>What Globbing is</a>, how to <a href='#enableGlobbing'>Enable Globbing</a>, and <a href='#seeGlobbingInAction'>How it works</a>.*
**If you are more experienced feel free to skip to <a href='#theTips'>The Tips</a>**.

# What Globbing Is

Globbing lets you be more ambiguous with the way you specify input to your computer.
To glob an input use the `*` operator in place of more specific text.

Make sure you have globbing enabled in your shell ( See Next Section ) before delving into *<a href='#seeGlobbingInAction'>Seeing globbing in Action</a>* .

<h1 id='enableGlobbing'>Enable Globbing</h1>


By default your bash instance should have an option called globbing enabled.
To check run the following command:

```

$ set -o | grep glob
  noglob      off

```

The examples in this article rely on that option to be set, so make sure globbing is enabled ( `noglob   off` ).
If it says `noglob   on` you will need to enable globbing.
There are two ways to do this.


```

## Temporary Method
$  set -o noglob
$  set -o | grep glob
  noglob      off

```

A more permanent solution is to add this line to your bashrc:

```

shopt -s extglob

```

<h1 id='seeGlobbingInAction'>See Globbing In Action</h1>

To get a feel for how globbing works, just give it a try.

As an example lets use some globbing in my Blog Posts folder:

```

$  echo *
2013-12-02-10-skills-every-developer-should-master.md 2013-12-02-practical-vim.md 2013-12-03-how-i-use-github-pages-to-host-my-blog.md 2013-12-04-the-red-queen.md 2013-12-13-vagabonding.md 2013-12-28-4-stereotypical-technology-users-(starwars-edition).md 2013-12-29-how-to-boost-productivity-with-symlinks.md 2014-01-06-interview-question-which-exit-to-choose.md 2014-01-14-practical-uses-for-bash-globbing.md 2014-vim-tips.txt vimstuff.txt c.txt
```

In the previous example the `*` is expanded to every file in the folder.

```

$ echo 2014*
2014-01-06-interview-question-which-exit-to-choose.md 2014-01-14-practical-uses-for-bash-globbing.md 2014-vim-tips.txt

```

Notice how the glob worked in the previous command.  It told the `echo` command to print all the files that start with `2014`.
<!-- more -->

```

$ echo *.txt
2014-vim-tips.txt vimstuff.txt c.txt

```

Putting the `*` first switches the way the glob works.  Instead of matching the beginning, the command grabs all the files that end with the text after the `*`.

```

$ echo *vim*
2013-12-02-practical-vim.md 2014-vim-tips.txt vimstuff.txt

```

Using a `*` around some text will look for it anywhere in the input.
Notice that the `*` will match `vimstuff.txt`, this shows that the star can match nothing as well as something.

```

$ echo 20*vim*
2013-12-02-practical-vim.md 2014-vim-tips.txt

```

Finally, you can use as many `*`'s as you want to refine your globs.

<h1 id='theTips'>The Tips</h1>

Here are some of my favorite ways to use globbing.
You will find your own unique ways as well, but this will be a good handful to get your feet wet with.

##Perform Filetype Specific Move / Copy

```

$ mv *.txt ~/Documents/Notes
$ mv *.css stylesheets/
$ cp ~/SomeProject/*.html* .
$ ls *.html*
index.html
nav.html.erb
sidebar.html.haml

```

## Grab All Folders
```
$  echo */

```

## Hone in on a file quickly
**This tip is my absolute favorite, and the reason I wrote this article.**

```

$ echo *
2013-12-02-10-skills-every-developer-should-master.md 2013-12-02-practical-vim.md 2013-12-03-how-i-use-github-pages-to-host-my-blog.md 2013-12-04-the-red-queen.md 2013-12-13-vagabonding.md 2013-12-28-4-stereotypical-technology-users-(starwars-edition).md 2013-12-29-how-to-boost-productivity-with-symlinks.md 2014-01-06-interview-question-which-exit-to-choose.md 2014-01-14-practical-uses-for-bash-globbing.md 2014-vim-tips.txt vimstuff.txt c.txt
$ echo *master*
2013-12-02-10-skills-every-developer-should-master.md
$ mv *master* 2014-01-01-skills-every-developer-should-master.md
$ vim *master*
$ rm *master*

```
```

$ ls
jquery-1.0.10.min.js
$ vim *jquery*
```
I USUALLY DON'T EVEN BOTHER TO LS IN THAT CASE

This tip even works for commands like cd.

```

$ cd *ox*
$ pwd
/Users/rich/Dropbox

```

<hr>

That is all I am going to offer up now, but feel free to post your own favorites / discoveries in the comments.
