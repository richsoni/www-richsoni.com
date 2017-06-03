---
layout: post
categories: [Productivity, Coding, Technology]
avatar: '/blog/posts/images/typing_small.jpeg'
hero:   '/blog/posts/images/typing.jpg'
tags: [coding, productivity, command line, technology]
blurb: 'We all could use a little extra time.  Any terminal user will benefit from this easy hack'
title: 'How To Boost Productivity With Symbolic Links'
date: 2013-12-29
---

A Symbolic Link (symlink) is essentially a bookmark to a folder on your hard drive.  
They are lightweight and disposeable.  
In my workflow, I have a folder with a collection of symlinks which I use to zip around in the terminal.  

This article will show the 4 steps you need to take to set it up.  

# 1.  The Folder
Make a folder in your home directory.  Mine is called quicklinks.

```

$  cd
$  mkdir quicklinks

```

# 2.  Make A Link
Suppose I want to make a link to the following directory ``~/Code/Projects/Personal/blog``.  
I will call the symlink ``blog``.  

To create a link do the following:  

```
$  cd ~/quicklinks
$  ln -s ~/Code/Projects/Personal/blog post

```

Notice the format of the command.

* ``ln`` stands for link
* ``-s`` means symbolic, so ``ln -s`` means symbolic link
* Then you specify the folder you want to make the link of (``.../blog``)
* Finally give the link a name (``post``)
* ``ln -s target_dir name``


# 3.  Setup an alias

To make this work as efficient as possible, I created an alias ``q``.  
This alias will change into the quicklinks directory and list its contents.  

If you have a ``bashrc``, or some other place to add an alias put it there.  

Add the following:

```

$ nano ~/.bash_profile

```

Once you do that you are good to go, just issue the `q` command.

```

[bash_profile]
alias q='cd ~/quicklinks; ls`

```

[read here](http://coolestguidesontheplanet.com/make-an-alias-in-bash-shell-in-os-x-terminal/) if you need more information on how make an alias / where to put it.

#4.  The final product

Assume we are using the same folder as before (``~/Code/Projects/Personal/blog post``)

### Create the link
```

$  q
docs work carbon testing books lyrics
$  ln -s ~/Code/Projects/Personal/blog post

```

### Using the link
```

$ q
$ cd post

```

# Bonus TIP
  I have some symlinks that are permanent.  
  Others get created to be used just for the current context, and I prune them out later.  
  I use 0-9 to prefix the most used symlinks, so I can quickly move to them.  
  For example, ``0_dotfiles`` is the first symlink I have.  
  When I want to go to my dotfiles I do this:

  ```
   $ q
   $ 0[Tab]  =>   $  0_dotfiles

  ```
