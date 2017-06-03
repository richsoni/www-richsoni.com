---
layout: post
categories: [Productivity, Development]
avatar:   '/blog/posts/images/feet_on_desk.jpg'
hero:   '/blog/posts/images/feet_on_desk.jpg'
tags: [Productivity, Development, Terminal]
blurb: 'Once you start using you will never stop.  Its that good'
title: 'Why You May Be Missing Out If You Dont Use TMUX'
date: 2014-02-04
---

Tmux is one of the [10 skills every developer should master](/10-skills-every-developer-should-master/).
It takes [one week](https://www.bitcast.io/b/tmux-tunes-week-1) to get started, and saves hours of work and frustration.

Tmux is a modern incarnation of the GNU Screen program.
Between the two, tmux has a more active group of developers.
As such, most open tmux bugs are usually fixed faster.
Greater development activity, and added features are why I use tmux over Screen.
However, this article mostly showcases basic features which both technologies include.

Feel free to give either program a try.
Both improve a workflow in essentially the same way.
It's easy to switch between using either program because they are very similar.

# Why use tmux?

Answer the following questions to evaluate if tmux can benefit you:

<div height='1px'></div>
<ul style='list-style:none; border-left: 0px'>
  <li><label style='font-weight:normal'><input type='checkbox'/> I often ssh into another box from the terminal</label></li>
  <li><label style='font-weight:normal'><input type='checkbox'/> I have more than three terminal tabs open on a regular basis</label></li>
  <li><label style='font-weight:normal'><input type='checkbox'/> I like to look at two terminal windows side by side</label></li>
  <li><label style='font-weight:normal'><input type='checkbox'/> I use ( or want to learn ) vi, vim, gvim, or MacVim</label></li>
  <li><label style='font-weight:normal'><input type='checkbox'/> My project workflows are complicated to set up, and should be automated</label></li>
</ul>

If you answered <strong>yes to any</strong> of those questions, then tmux will be useful to you.

1.  It can improve the stability, and increase the execution speed of workflows.
1.  It enables visualization of problems in a new way.
1.  It is easy to install, and works on most \*nix platforms.

# How does it work?

Tmux stands for terminal multiplexer.
> tmux = *t<span style='color:#7f7f7f'>erminal</span> mu<span style='color:#7f7f7f'>ltiple</span>x<span style='color:#7f7f7f'>er</span>*

A terminal multiplexer is a program that can load many terminal windows within one.
Don't let this complex verbiage discourage you!!!
Using tmux is not very complicated, I promise.

The tmux man page (```$ man tmux```) explains the features that tmux offers.
> <span style='color:#7f7f7f'>(tmux) enables a</span> number of terminals <span style='color:#7f7f7f'>to be created,
> accessed, and controlled from a</span> single screen.  <span style='color:#7f7f7f'>tmux may be detached from a
> screen and continue </span> running in the background, <span style='color:#7f7f7f'>then later </span>reattached.

Tmux is a service that runs in the background.
When attached to a tmux session, it enables interaction with the windows it controls.
When the attached shell exits; tmux *detaches*, but remains running in the background.
As such, a separate shell can *reattach* back into the tmux session.
The session will continue in tmux with or without attached users.
Any running programs in the session operate as if they were active the whole time.

Tmux can manage multiple sessions at the same time.
Within each session, any number of windows can be created.
Windows can also be split into both vertical and horizontal panes.
Tmux can be controlled by scripts, and automate repetitive workflow tasks.

**Go Learn It**:
[Skip down to a list of next steps](#WhatToDo) if you are sold on giving tmux a try.

# Use Cases

Here are a few example use cases for tmux.
They highlight some ways that tmux can be used to improve day to day workflows.
Please share your own use cases in the [comments](#Comments) section.

## Debugging

A certain workflow is more efficient with two windows aligned next to each other e.g. code and server, code and console ect.

### Without Tmux

1.  Manually arrange windows next to each other.
1.  During the day resize them, and continually realign them.

### With Tmux

1.  Split the current tmux window into two panes
1.  resize the terminal window, and tmux will proportinally resize the panes

<img class="img-responsive media-object" src='/blog/posts/images/tmux_split.gif' alt="miniature-article">

## SSH

An external box needs to run a long script ( like an install script )

### Without Tmux

1.  SSH into the machine and start the script
1.  Keep the session open because ending it will close all processes, and the script will fail.

### With Tmux

1. SSH into the machine and start tmux
1. Start the script and feel free to disconnect ( on purpose, or accidentally)
1. Later on, ssh back in and attach to the tmux session to check on the progress

<img class="img-responsive media-object" src='/blog/posts/images/tmux_ssh.gif' alt="miniature-article">

## Accidentally Closing A Bunch Of Tabs

There are a bunch of terminal tabs and windows open.
At some point another app needs to be closed.
However, the terminal application gets closed by accident.
Now, the lost terminal windows need to be restored.

### Without Tmux

1. Individually open each tab again, and be extra careful next time

### With Tmux

1. Open a new terminal window and attach to the tmux session, everything is still there.

<img class="img-responsive media-object" src='/blog/posts/images/tmux_accident.gif' alt="miniature-article">

## Morning set up

On a certain project, several tasks need to be completed before work can begin e.g.

```
$ cd project
$ git pull
$ start server
[Open a new tab]
$ cd project
$ start db
[Open a new tab]
$ cd project
$ start console
[Open a new tab]
$ cd project
$ vim .
```

### Without Tmux

1.  Individually open each tab, and run each command in sequence

### With Tmux

1.  Write a tmux script that opens all the tabs, and executes commands in sequence
1.  Meanwhile, go and talk with a buddy about how awesome Bob Dylan is.

<img class="img-responsive media-object" src='/blog/posts/images/tmux_scripted.gif' alt="miniature-article">


# What to do
This article intentionally does not show how to use tmux.
That topic is a bit too long and confusing to condense into a single post.
As such, here is a high level guide of the next steps that can be taken to learn tmux.

**get tmux** before doing anything else.
Install it with a package manager: ```sudo [yum|apt-get|brew] install tmux]```

Then choose one or all of these ways to learn:

1.  [My videos](https://www.bitcast.io/b/tmux-tunes-week-1) which will let you start using tmux immediately, and gradually show more features as time goes on.
1.  Purchase [this book](http://www.amazon.com/gp/product/B00A4I3ZVY/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00A4I3ZVY&linkCode=as2&tag=richsonicom-20) that takes about two weeks to read / get up to speed ( this is how I learned tmux )
1.  Reading `$ man tmux` will get experienced unix users up to speed for free

# Further Reading
1.  [Interview with the author of tmux](http://undeadly.org/cgi?action=article&sid=20090712190402)
1.  Movies:  [tmux Tunes by codriffs](https://www.bitcast.io/b/tmux-tunes-week-1)
1.  Book:  [tmux: Productive Mouse-Free Development](http://www.amazon.com/gp/product/B00A4I3ZVY/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00A4I3ZVY&linkCode=as2&tag=richsonicom-20)
