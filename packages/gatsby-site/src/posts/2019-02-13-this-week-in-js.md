---
layout: post
date: 2019-02-13
categories: [opinions]
tags: [javascript]
revision: 1
title: "This Week In Javascript"
hero: /images/posts/2019-02-13-js.png
---

# 📰 This Week In Javascript

Here is a list of cool things I have been reading about this past week in the Javascript world.
I will say a little bit about each below.

* Up To Speed: React Hooks
* Up To Speed: React Context
* Up TO Speed: Npm Scripts
* Cool Project: Ink
* Interesting Read: Overreacted
* Interesting Read: None Of My Projects Want To Be SPAs

# 🏃 Up To Speed: React Hooks

<img src='/images/posts/2019-02-13-react-hooks.png' />

The release of [React 16.8], introduces the concept of [hooks].
This post has a great section: [what are hooks], which recommends resources for understanding hooks.

There is a large body of documentation which starts with [Introducing Hooks].
Links to other sections are available on that site.

## 🏅Things to know

1. Hooks are an experimental API looking to get early feedback from those in the community who are interested in shaping the future of React
1. Hooks make code reuse easier
1. They essentially deprecate the need for classes
1. Hooks allow you to reuse stateful logic without changing your component hierarchy
1. Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)
1. It works by expecting react to call useState in the same order every time
1. There are three main concepts to grasp (useState, useEffect, and useCustom)

I think the best part of the article is when Abramov (who is clearly the author based on writing style), implements react-redux in 10 lines of code:

```
// |-------------|
// V React-Redux V
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}

// Usage
function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  function handleAddClick(text) {
    dispatch({ type: 'add', text });
  }

  // ...
}

```

## 🙊The Gossip

Apparently Hooks are contentious within the React community.

This Dan Abramov Tweet discusses his stance which is an interesting read:  
https://twitter.com/dan_abramov/status/1093694465917751298?s=21

Here is Dan's Take:

* Hooks have an ideological resistance
* React is described as OOP or FP terms, but neither captures React.

1. FP does not describe local state.
1. Class” model doesn’t explain pure-ish render, disawoving inheritance, lack of direct instantiation, and “receiving” props.

Of course they “know” which component they belong to! React knows it just like your language knows which variables belong to which function, and when to destroy them.

## 🕵 What's Next

1. [usehooks] - Provides a set of really neat recipes for using React Hooks.  For example "Dark Mode: This hook handles all the stateful logic required to add a ☾ dark mode toggle to your website"
1. [React Hooks Community Examples](https://codesandbox.io/react-hooks) - Demos made using Hooks
1. [React Hooks FAQ](https://reactjs.org/docs/hooks-faq.html) - Lots of really deep info on Hooks, I just could not handle it in the first reading
1. [eslint-plugin-react-hooks] - ensures you are following the [Rules of Hooks]

Try them out and see where my feelings stand on hooks.

# 🏃 Up To Speed: React Context

<img width='100%' src='/images/posts/2019-02-13-react-context.jpeg' />

I took the time to learn more about React Context this week.
I first heard about them in a [React Training Workshop] held by [Michael Jackson]

[Michael Jackson] is the author of [react-router], which was one of the first external libraries to use contexts.
In the workshop, Jackson alluded to being responsible for making context publicly available.
I suppose, it does no harm to believe him.

He described stumbling upon contexts within the internals of the React source code.
After approaching the team about it, they advised him against using the feature.
The next day, there was a [warning added to the context readme.md] advising against the use of Contexts:

However, Jackson still used Contexts in [react-router].
[react-router] is one of the most depended on React component packages.

Regardless, giving a read through the [Context] doc is definitely not a waste of time.

# 😎 Cool Project: Ink
<img src='/images/posts/2019-02-13-ink.png' />

[https://github.com/vadimdemedes/ink/tree/next](https://github.com/vadimdemedes/ink/tree/next)

Ink renders React in the terminal.
I looked for this a few years ago and it did not exist.
As an avid terminal user, I am really excited to give it a try.

# Interesting Read: Overreacted

<img src='/images/posts/2019-02-13-overreacted.png' />

[Overreacted] is Dan Abramov's Blog.  He is the creator of Redux and now works on React.
The guy is a genius, and a brilliant writer.

Check it out!

# Interesting Read: None Of My Projects Want To Be SPAs
<img src='/images/posts/2019-02-13-spa.png' />

[None Of My Projects Want To Be SPAs] was an interesting read.

My favorite quote was: "What's more interesting is how many apps I'm seeing built as an SPA that really don’t need to be. Why does a website that orders food from restaurants need a Megabyte of javascript?"
I feel like the article must be trolling, but not sure.
Either way, its an interesting read.

[None Of My Projects Want To Be SPAs]: https://whatisjasongoldstein.com/writing/help-none-of-my-projects-want-to-be-spas/
[Context]: https://reactjs.org/docs/context.html
[React Training Workshop]: https://github.com/ReactTraining/react-workshop
[Michael Jackson]: https://github.com/mjackson?utf8=%E2%9C%93&tab=repositories&q=theramin&type=&language=
[react-router]: https://github.com/ReactTraining/react-router
[warning added to the context readme.md]:https://github.com/reactjs/reactjs.org/commit/5028f0874d67a7ed38fa9ae598cf44b8cdfdcfec#diff-cbea91459b88f9eb78ed5d31effa1505
[Ink]: https://github.com/vadimdemedes/ink/tree/next
[Overreacted]: https://overreacted.io/
[Npm Scripts]: https://docs.npmjs.com/misc/scripts
[React 16.8]: https://reactjs.org/blog/2019/02/06/react-v16.8.0.html
[hooks]: https://reactjs.org/docs/hooks-intro.html
[what are hooks]: https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#what-are-hooks
[eslint-plugin-react-hooks]: https://www.npmjs.com/package/eslint-plugin-react-hooks
[Rules of Hooks]: https://reactjs.org/docs/hooks-rules.html
[Introducing Hooks]: https://reactjs.org/docs/hooks-intro.html
[usehooks]: https://usehooks.com/
