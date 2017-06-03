---
layout: post
date: 2015-01-12
title: On Vimscript
categories: []
avatar: '/blog/posts/images/four_freedoms2.jpg'
hero: '/blog/posts/images/four_freedoms2.jpg'
tags: []
revision: 11
blurb: 'A Brief Transfer of Wisdom On Vimscript'
---

<a class='caption' target="_blank" href='https://www.flickr.com/photos/elijahporter/8218473966/in/photolist-dwePo7-hXWnuU-eb1Zwu-hXWewi-hXWxbf-nEnvu4-dwePZ1-ozFjeY-dweP9Y-ozTwTH-hXWdnp-hXX5wa-hXWvvw-ozTyHz-hXWsfy-hXWgEs-ozRCyS-6zzL8F-hXWaSz-dsCcus-dsCbVm-dw9eZn-dweNPC-hXW3uZ-ozBAyg-dw9fpX-hXWZvP-dweR9u-jE9wH1-dw9ewp-fEFWJb-dtC7ou-hCRZi1-oBbFPF-dw9iWZ-dKazBG-hCSjAh-dkkC7x-oBbvr7-nFAsin-fjwf33-hCS1am-hCSbqj-hCSZRa-hCRJwB-ag4ZFM-MGzDJ-53o4h2-p5tpND-p5tpta/'>Header Photo credit to Elijah Porter </a>

# View The Talk

I presented this material at the New York Vim Meetup.
View the presentation below:
<iframe width="560" height="315" src="http://www.youtube.com/embed/WfyXKnQ9kAQ" frameborder="0" allowfullscreen></iframe>

# Here I Dreamt I Was An Architect

> "Design is not making beauty, beauty emerges from selection, affinities, integration, love." ~ Louis Kahn

<aside class='col-xs-6'>
  <img class='img-responsive' src='/blog/posts/images/four_freedoms_map.png' >
  <div class='caption'>
  The Four Freedoms Park, sandwiched between Manhattan and Long Island
  </div>
</aside>

The [Four Freedoms Park] \(image above\) is an architectural masterpiece designed by [Louis Khan].
The park's architecture embellishes its riverfront property which lies between Manhattan and Long Island.
Instead of competing with the environment, [Khan][Louis Khan] often designs architecture which leverages it.

This same principles define well crafted Vimscript.
Celebrated Vimscript authors (e.g. [tpope], [tommcdo], and [AndrewRadev]) compliment vim's features with their plugins.
Design at this level requires a comprehensive understanding of vim, and its swath of functionality.
*Great Vimscript feels natural to vim users*.
This is just as important as writing something useful.

If limited to one piece of advice to Vimscript authors, I would offer this:
*Compliment your environment, do not compete with it.*
This article builds off of this concept, and extends advice on how to author great Vimscript.

# Building A Foundation

Conceptualizing certain ideas is a prerequisite to authoring exceptional Vimscript.
These next sections offer a variety of such ideas.
The aim is to *prime the mind into recognizing good problems to solve with Vimscript*, and to compress the learning curve of the language.

## Customization Over Origination

Most Vimscripts serve one of the two following functions:

1.  Customize/extend built-in settings
1.  Enhance the editor with brand new functionality

In either situation, a single principal prevails:
*Straying from Vim's convictions often creates more work, and a less polished solution.*
It's not hard to find code that breaks this rule, and it hurts the community when code like gets released.
It bloats the codebase, and teaches bad habits.

### Customization Example: File Browsing

[NerdTree][nerdtree] is a popular plugin that enables file browsing a' la TextMate's project drawer.
The plugin duplicates a large amount of existing code (netrw), and has a significant functionality flaw.
Drew Neil eloquently phrases how project drawers and Vim splits mix like [Oil and vinegar].

Another option, [vim-vinegar] plays nicely with splits and leverages existing netrw code.
Instead of reinventing functionality, vinegar improves netrw with slick configurations.

What is the gain?  
Qualitatively, [vim-vinegar] feels more natural to a user adapted to vim's native functionality.  
Quantitatively, [vim-vinegar] is *5x smaller* than [NerdTree] \(529 kb vs 2775 kb\).

#### Resources

1.  ```:h netrw```
1.  [vim-vinegar]
1.  [Oil and vinegar]
1.  [NerdTree]

### Augmentation Example: Swapping Text

Yet, there are circumstances which vim provides no feasable solution.
A great example is swapping text.
Examine the example swapping "bar" and "baz" using nothing but stock vim commands.
It amounts to 15 keystrokes, and to revert the operation requires 2 undo commands.

```
"foo [b]ar baz"
(viwy w viwp bb viwp)
"foo [baz] bar"
```

The plugin [vim-exchange], wraps this functionality into one swift command.
Examine the same operation with [vim-exchange] (9 keystrokes, and 1 undo).

```
"foo [b]ar baz"
(cxiw w cxiw)
"foo [baz] bar"
```

A key to the design of this plugin is interface to the end user.
The mapping ```cx``` does not clobber any vim functionality.
The command is an operator so things like ```cxaw``` and ```cxx``` work.
These details make the plugin flow with vim.

#### References

1. [vim-exchange]
1. ```:h operator```

## Cause And Effect

Vim is [event] focused.
It's waiting for things to happen (sequences of keypresses).
When one such trigger occurs, actions fire.
Callbacks respond to these [events].

[Functions] bind to key sequences ([mappings], commands, [abbreviations]) and [events] \([autocommands]\).
Here are some examples:

```
nmap ge ibeep<cr>
iabbrev beep boop
command Beep :normal!("iboop")

autocmd FileType markdown echo('beepboop')
```

Choosing the right [event] a piece of Vimscript should bind to can make the design more clean / useful.

#### Resources

1. ```:h map.txt```
1. [Learn Vimscript The Hard Way - Basic Mapping][sl03]
1. ```:h abbrev```
1. [Learn Vimscript The Hard Way - Abbreviations][sl08]
1. ```:h command```
1. ```:h normal```
1. [Learn Vimscript The Hard Way - Normal][sl29]
1. [Learn Vimscript The Hard Way - Execute Normal!][sl30]
1. ```:h autocmd```
1. [Learn Vimscript The Hard Way - Autocommands][sl12]
1. ```:h echo```
1. [Learn Vimscript The Hard Way - Echoing Messages][sl01]

# On Learning Syntax

This article refrains from explicitly covering Vimscript syntax.
Attepts at writing a tutorial would be subpar to these more comprehsive tutorials:

1. The harder / quicker path: ```:h usr_41.txt```
1. The easier / slower path:  [Learn Vimscript the Hard Way][lvsthw]

Each resource provides detailed information on syntax and technical details required when writing Vimscript.
They each take a unique approach to essentially the same material.
*After reading either piece, you should be comfortable with basic Vimscript.*
Albeit, less palpable aspects may still be insipid.
The aim of this article is to fill some of those missing pieces.

The remaining sections offer tidbits of wisdom I aquired through experience.
One section covers Vimscript itself, while the other targets writing plugins.

#### Resources

1. ```:h usr_41.txt```
1. [Learn Vimscript the Hard Way][lvsthw]

# Hacking Vim Script

Once you know Vimscript, opportunities for productivity boosts emerge.
This section presents some ideas that will assist your efforts to learn Vimscript.

## Don't Prematurely Write Plugins

Write Vimscript for yourself before broadcasting it to the world.
*When starting out it's important to write a lot of actual code.*
Plugins require documentation, and degrees of design that bring their own challenges.
This will take away from the learning process of the language.

## Poking The Box

Obviously, Vimscript is best written within vim.
Doing this offers conveniences that are impossible to recreate in another editor.
Namely, a gateway to an instant feedback loop via runtime evaluation.
*Instead of guessing how a piece of code will behave, vim supports trying it immediately.*
Below are a handful of methods for evaluating Vimscript at runtime.

### Evaluating Files
The primary runtime evaluation tool is the ```:source``` command.
This command accepts a path to a file as an argument, and loads it into vim's runtime.
This avoids having to close and open vim again.

```vim
:source ~/.vim/init/keybindings.vim
```


#### Pro Tips

1.  Add ```!``` to the end of [functions], allowing them to reload.
1.  ```:so``` is the same as ```:source```
1.  ```:source %``` will load the current file

Here are some reloadable code examples:

```vim
nmap ge :echo('beep')<CR>
iabbrev beep boop
command! Beep normal! iboop
function! BeepBoop()
  echo('beep')
endfunction
```

#### Resources

1. ```:h so```
1. ```:h function```
1. [Learn Vimscript The Hard Way - Functions][sl23]

### Inspecting

*Command mode is not a REPL* for Vimscript.
As such, other means of interaction need to exist.
The simplest strategy is [echo].

```vim
:let g:beep='boop'
:g:beep
:echo(g:beep)
:1 + 1
:echo(1+1)
```

It's useful to [echo] out [variables], but can get cumbersome with longer experssions.
[Tpope]'s [scriptease] plugin offers some facilities to allieviate this.

The ```g! ``` is an operator that replaces the text with evaluated Vimscript.
For example, running ```g!!``` on the line ```1 + 1``` would change the line to ```2```.

```:PP``` opens a REPL for evaluating Vimscript.

```vim
:PP
PP> system('ls')
"CNAME\n_config.yml\n_includes\n_layouts\n_posts\n_publish\n_site\nassets\nbin\ncontact.html\ncss\nfeed\nfonts\nimages\nimg\nindex.html\njs\nnode_modules\npac
kage.json\nresume.html\nsass\nsrc\ntest\ntodo.txt\n"
```

#### Resources

1. ```:h command```
1. ```:h g:```
1. [Learn Vimscript The Hard Way - Variables][sl19]
1. [Learn Vimscript The Hard Way - Variable Scoping][sl20]
1. ```:h echo```
1. [Learn Vimscript The Hard Way - Echoing Messages][sl01]
1. [scriptease]
1. ```:h scriptease```

## Use The OS

The operating system provides a lot of functionality, and its smart to leverage it.
Calling ```system``` exposes unix commands to vim.

```
echo(system('ls'))
echo(system('ls -lal '.expand('%')))
```

#### Resources

1. ```:h system```
1. [Learn Vimscript The Hard Way - External Commands][sl52]
1. ```:h expand```

## State Up To Date

The key to Vimscript is understanding how to manipulate vim's state.
There are 3 main ways to interact with application state in vim:

1.  Passively reading current state
1.  Updating state
1.  Binding to an [event] broadcasted when state changes

Most Vimscript functionality employs one of these interactions.

### Reading State

Variables govern the state and behavior of vim.
Variable namespacing is systematic in Vimscript.
Here are the different types of variables:

**g:variables** - global variables  
Globals preserve value in any situation within vim.
This means any mode, and any buffer.
A frequent use of these variables is to memoize plugin loading.

```
:echo(g:loaded_fugitive)
> 1
```

**s:variables** - script local  
These variables have scope limited to their file.
This allows 2 scripts to have the same variable, but not collide.

```vim
let s:counter = 0
function! MyCounter()
  let s:counter = s:counter + 1
  echo(s:counter)
endfunction
```

**b:variables** - buffer local  
These variables bind to the current buffer.
Syntax specific functionality is a great usecase for them.

```vim
:echo(b:did_ftplugin)
> 1
```

**$VARIABLES** - Environment  
All environment variables carry over from the shell.
Like the shell, dollar signs ($) prefix environment variables.

```
:echo($PAGER)
> less
```

**&variables** - Set options  
Calling ```set filetype=markdown``` is a wrapper to vim's option variables.

```
:echo(&tabstop)
> 2
```

**@variable** - register variables  
The registers are global containers to save values.
Macros save into single digit global registers(0-9a-z).
Access to these registers via ```@``` in Vimscript.

```
:let @d='ggdG'
:echo(@d)
> ggdG
```


#### Buffer State

Some buffer state is not available via variables.
This makes vim faster because it does not need to constantly write changing data.
*It will lazy-load this information via certain functions it provides.*
Consider this example of reading the current line:

```vim
:echo(line('.'))
> 262
```

#### Resources

1. ```:h variables```
1. [Learn Vimscript The Hard Way - Variables][sl19]
1. ```:h line```

### Updating State

Whenever you interact with vim you are updating runtime state.
A call to ```:set filetype=markdown``` will update the ```&filetype``` variable.
Typing ```gg``` will move the current line.
```:w``` tells vim to execute its buffer writing sequence.

State updates are similar in Vim and Vimscript.
The main ways to update state are as follows:

(Note ```.``` concats [strings] in Vimscript)

**let** - updates a variables state

```
   let &filetype='markdown'
   let g:script_loaded=1
```

**execute** - evaluates a string as an ex (:) command

```
   execute ":w ".expand('%')
```

**normal!** - executes commands as if a user typed them

```
   normal! gg=G
   execute "normal! ".commands
```

**eval** - evaluates a string as Vimscript

```
   eval('let @r="gg=G")
```

#### Resources

1. ```:h :set```
1. [Learn Vimscript The Hard Way - Setting Options][sl02]
1. ```:h :let```
1. ```:h :execute```
1. [Learn Vimscript The Hard Way - Execute][sl28]
1. ```:h :normal```
1. [Learn Vimscript The Hard Way - Normal][sl29]
1. [Learn Vimscript The Hard Way - Execute Normal!][sl30]
1. ```:h :eval```
1. ```:h :expand```


### Listening For State Changes
Vim is constantly changing state.
Your code can listen to these events by subscribing to them.

#### Keyboard Events

Vim has 2 main modes for subscribing to keyboard events: [mappings], and [abbreviations].
[Mappings] can be global, or mode-specific:

```
:map  <f12> :h<cr>
:imap <c-c> <esc>:w<cr>
:nmap ZJ JZZ
```

[Abbreviations] work in insert, command, and replace mode.
The tell vim to replace one set of text with another.

```
cabbrev W w
abbrev teh the
iabbrev yo you
```

#### Autocommands

[Events] fire in vim when stuff happens.
Vimscript functions can bind to these [events].
[Autocommands] expose this functionality \(see the [Cause and Effect](#CauseAndEffect) section above\).

#### Resources

1.  ```:h map```
1. [Learn Vimscript The Hard Way - Basic Mapping][sl03]
1.  ```:h abbrev```
1. [Learn Vimscript The Hard Way - Abbreviations][sl08]
1.  ```:h autocmd```
1. [Learn Vimscript The Hard Way - Autocommands][sl12]

# Plugin Design / Best Practices

After achieving comfort with Vimscript, the next logical step is to write useful scripts and share them with the world.
The easiest way to share is via [plugins].

## Structuring

In general, there are 2 main types of [plugins]: global ([fugitive], [splitjoin], [vim-exchange]), and filetype specific ([vim-rails]).
The structure can vary, but here is a simplified template for each:

### Global Plugin

1. doc
1. [autoload]
1. plugin

For a global plugin, the general formula is simple: expose your plugin within the plugin directory, and autoload everything else.
When starting out, [autoload] may be overkill, but read ```:h autoload``` to prime your brain to use it in the future.

### FT Plugin
1. doc
1. [ftdetect]
1. ftplugin
1. [syntax]

Filetype plugins generally have a bit more meat to them.
[Ftdetect] evaluates the filetype.
[Syntax] outlines rules for vims syntax highlighter.
Ftplugin is where buffer specific code resides.


## Loading

[Plugins] should memoize themselves (unless under development).
To make sure they don't load twice, guard files with a snippet like this:

```vim
if exists("g:loaded_gitgutter")
  finish
endif
let g:loaded_gitgutter = 1
```

## The Deal With SID and Plug

### SID

Plugins can leverage the ```<SID>``` feature offered by Vim.
Imagine this circumstance:

```vim
""""""""""""""""""
"pluginA.vim
""""""""""""""""""
function! BeepBoop()
  echo('beep')
endfunction
nmap ge :call BeepBoop()<cr>

""""""""""""""""""
"pluginB.vim
""""""""""""""""""
function! BeepBoop()
  echo('boop')
endfunction
```

In this situation the mapping from pluginA, could actually call BeepBoop from pluginB depinding on the order in which scripts load.
To prevent this, the ```<SID>``` prefix expands to the ```<SNR>``` of the file.

```vim
""""""""""""""""""
"pluginA.vim
""""""""""""""""""
function! s:BeepBoop()
  echo('beep')
endfunction
nmap ge :call <SID>BeepBoop()<cr>

""""""""""""""""""
"pluginB.vim
""""""""""""""""""
function! s:BeepBoop()
  echo('boop')
endfunction
```

Vim would expand that snippet to be this:

```vim
"pluginA.vim
function! <SNR>48_BeepBoop()
  echo('beep')
endfunction
nmap ge :call <SNR>48_BeepBoop()<cr>

"pluginB.vim
function! <SNR>_87BeepBoop()
  echo('boop')
endfunction
```
*```<SID>``` and ```function s:name``` make function names more explicit, and reliable.*

### Plug

The vim documentation says ```<Plug>``` is a "special code that a typed key will never produce".
Unlike ```<SID>, <PLUG>``` is available to the global namespace.
It can expose a function call to the global environment.
Alas, *a user can access that function elsewhere.*
This allows them to attach their own keybinding to that function.
This globally living ```<Plug>``` code is the same for all plugins.
As such, use conventionally named commands like ```<Plug>PluginnameFunc``` to avoid collisions.

```vim
"""""""""""
"plugin.vim
"""""""""""
noremap <unique> <Plug>PluginFunc :call <SID>VimScriptFn()<CR>

""""""""""""""""
"keybindings.vim
""""""""""""""""
:nmap _p <Plug>ScriptFunc
```

#### Resources

1. ```:h plugins```
1. [Learn Vimscript The Hard Way - Plugin Layout in the Dark Ages][sl42]
1. [Learn Vimscript The Hard Way - Detecting Filetypes][sl44]
1. [Learn Vimscript The Hard Way - Basic Syntax Highlighting][sl45]

# Conclusion

Vimscript is a useful language that one can learn in a short time.
The aim of this article is to highlight the best ways to use it.
When used in conjunction with ```:h usr_41.txt``` or [Learn Vimscript the Hard Way][lvsthw] it should guide the reader to write exceptionally crafted Vimscript.
To reiterate the mantra from the beginning of this post: *Compliment your environment, do not compete with it.*
And, most of all have fun!!!

Please feel free to post questions in the comments section below.

# Resources

1. [Learn Vimscript the Hard Way][lvsthw]
1. [NerdTree]
1. [Oil and vinegar]
1. [scriptease]
1. [vim-vinegar]
1. ```:h :eval```
1. ```:h :execute```
1. ```:h :expand```
1. ```:h :let```
1. ```:h :normal```
1. ```:h :set```
1. ```:h abbrev```
1. ```:h autocmd```
1. ```:h command```
1. ```:h echo```
1. ```:h expand```
1. ```:h function```
1. ```:h g:```
1. ```:h line```
1. ```:h map.txt```
1. ```:h map```
1. ```:h netrw```
1. ```:h normal```
1. ```:h scriptease```
1. ```:h so```
1. ```:h system```
1. ```:h usr_41.txt```
1. ```:h variables```


[echo]: http://learnvimscriptthehardway.stevelosh.com/chapters/01.html "Learn Vimscript The Hard Way - Echoing Messages"
[set]: http://learnvimscriptthehardway.stevelosh.com/chapters/02.html "Learn Vimscript The Hard Way - Setting Options"
[mappings]: http://learnvimscriptthehardway.stevelosh.com/chapters/03.html "Learn Vimscript The Hard Way - Basic Mapping"
[abbreviations]: http://learnvimscriptthehardway.stevelosh.com/chapters/08.html "Learn Vimscript The Hard Way - Abbreviations"
[autocommands]: http://learnvimscriptthehardway.stevelosh.com/chapters/12.html "Learn Vimscript The Hard Way - Autocommands"
[variables]: http://learnvimscriptthehardway.stevelosh.com/chapters/19.html "Learn Vimscript The Hard Way - Variables"
[scope]: http://learnvimscriptthehardway.stevelosh.com/chapters/20.html "Learn Vimscript The Hard Way - Variable Scoping"
[functions]: http://learnvimscriptthehardway.stevelosh.com/chapters/23.html "Learn Vimscript The Hard Way - Functions"
[strings]: http://learnvimscriptthehardway.stevelosh.com/chapters/26.html "Learn Vimscript The Hard Way - Strings"
[execute]: http://learnvimscriptthehardway.stevelosh.com/chapters/28.html "Learn Vimscript The Hard Way - Execute"
[normal]: http://learnvimscriptthehardway.stevelosh.com/chapters/29.html "Learn Vimscript The Hard Way - Normal"
[execute normal]: http://learnvimscriptthehardway.stevelosh.com/chapters/30.html "Learn Vimscript The Hard Way - Execute Normal!"
[plugins]: http://learnvimscriptthehardway.stevelosh.com/chapters/42.html "Learn Vimscript The Hard Way - Plugin Layout in the Dark Ages"
[ftdetect]: http://learnvimscriptthehardway.stevelosh.com/chapters/44.html "Learn Vimscript The Hard Way - Detecting Filetypes"
[syntax]: http://learnvimscriptthehardway.stevelosh.com/chapters/45.html "Learn Vimscript The Hard Way - Basic Syntax Highlighting"
[external commands]: http://learnvimscriptthehardway.stevelosh.com/chapters/52.html "Learn Vimscript The Hard Way - External Commands"
[autoload]: http://learnvimscriptthehardway.stevelosh.com/chapters/53.html "Learn Vimscript The Hard Way - Autoloading"
[documentation]: http://learnvimscriptthehardway.stevelosh.com/chapters/54.html "Learn Vimscript The Hard Way: Documentation"

[sl01]: http://learnvimscriptthehardway.stevelosh.com/chapters/01.html "Learn Vimscript The Hard Way - Echoing Messages"
[sl02]: http://learnvimscriptthehardway.stevelosh.com/chapters/02.html "Learn Vimscript The Hard Way - Setting Options"
[sl03]: http://learnvimscriptthehardway.stevelosh.com/chapters/03.html "Learn Vimscript The Hard Way - Basic Mapping"
[sl08]: http://learnvimscriptthehardway.stevelosh.com/chapters/08.html "Learn Vimscript The Hard Way - Abbreviations"
[sl12]: http://learnvimscriptthehardway.stevelosh.com/chapters/12.html "Learn Vimscript The Hard Way - Autocommands"
[sl19]: http://learnvimscriptthehardway.stevelosh.com/chapters/19.html "Learn Vimscript The Hard Way - Variables"
[sl20]: http://learnvimscriptthehardway.stevelosh.com/chapters/20.html "Learn Vimscript The Hard Way - Variable Scoping"
[sl23]: http://learnvimscriptthehardway.stevelosh.com/chapters/23.html "Learn Vimscript The Hard Way - Functions"
[sl26]: http://learnvimscriptthehardway.stevelosh.com/chapters/26.html "Learn Vimscript The Hard Way - Strings"
[sl28]: http://learnvimscriptthehardway.stevelosh.com/chapters/28.html "Learn Vimscript The Hard Way - Execute"
[sl29]: http://learnvimscriptthehardway.stevelosh.com/chapters/29.html "Learn Vimscript The Hard Way - Normal"
[sl30]: http://learnvimscriptthehardway.stevelosh.com/chapters/30.html "Learn Vimscript The Hard Way - Execute Normal!"
[sl42]: http://learnvimscriptthehardway.stevelosh.com/chapters/42.html "Learn Vimscript The Hard Way - Plugin Layout in the Dark Ages"
[sl44]: http://learnvimscriptthehardway.stevelosh.com/chapters/44.html "Learn Vimscript The Hard Way - Detecting Filetypes"
[sl45]: http://learnvimscriptthehardway.stevelosh.com/chapters/45.html "Learn Vimscript The Hard Way - Basic Syntax Highlighting"
[sl52]: http://learnvimscriptthehardway.stevelosh.com/chapters/52.html "Learn Vimscript The Hard Way - External Commands"
[sl53]: http://learnvimscriptthehardway.stevelosh.com/chapters/53.html "Learn Vimscript The Hard Way - Autoloading"
[sl54]: http://learnvimscriptthehardway.stevelosh.com/chapters/54.html "Learn Vimscript The Hard Way: Documentation"

[events]: http://vimdoc.sourceforge.net/htmldoc/autocmd.html#autocmd-events-abc
[event]: http://vimdoc.sourceforge.net/htmldoc/autocmd.html#autocmd-events-abc

[redvin]: http://www.reddit.com/r/vim/comments/1tm8z7/nerdtree_replacement_by_tim_pope/
[dunt]: https://medium.com/@mozhuuuuu/vimmers-you-dont-need-nerdtree-18f627b561c3
[ch54]: http://learnvimscriptthehardway.stevelosh.com/chapters/54.html
[lvsthw]: http://learnvimscriptthehardway.stevelosh.com/
[scriptease]: https://github.com/tpope/vim-scriptease
[vim-vinegar]: https://github.com/tpope/vim-vinegar
[vim-exchange]: https://github.com/tommcdo/vim-exchange
[vinegar]: https://github.com/tpope/vim-vinegar
[nerdtree]: https://github.com/scrooloose/nerdtree
[Oil and vinegar]: http://vimcasts.org/blog/2013/01/oil-and-vinegar-split-windows-and-project-drawer/
[tpope]: https://github.com/tpope
[tommcdo]: https://github.com/tommcdo
[AndrewRadev]: https://github.com/AndrewRadev
[Four Freedoms Park]: http://www.fdrfourfreedomspark.org/
[Louis Khan]: http://www.biography.com/people/louis-kahn-37884
[fugitive]: https://github.com/tpope/vim-fugitive
[splitjoin]: https://github.com/AndrewRadev/splitjoin.vim
[vim-rails]: https://github.com/tpope/vim-rails
