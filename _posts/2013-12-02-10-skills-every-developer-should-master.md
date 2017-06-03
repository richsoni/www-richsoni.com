---
layout: post
categories: Coding
avatar: "http://www.vtxoa.com/forums/customavatars/avatar31627_1.gif"
hero: "http://www.unleashthefanboy.com/wp-content/uploads/2013/08/yoda-quotes.jpeg"
tags: [coding, self development]
depricated: true
title: '10 Skills Every Developer Should Master'
date: 2013-12-02
---

*This article has be revised!!! [The updated version can be found here](2014-03-17-10-skills-every-developer-should-master-revisited.md)*

---

There are some things you just have to know.  
These are the things all developers need to know.  
With this toolset mastered, you should be in good shape to gracefully navigate through any typical development environment.  

1.   Vi
2.   Regex
3.   GNU Tools
4.   Bash
5.   Javascript
6.   Emacs
7.   SQL
8.   Markdown
9.   Tmux
10.  R

**Bonus** Git

#Vi

**Fact** Any reasonable developer should know the basics of vi.  

**Opinion** Vi is better than emacs.  

Just to get that straightened out.  This article is not about vi vs emacs (they are both on the list!).  

Vi is listed first because it is the standard.  Log into any \*nix server and you will have vi.  
Every developer should be able to login to a fresh system, and edit files.  
Lets face it, even emacs users can agree that nano is for n00bs.  
After all, its called visudo, not nanosudo.  

If you are not a vimmer, I recommend you learn the basics.  This means just editing a file, and save/quitting.  
If you prefer a GUI editor, or emacs, thats cool for normal usage, but in emergencies vi should available in your toolbelt.  

**Recommended Reading**  

1.  Open your terminal and complete the first quarter of ``` $ vitutor ```
1.  Use vi to edit config files in the terminal to get used to the commands.

#Regex

In addition to vi, regular expressions are universally available.  
For many developers, their programming career can be broken into *before-regex* and *after-regex*.  
That is because your workflow will vastly increase once you can use regexes in your find and replace operations.  
  
This will be applicable in your code as well.  You cannot master half of the tools listed in this article without regex expertise, so if you dont know how to write regexes stop and learn right now.  

**Recommended Reading**

1.  [Regular Expressions Cookbook]("http://www.amazon.com/gp/product/1449319432/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1449319432&linkCode=as2&tag=richsonicom-20") is how I started learning regex, but it is a bit slow for beginners.
1.  [Textmate: Power Editing for the Mac]( http://www.amazon.com/gp/product/097873923X/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=097873923X&linkCode=as2&tag=richsonicom-20 ) was the book that actually taught me regex.  Specifically the search chapter.


#GNU Tools

Just like regex, GNU tools will change your life.  
They liberate you from language specific IDE environments, and allow you to get good at something universal.  
Even experts continue to marvel at the power bestowed upon a properly crafted chain of GNU Commands.  
  
**Recommended Reading**  

1.  All developers must own [Unix Power Tools](http://www.amazon.com/gp/product/0596003307/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0596003307&linkCode=as2&tag=richsonicom-20)
1.  Taco Bell Coding
1.  Read man pages, you will be surprised at the power some commands have (e.g. man find; man curl; man grep)


#Bash

Unlike the formerly mentioned tools shell scripting is something gradually pays off.  
For me it started with writing small scripts to automate tmux, and make my work easier.  
I mastered bash when I wrote my own customized bash prompt while on a trip in Ireland.  
  
There are many alternatives to bash out there, and I tried many of them extensively, but have to say that it is not worth the headache.  
  
Bash has many features that other shells dont, and like vi, bash is usually the standard.  
It is nice to not have to install Zshell.  Trust me on this.  With my current set up, all I have to do is wget my dotfiles, and run the install script.  
With a clean up script, you can even do this on a buddy's computer without zapping out his or her files.  
  
As far as features go, ```$ set``` was the command that made me leave zshell.  
My prompt port is also way faster in bash.  

**Recommended Reading**

1.  The [Bash Cookbook](http://www.amazon.com/gp/product/0596526784/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0596526784&linkCode=as2&tag=richsonicom-20) really sharpened my skills in a logical order.

#Javascript

Javascript is everywhere.  That is why every programmer should master it.  It is like the PERL of the modern time.  Using a friends Windows computer, but you need to do a little rat-tat-tat-tat in a console?  That is where Javascript shines.  
In addition to its portability, using javascript to do a quick page scrape can save you tons of time.  
  
I would like to add that you should be using jQuery because it provides a higher level syntax, which is better for rat-tat-tat-tatting.  
  
**Recommended Reading**

1.  Javascript, the good parts
1.  Functional Javascript

#Emacs

Emacs is the other of the big two text editors, but holds another special value:  Command line shortcuts, are defaulted to emacs.  
Although you can change your inputrc file to use vim mode, it is a little bit janky.  
  
I ended up customizing myself a hybrid of both.  In short, all master developers need to know both vi and emacs, no exceptions.  
  
Vimmers, if you want the respect of emacs users, know how to use their editor when you are pairring.    
The same goes for emacs users.  

**Recommended Reading**

#SQL

SQL is one common denominator that spreads across almost all application domains.  
Master SQL, and master it early.  It will pay off in the long run, I promise.  
I noticed that many senior level developers can join a team, and scale up their ability to contribute, and debug an existing project by poking around in the database.  
  
Most databases use SQL, so if you learn one you will be able to ramp up quickly in another.  

**Recommended Reading**

1.  unfortunately none.  Learning SQL is something I learned in a college class, and I am very happy I did.  Fortunately the basics are easy to pick up. Just ask a colleage to teach you, and practice a lot.

#Markdown

Markdown is the newest tool on my own belt, but one of the most useful.  
It is so awesome that once you learn it, you will begin to insist that your workplace integrates it into its project management software.  
I write my meeting notes, readmes, code documentation, and even my blog posts in markdown.  
  
It is the solution to the plaintext, no syntax highlight problem.  
The only problem is there is no quick way to just pick up markdown.  
  
I suggest you start with headings and lists, and then slowly add the features you need.  
  
**Recommended Reading**  

#Tmux

For some reason Tmux is a hard sell, but it is so awesome.  
I dont use the terminal without it.  
I will just list why I like it, and how to learn it.  
Understand that it is on this list, and when you learn it, you will be so surprised that no one wants to learn it.  
  
Tmux lets you:  save ssh sessions, remote pair via ssh, split panes, use vimux, organize and automate you development environment, rapidly switch context.  
  
**Recommended Reading**  
  
#R  


R is another tool I learned in college.  In my opinion, it has the steepest learning curve out of all the tools in this article.  
However, it saves you the headache of using Excel.  
  
I mostly use it to dynamically generate graphs.  I use this to monitor personal stats (e.g. progress and error of transitioning from qwerty to dvorak)  
  
**Recommended Reading**

#Git

Lastly I would recommend learning git, but I would not go as far as saying you have to learn it.  
I have used most of the popular SVN systems, and I find git to be the most complete, and simple once understood.  
**Recommended Reading**  
