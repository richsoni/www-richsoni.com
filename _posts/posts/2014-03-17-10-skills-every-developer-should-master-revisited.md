---
layout: post
date: 2014-03-25
title: 10 Tools Every Software Developer Should Know, Revisited
categories: Coding
avatar: '/blog/posts/images/Yoda_Luke.jpg'
hero: '/blog/posts/images/Yoda_Luke.jpg'
tags: [coding, self development]
revision: 14
blurb: 'My opinionated must learn list of recommendations'
---

# Invest in your own toolset

After trade school, a mechanic needs to obtain their own set of tools.
Garages only provide big equipment, such as lifts.
Mechanics bring tools that they prefer/can afford to put in their toolbox.

Likewise, software development shops do not dictate required tools to engineers.
Both occupations defer the tool selection to the workers.
These workers must settle between obtaining quality tools and paying affordable prices.
This carte blanche custom promotes mastery of tools that are pervasive throught a career.

## Some tools endure

The lifspan of applicability varies amongst different tools.
Some are brief trends while others linger for decades.
It is wise to strive for mastery of matured tools.
They have proven their value, and will endure long enough for users to reach an expert level.

This article describes 10 software programs that all developers should master.
They are free, applicable to many jobs, and maintained by mature open source projects.
Striving to master these tools will pay off over an entire career.

Here is my shortlist of tools:

1.   [VI](#VI)
2.   [Regular Expressions](#RegularExpressions)
3.   [GNU Tools](#GNUTools)
4.   [Bash](#Bash)
5.   [Javascript](#Javascript)
6.   [Emacs](#Emacs)
7.   [SQL](#SQL)
8.   [Markdown](#Markdown)
9.   [Tmux](#Tmux)
10.  [R](#R)


---

## VI

<div class='image block' style='max-height:100px'>
  <img height='100%' src='/blog/posts/images/wrench.jpg' />
</div>

<blockquote style='clear:none'>
  Mechanics rely on the wrench to adjust and fasten many things.
   Like wrenches, vi enables quick refinement of components.
</blockquote>

Vi is a text editor.
Most \*nix boxes have vi installed.
A vi user can edit files notwithstanding the box's configuration.
Most text editors require additional installation which is sometimes out of scope.

Additionally, vi has a reputation of making text editing breathtakingly efficient.
Because of this, many developers, including myself, use [vim](http://vim.org) ( vi iMproved ) as their day to day editor.

Knowing basic vi commands saves time and frustration when using an alien machine.
At a minimum, learn to insert text, save/quit, and move around.


### Recommended Actions

  1.  beginner: Complete the first quarter of ``` $ vitutor ``` within a terminal.
  1.  [yannesposito wrote the best vim overview post I have ever seen.  It covers everything you need to know](http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/)
  1.  intermediate: <a href="http://www.amazon.com/gp/product/1934356980/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1934356980&linkCode=as2&tag=richsonicom-20">Practical Vim: Edit Text at the Speed of Thought (Pragmatic Programmers)</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=richsonicom-20&l=as2&o=1&a=1934356980" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
 

---

## Regular Expressions

<div class='image block' style='max-height:100px' >
  <img height='100%' src='/blog/posts/images/oi-can.jpg' />
</div>

<blockquote style='clear:none'>
  Oil keeps tools and parts lubricated and reduces friction.
  Regular Expressions serve the same purpose for software developers.
</blockquote>


Regular Expressions, or regexes, are a sophisticated method for pattern matching.
Regex is supported in most tools and programming languages.
Advanced usage of many tools involves the application of regexes.

Regexes improve code quality, and speed up debugging.
Debugging combines finding problems and solving them.
Regex mastery enables brisk detection of code blocks, thus decreasing work time.
In code, regexes are commonly used to determine string format.
For example, the regex: ```^\$?[0-9,]+(\.[0-9]+)?$```, matches any valid US currency.


### Recommended Actions

  1.  [Regular Expressions Cookbook](http://www.amazon.com/gp/product/1449319432/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1449319432&linkCode=as2&tag=richsonicom-20)
     is explicative, but slow for beginners.
  1.  Section 4.2 in [Textmate: Power Editing for the Mac]( http://www.amazon.com/gp/product/097873923X/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=097873923X&linkCode=as2&tag=richsonicom-20 )
     did a better job at explaining regexes.
  1.  (in [vi](#VI)) ```:h usr_27.txt```, is great to remember because its extensive, and [vi](#VI) can always be accessed.

---

## Basic GNU Tools
<div class='image block' style='max-height:100px' >
  <img height='100%' src='/blog/posts/images/toolbox.jpeg' />
</div>

<blockquote style='clear:none'>
  A mechanic's toolbox contains various types of hand tools.
  Some are versitile, while others have niche uses.
  GNU Tools fufill a similar function for developers.
</blockquote>


GNU Tools are often more performant than solutions in proprietary IDEs, or hand made scripts.
They are free, and the source code is publicly available.
This makes GNU Tools stable, performant, available and reliable.

Most simple tasks can be performed with just a chain of GNU commands.
Each GNU command handles a specific task very well.
Many of these small tasks can be combined to complete a larger task.

The following example outputs word frequency of a file:

```

$ cat filename | tr ' ' '\n' | sort | uniq -ci | sort
   ...
   2 mode
   3 prefix
   3 the

```

With some practice, command like this can be easily created.
Here are the steps:  *grab the file; print each word on a single line; alphabetically sort the lines; combine and count duplicates; sort by count*

### Recommended Actions

  1.  All developers must own [Unix Power Tools](http://www.amazon.com/gp/product/0596003307/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0596003307&linkCode=as2&tag=richsonicom-20)
  1.  [In the beginning there was the command line](http://artlung.com/smorgasborg/C_R_Y_P_T_O_N_O_M_I_C_O_N.shtml).
  1.  [Taco Bell Programming](http://widgetsandshit.com/teddziuba/2010/10/taco-bell-programming.html)
  1.  Read man pages, you will be surprised at the breadth of certain commands (e.g. man find; man curl; man grep)


---

## Bash
<div class='image block' style='max-height:100px' >
  <img height='100%' src='/blog/posts/images/jack.jpg' />
</div>

<blockquote style='clear:none'>
 Jacks hoist up vehicles, so they can be inspected from all angles.
 Similarly, bash lets developers view code from different vantage points.
</blockquote>

Bash is part of the GNU project, but is so paramount that it deserves its own section.
The Bash shell proxies between users and commands ( e.g. GNU Tools).
Bash experts perform tasks swiftly and painlessly.

There are many alternatives shells out there.
However, bash's differentiating feature is its prevailence on most \*nix distributions.
As such, all developers benefit from knowing bash even if they use another shell on their machine.

### Recommended Actions

  1.  The [Bash Cookbook](http://www.amazon.com/gp/product/0596526784/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0596526784&linkCode=as2&tag=richsonicom-20)
     teaches both basic and advanced features.

---

## Javascript
<div class='image block' style='max-height:100px' >
  <img height='100%' src='/blog/posts/images/Emergency-tool-kit.jpg' />
</div>

<blockquote style='clear:none'>
 Mechanics carry tools outside the shop in case of a breakdown.
 Javascript is the developers emergency kit.
</blockquote>

Javascript is everywhere.
Javascript consoles can be run from any computer with Google Chrome, Firefox, or Safari.
Because of this, knowing javascript is adventagious.
In a bind, javascript snippets can be snapped together.
It is especially useful in corporate environments where admin rights are stripped from the user.

In addition to being portable, Javascript can dice and slice web pages to quickly snatch data.

### Recommended Actions

  1.  <a href="http://www.amazon.com/gp/product/0596517742/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0596517742&linkCode=as2&tag=richsonicom-20">JavaScript: The Good Parts</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=richsonicom-20&l=as2&o=1&a=0596517742" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
  1. <a href="http://www.amazon.com/gp/product/B00D624AQO/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00D624AQO&linkCode=as2&tag=richsonicom-20">Functional JavaScript: Introducing Functional Programming with Underscore.js</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=richsonicom-20&l=as2&o=1&a=B00D624AQO" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
  1. "[Best JS Resource Ever](http://jstherightway.org)" ~ Paul Pucciarelli

---

## Emacs
<div class='image block' style='max-height:100px' >
  <img height='100%' src='/blog/posts/images/air-compressor.jpg' />
</div>

<blockquote style='clear:none'>
> Air compressors serve many purposes for mechanics.
> They fill tires, clean working areas, and can power tools like air drills.
> Emacs serves many puposes for developers.
</blockquote>

Emacs is not a text editor, it is a LISP interprater that houses a text editing mode.
Emacs has many other modes that make it useful including: *project management mode, emulation ( consoles, REPLS, [vi](#VI))*...

### Most Importantly

Many GNU programs default to Emacs Keybindings, e.g. [bash](#Bash).
As such, learning emacs keybindings enables a user to manouver a [bash](#Bash) session like a ninja.

### Recommended Actions

  *  [Hack Emacs videos](https://www.youtube.com/playlist?list=PLABBCB510477C08DB)
  *  [beginner guide to emacs](http://www.jesshamrick.com/2012/09/10/absolute-beginners-guide-to-emacs/)
  *  emacs help ``` M-h ```

---

## SQL
<div class='image block' style='max-height:100px' >
  <img height='100%' src='/blog/posts/images/obd-tool.jpg' />
</div>

<blockquote style='clear:none'>
> OBD Interface Scanners read diagnostics of a vehicle.
> SQL can take readings on an application's data.
</blockquote>

Modern applications generally use SQL databases to house a major portion of data.
I have seen senior level developers join a team, and begin contributing immediately.
They ramp up business context by poking around the SQL database.
This knowledge enables them to contribute to big picture conversations.

There are many flavors of SQL databases, but all comprehend vanilla SQL.
They differ only in implementation of exotic features.
With a strong foundation in SQL, learning any dialect will be a breeze.

### Recommended Actions

  1.  <a href="http://www.amazon.com/gp/product/1449394094/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1449394094&linkCode=as2&tag=richsonicom-20">SQL Pocket Guide</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=richsonicom-20&l=as2&o=1&a=1449394094" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
  1.  [SQL Zoo](http://sqlzoo.net/wiki/Main_Page) is the only site you need to learn SQL.

---

## Markdown
<div class='image block' style='max-height:100px' >
  <img height='100%' src='/blog/posts/images/pry-bar.jpg' />
</div>

<blockquote style='clear:none'>
> A lever amplifies an input force to provide a greater output force.
> Markdown lets developers get greater output (HTML) from basically writing plain text.
</blockquote>

Markdown is simple, but it packs a mean productivity punch.
[Jekyll](http://jekyllrb.com/)
uses it to render blog posts (see [how my blog runs](/how-i-use-github-pages-to-host-my-blog)).
It is also terse enough to quickly decorate an email (check out [MarkdownHere for Chrome](http://markdown-here.com/index.html)).

Amazing speed gains come when writing documentation in Markdown.
Its syntax makes it painless to quickly produce documentation.
[Thats why Github offers it for README files](https://help.github.com/articles/github-flavored-markdown).

### Recommended Actions

  1.  [Markdown Tutorial](http://www.markdowntutorial.com/) is an interactive site that teaches markdown.
  1.  [The Github Tutorial](https://help.github.com/articles/markdown-basics) is how I learned Markdown.

---

## Tmux
<div class='image block' style='max-height:100px' >
  <img height='100%' src='/blog/posts/images/clamp.jpg' />
</div>

<blockquote style='clear:none'>
> Clamps hold loose components in place.
> Tmux clamps terminal sessions, so developers can multitask or return to a session later.
</blockquote>

Tmux is a modern incarnation of the GNU Screen program.

*  It can improve the stability, and increase the execution speed of workflows.
*  It enables visualization of problems in a new way.
*  It is easy to install, and works on most \*nix platforms.

Tmux can manage multiple sessions at the same time.
Within each session, any number of windows can be created.
Windows can also be split into both vertical and horizontal panes.
Tmux can be controlled by scripts, and automate repetitive workflow tasks.

### Recommended Actions

  1.  Read [my article](/why-you-may-be-missing-out-if-you-dont-use-tmux) for an in depth description of tmux.
  1.  [Pragmatic Programming - Tmux](http://www.amazon.com/gp/product/B00A4I3ZVY/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00A4I3ZVY&linkCode=as2&tag=richsonicom-20) that takes about two weeks to read / get up to speed ( this is how I learned tmux )
  1.  [My videos](https://www.bitcast.io/b/tmux-tunes-week-1) will let you start using tmux immediately, and gradually show more features as time goes on.


---

##  R
<div class='image block' style='max-height:100px' >
  <img  height='100%' src='/blog/posts/images/tape-measure.jpg' />
</div>

<blockquote style='clear:none'>
> Mechanics plan and analyze their next move with a tape measure.
> R enables developers to plan by analyzing reference data.
</blockquote>

R is a non-gui, lightweight, free version of Microsoft Excel.
Despite its high learning curve, R is powerful and terse.

In just a few commands, R can crunch professional level statistics.
R does the heavy lifting, and abstracts mathematical calculations.
R simplifies statistics down to analyzing results.

I monitor stats about my working habits with R.
I have many random data points that I collect periodically, and let R conjure up some comparisons for me.
This is a simple use, but R can do much more sophisticated statistics.

### Recommended Actions

  1. A great general into to R: <a href="http://www.amazon.com/gp/product/1593273843/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1593273843&linkCode=as2&tag=richsonicom-20">The Art of R Programming: A Tour of Statistical Software Design</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=richsonicom-20&l=as2&o=1&a=1593273843" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
  1. I always like cookbooks:  <a href="http://www.amazon.com/gp/product/0596809158/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0596809158&linkCode=as2&tag=richsonicom-20">R Cookbook (O'Reilly Cookbooks)</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=richsonicom-20&l=as2&o=1&a=0596809158" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
  1. My general reference, since I do a lot of graphs:  <a href="http://www.amazon.com/gp/product/B0056ZUJ46/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0056ZUJ46&linkCode=as2&tag=richsonicom-20">R Graph Cookbook</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=richsonicom-20&l=as2&o=1&a=B0056ZUJ46" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

# Conclusion

Focusing on fundamental skills creates a latticework in which one can develop throughout their career.
Recent college grads will plump up their resume, and strengthen their foundational skills.
Veterans can always learn new tricks that will make them work more productively.

### It can take up to 10 years to become an expert at something.
> The (Beatles) had been playing in clubs since 1957. Ten years before Sgt. Pepper’s, their first critically successful album.
####~ [Pragmatic Thinking and Learning, page 44](http://www.amazon.com/gp/product/1934356050/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1934356050&linkCode=as2&tag=richsonicom-20)

And obviously, even masters always have more to learn.

Please feel free to comment on other skills you think are foundational for developers.
