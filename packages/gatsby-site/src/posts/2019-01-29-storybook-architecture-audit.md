---
layout: post
date: 2019-01-29
categories: [opinions]
tags: [storybook]
revision: 1
title: "Storybook Architecture Audit"
hero: /images/posts/2019-01-31-storybook-logo.svg
---

This post works through the similarities and differences between the 28 [Storybook Examples] listed on the [Storybook] website.
The intention is to identify patterns which [Storybook] projects employ, and to ultimately form an opinion on the best ways to organize and architect a [Storybook] application.

# 🙋 What is Storybook?

[Storybook] describes itself in the following manner:
> Storybook is a **UI development environment** and **playground** for UI components. The tool enables users to **create components independently** and **showcase components interactively** in an isolated development environment.
> Storybook runs outside of the main app so users can **develop UI components in isolation** without worrying about app specific dependencies and requirements.
> ~ https://storybook.js.org/basics/introduction/

[Storybook] serves two main functions:
1. **UI development environment** for **creating components independently of application code** (domain logic, routing etc.)
2. UI **playground** for **showcasing** and exploring existing components

Depending on the use case and the architecture, these two functions are employed to varying degrees by each of the [Storybook Examples].
Understanding the patterns shared between these examples will inform answers to the following:
1. How can [Storybook] be used?
2. How can [Storybook] stories be organized?

At the end of this post, I will offer my opinionated answers to these questions based on study of these examples.

I would love to hear other opinions, so feel free to [tweet me](http://www.twitter.com/richsoni).

#🍿 The Examples

<img width=500 src='/images/posts/2019-01-31-storybook-examples.png' />

The official [Storybook] website has a listing of [Storybook Examples].
Since the website's code is open source, any project can open a pull request, changing [this file](https://github.com/storybooks/storybook/blob/master/docs/src/pages/examples/_examples.yml) to include their project as an example.
At this time, 28 projects have done so:

1. [Coursera Storybook]
1. [Grommet Storybook]
1. [Wix Style React Storybook]
1. [Carbon Components Storybook]
1. [Lonely Planet Storybook]
1. [Airbnb Dates Storybook]
1. [Uber React-Vis Storybook]
1. [Buffer Components Storybook]
1. [Algolia InstantSearch Storybook]
1. [Artsy Force Storybook]
1. [React Native Web Storybook]
1. ~~[Griddle Storybook]~~ could not find storybook
1. [Tachyons Components Storybook]
1. [Appbase Maps Storybook]
1. [Quran.com Storybook]
1. [TerraEclipse Storybook]
1. [React Event Timeline Storybook]
1. [Semantic-UI Storybook]
1. [Hack Oregon Storybook]
1. [TodoMVC with Specs Storybook]
1. [React SVG Pan Zoom Storybook]
1. [Fyndiq Storybook]
1. [GumGum Storybook]
1. [Lucid UI Storybook]
1. [Trunx Storybook]
1. [Cosmos Storybook]
1. [MockingBot Storybook]
1. [Vanilla React Storybook]

By studying these [Storybook Examples], patterns start to appear in the design, features, and organization of the projects.
The projects implementations of these patterns also varies in quality.

Here are the patterns:

# 📰 Cover Story Pattern

<img width=500 src='/images/posts/2019-01-30-starting-stories-chart.png' />

The first thing I noticed when I opened each of these projects in its own browser tab, was some pages implemented what I call a **Cover Story**.

The projects that implemented this pattern used in a few different contexts:

### 👶🏻 Getting Started Cover Stories
*Developer instructions to use the components or the repository*

*Implemented By:*
* [Trunx Storybook]
* [Wix Style React Storybook]

<figure>
  <img width=500 src='/images/posts/2019-01-31-wix-cover.png' />
  <figcaption><em>Wix's 'Getting Started' Cover Story</em></figcaption>
</figure>


### 💁 About
*General information about the project to varying levels of detail*

*Implemented By:*
* [Hack Oregon Storybook]
* [React SVG Pan Zoom Storybook]
* [Tachyons Components Storybook]
* [Lucid UI Storybook]

<figure>
  <img width=500 src='/images/posts/2019-01-31-lucid-ui-cover.png' />
  <figcaption><em>Lucid-UI's 'About' Cover Story</em></figcaption>
</figure>


### ⛹ Playground
*A playground page where components can be altered*

*Implemented By:*
* [Coursera Storybook]

<figure>
  <img width=500 src='/images/posts/2019-01-31-coursera-cover.png' />
  <figcaption><em>Coursera's 'Playground' Cover Story</em></figcaption>
</figure>

### 💯 All Components
*A demo page showing all of the components*

*Implemented By:*
* [Grommet Storybook]

<figure>
  <img width=500 src='/images/posts/2019-01-31-grommet-cover.png' />
  <figcaption><em>Grommet's 'All Components' Cover Story</em></figcaption>
</figure>

##🤔 Thoughts

I was very surprised that only 8 projects implemented this pattern.
This gives the page a much higher degree of polish, as well as often serving a functional use.

It's also very easy to implement.
In [Hack Oregon Storybook], they changed the default import statement in [.storybook/config.js](https://github.com/hackoregon/component-library/blob/master/.storybook/config.js) to pull in a single file instead of all of them:

## ⛏ Implementing the 📰 Cover Story Pattern

```
//default storybook
const req = require.context('../src', true, /.stories.(j|t)sx?$/);

function loadStories() {
  req.keys().forEach(req);
}

//HackOregon
function loadStories() {
  require('../stories');
}
```

The index file of the `stories` directory can then control the ordering of the files:

```
//component-library/stories/index.js
//https://github.com/hackoregon/component-library/blob/master/stories/index.js
...
import Welcome from './Welcome';
import scatterplotStory from './Scatterplot.story';
...
storiesOf('Welcome', module)
.add('to Storybook', () => (
      <Welcome showApp={linkTo('Button')} />
      ));

scatterplotStory();
```

#🍱 Menu Structure Patterns

<img width=500 src='/images/posts/2019-01-31-menu-structure-chart.png' />

The next patterns I observed where those of how the Menu is structured.

## 📋 *List of Components* Menu Structure

The simplest menu structure a [Storybook] project can have.
Components are simply listed as a list in the Menu.
The list is often not even sorted, but displays in the order in which the files where resolved by the compiler.
This is the most basic type of Menu Structure, where the components are dropped into the menu willy nilly, and sorted alphabetically.

*Implemented By:*
* [Vanilla React Storybook]
* [Hack Oregon Storybook]
* [Coursera Storybook]
* [Semantic-UI Storybook]
* [Lucid UI Storybook]
* [Carbon Components Storybook]
* [Grommet Storybook]
* [Cosmos Storybook]
* [Fyndiq Storybook]
* [MockingBot Storybook]
* [Lonely Planet Storybook]
* [Buffer Components Storybook]
* [Tachyons Components Storybook]
* [Algolia InstantSearch Storybook]
* [Quran.com Storybook]

<figure>
  <img width=500 src='/images/posts/2019-01-31-algolia-cover.png' />
  <figcaption><em>Algolia Storybook lists all of its components in the base level of the menu</em></figcaption>
</figure>

## 📚 *Categories* Menu Structure

Menu Items are grouped into different categories.
By far the most flexible and scalable solution, it also takes significantly more effort to organize the information architecture.

*Implemented By:*
* [Wix Style React Storybook]
* [GumGum Storybook]
* [Trunx Storybook]
* [React Native Web Storybook]
* [Artsy Force Storybook]
* [TerraEclipse Storybook] 

<figure>
  <img width=500 src='/images/posts/2019-01-31-wix-cover.png' />
  <figcaption><em>Wix's Menu Structure</em></figcaption>
</figure>

Here is the breakdown of the projects with custom categories, patterns are bolded:

<table>
  <thead>
  <tr>
    <td>Wix Style React Storybook</td>
    <td>GumGum Storybook</td>
    <td>Trunx Storybook</td>
    <td>React Native Web Storybook</td> 
    <td>Artsy Force Storybook</td>
    <td>TerraEclipse Storybook</td>
  </tr>
  <tbody style='vertical-align: top'>
    <tr>
      <td>
        <ul>
          <li>Introduction</li>
          <li>Getting started</li>
          <li>Usage Without Yoshi</li>
        </ul>
        <ol>
          <li>Foundation</li>
          <li><b>Layout</b></li>
          <li>Inputs</li>
          <li>Selection</li>
          <li>Buttons</li>
          <li>Navigation</li>
          <li>Tooltips</li>
          <li>Notification Bars</li>
          <li>Modals</li>
          <li>Tables</li>
          <li>Pickers and Selectors</li>
          <li>Other</li>
        </ol>
        <ul>
          <li><b>Components</b></li>
          <li>WIP</li>
          <li>Styling</li>
          <li>Tests</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Atoms</li>
          <li><b>Layout</b></li>
          <li>Molecules</li>
          <li><b>Utilities</b></li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Overview</li>
          <li>Modifiers</li>
          <li>Columns</li>
          <li><b>Layout</b></li>
          <li>Form</li>
          <li>Elements</li>
          <li><b>Components</b></li>
        </ul>
      </td>
      <td>
        <ul>
          <li><b>Components</b></li>
          <li>APIs</li>
          <li>Example apps</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Apps</li>
          <li><b>Components</b></li>
          <li>Onboarding</li>
          <li>Publishing</li>
          <li>SSR Router</li>
          <li>StaticCollapse</li>
          <li>Styleguide</li>
          <li>Typography</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Decorators</li>
          <li><b>Utilities</b></li>
          <li><b>Components</b></li>
        </ul>
      </td>
    </tr>
  </tbody>
  </thead>
</table>

### Layout Category Pattern

*Implemented By:*
* [Wix Style React Storybook]
* [Trunx Storybook]
* [React Native Web Storybook]

Components within this item include:
* Grid
* Page
* Column
* Row
* Footer
* Section
* Titles

### Components

This is where all of the building blocks for the site typically go.

*Implemented By*:
* [Wix Style React Storybook]
* [Trunx Storybook]

### Utilities

These are used by different components for different things, as such it seems improperly named.

*Implemented By*:
* [Wix Style React Storybook]
* [Trunx Storybook]

## 🍡 *Page Sections* Menu Structure

Menu is broken into sections of the page.

*Implemented By:*
* [TodoMVC with Specs Storybook]
* [Appbase Maps Storybook]

<figure>
  <img width=500 src='/images/posts/2019-01-31-todo-mvc-menu.png' />
  <figcaption><em>TodoMVC Menu</em></figcaption>
</figure>

## 💃 *Single Component* Menu Structure

Components with a small footprint (a single component) usually use [Storybook] as a live demo or playground.
As such, the menu is usually flat, and simple.

*Implemented By:*
* [Airbnb Dates Storybook]
* [Uber React-Vis Storybook]
* [React SVG Pan Zoom Storybook]
* [React Event Timeline Storybook]

<figure>
  <img width=500 src='/images/posts/2019-01-31-react-event-timeline-cover.png' />
  <figcaption><em>React Event Timeline Storybook</em></figcaption>
</figure>

##🤔 Thoughts

The type of menu structure depends largely on the application.
However, it does seem that higher quality projects tend to use the Categories section.
This is certainly the most scalable and flexible solution that can be employed on the menu, so if you are not sure go with this.

# 🔘 Button Audit

Lastly, I wanted to compare the layout of a basic component.
I picked `Button` because most projects implement a form of button.

I did not expect there to be much variance in how the different projects presented the component.
However, I was pleasantly surprised to find many patterns being implemented by the various projects.

Here are the results (scroll to see more).  Descriptions each each pattern follow the table.

| Site                            | Variation Patterns                 | Context                 | Release Status | Testkit |
| ------------------------------  | ---------------                    | ------------            | ----------     | ------- |
| [Trunx Storybook]               | ♨️With Code                         | ✅[trunx-custom]        | ✅             | ❌      |
| [Wix Style React Storybook]     | 💸 Fanned, 🎼Sidebar, ⛹ Playground | ✅[wix-style-react]     | ❌             | ✅      |
| [React Native Web Storybook]    | 💸 Fanned                          | ✅[react-native-custom] | ❌             | ❌      |
| [Coursera Storybook]            | 💸 Fanned, ⛹ Playground            | ✅[Info Addon]          | ✅             | ❌      |
| [Vanilla React Storybook]       | 🎛 Knobs                            | ✅[Info Addon]          | ❌             | ❌      |
| [GumGum Storybook]              | 🎛 Knobs                            | ✅[Info Addon]          | ❌             | ❌      |
| [Hack Oregon Storybook]         | 🎼Sidebar                          | ✅[Info Addon]          | ❌             | ❌      |
| [Semantic-UI Storybook]         | 🎼Sidebar                          | ✅[Info Addon]          | ❌             | ❌      |
| [MockingBot Storybook]          | 💸 Fanned                          | ✅[Info Addon]          | ❌             | ❌      |
| [Tachyons Components Storybook] | 💸 Fanned                          | ✅[Info Addon]          | ❌             | ❌      |
| [Appbase Maps Storybook]        | 🎛 Knobs, ⛹ Playground              | ❌                      | ❌             | ❌      |
| [Carbon Components Storybook]   | 🎛 Knobs                            | ❌                      | ❌             | ❌      |
| [Lonely Planet Storybook]       | 🎛 Knobs                            | ❌                      | ❌             | ❌      |
| [Grommet Storybook]             | 🎼Sidebar                          | ❌                      | ❌             | ❌      |
| [Cosmos Storybook]              | 🎼Sidebar                          | ❌                      | ❌             | ❌      |
| [Fyndiq Storybook]              | 🎼Sidebar                          | ❌                      | ❌             | ❌      |
| [Buffer Components Storybook]   | 🎼Sidebar                          | ❌                      | ❌             | ❌      |
| [Artsy Force Storybook]         | 🎼Sidebar                          | ❌                      | ❌             | ❌      |
| [Quran.com Storybook]           | 🎼Sidebar                          | ❌                      | ❌             | ❌      |

## Variation Pattern

The example projects employed a few patterns for communicating variation in a story.

<figure>
  <img width=500 src='/images/posts/2019-01-31-vanilla-react-variation.png' />
  <figcaption><em>Vanilla React's 'Sidebar' Variation Pattern</em></figcaption>
</figure>

The simplest, and most common strategy is *Sidebar Variation Pattern*.
In this pattern, variation is included in the menu.

<figure>
  <img width=500 src='/images/posts/2019-01-31-vanilla-react-variation.png' />
  <figcaption><em>Lonely Planet's 'Knobs' Variation Pattern </em></figcaption>
</figure>

Another simple option is to use the [Storybook Addon Knobs], which is a straightforward configuration.

<figure>
  <img width=500 src='/images/posts/2019-01-31-react-native-variation.png' />
  <figcaption><em>React Native 'Fanned' Variation Pattern</em></figcaption>
</figure>

*Fanning* out a component within a story is also a common variation technique.
However, it could get complicated depending on the way it is implemented.

<figure>
  <img width=500 src='/images/posts/2019-01-31-trunx-variation.png' />
  <figcaption><em>Trunx's 'With Code' Variation Pattern </em></figcaption>
</figure>

Some projects implemented custom variation patterns, like [Trunx Storybook] which combines *Fanning* alongside its code examples.

<figure>
  <img width=500 src='/images/posts/2019-01-31-wix-variation.png' />
  <figcaption><em>Wix's Mixed Variation Pattern</em></figcaption>
</figure>

[Wix Style React Storybook] also has a custom variation pattern which combines Sidebar, Fanning, and Playground
## Context Pattern

<div style='display: flex; align-items: flex-end; justify-content: flex-end; flex-flow: row nowrap; width: 100%'>
  <figure>
    <img width=500 src='/images/posts/2019-01-31-vanilla-react-context.png' />
    <figcaption><em>Vanilla React Addon Info Component Context</em></figcaption>
  </figure>
  <figure>
    <img width=500 src='/images/posts/2019-01-31-trunx-context.png' />
    <figcaption><em>Trunx Custom Component Context</em></figcaption>
  </figure>
</div>

<div style='display: flex; align-items: flex-end; justify-content: flex-end; flex-flow: row nowrap; width: 100%'>
  <figure>
    <img width=500 src='/images/posts/2019-01-31-react-native-context.png' />
    <figcaption><em>React Native Custom Component Context</em></figcaption>
  </figure>
  <figure>
    <img width=500 src='/images/posts/2019-01-31-wix-context.png' />
    <figcaption><em>Wix Custom Component Context</em></figcaption>
  </figure>
</div>

Some projects display context about the component.
These include attributes like:
* Description
* Source Code
* Props

About half of the projects implement some sort of *Context Pattern*.
The most popular is the default Storybook [Info Addon] which offers the attributes listed above.
However, some of the projects implemented their own version of the *Context Pattern*:
* [Trunx Storybook]
* [Wix Style React Storybook]
* [React Native Web Storybook]

###🤔 Thoughts

I see lots of value in using the [Info Addon].  I think custom context could be overkill unless you have the use case for it (e.g. Wix).

## Release Status Pattern

Both [Trunx Storybook] and [Coursera Storybook] implemented custom code to display the release status of each component.

###🤔 Thoughts
This is seems really valuable for big teams.

## Component TestKit Pattern

<figure>
  <img width=500 src='/images/posts/2019-01-31-wix-testkit.png' />
  <figcaption><em>Wix's TestKit</em></figcaption>
</figure>

Wix also implemented a new pattern `TestKit`, which provides React test snippets.

https://github.com/wix/wix-style-react/tree/master/testkit

# Conclusions

## Quality Tiers

In my opinion there are 3 tiers of Storybook projects within these 28 examples:
1. Incomplete - missing basic patterns that are easy to configure
2. Standard - following the basic patterns
3. Progressive - pushing the envelope with custom attributes

## Features

The *Incomplete* projects where missing some of the following items:
* Cover Stories - Seems too easy to not have
* Info Addon -  Seems too easy to not have
* Categories Menu - Requires some thought, but allows for a more mature project in the future
* Partial Fanning of Component Variations - A personal preference, but it has lots of benefits to the user

The following features are nice, but seem impractical given the effort required:
* Release Status
* Playground

## Examples

Here is how I break the examples down by category (bolded my personal favorites):

### Progressive
1. **[Trunx Storybook]**
1. **[Wix Style React Storybook]**
1. [Coursera Storybook]

### Standard
1. **[GumGum Storybook]**
1. **[Lucid UI Storybook]**
1. **[Hack Oregon Storybook]**
1. **[Vanilla React Storybook]**
1. [React Native Web Storybook]
1. [Tachyons Components Storybook]
1. [Artsy Force Storybook]
1. [Semantic-UI Storybook]
1. [Fyndiq Storybook]
1. [MockingBot Storybook]

### Incomplete
1. [Grommet Storybook]
1. [Carbon Components Storybook]
1. [Lonely Planet Storybook]
1. [Buffer Components Storybook]
1. [Cosmos Storybook]


[Coursera Storybook]: https://building.coursera.org/coursera-ui/
[Grommet Storybook]: https://storybook.grommet.io/
[Wix Style React Storybook]: https://wix.github.io/wix-style-react/
[Carbon Components Storybook]: http://react.carbondesignsystem.com
[Lonely Planet Storybook]: https://lonelyplanet.github.io/backpack-ui/
[Airbnb Dates Storybook]: http://airbnb.io/react-dates/
[Uber React-Vis Storybook]: https://uber.github.io/react-vis/website/dist/storybook/index.html
[Buffer Components Storybook]: https://bufferapp.github.io/buffer-components/
[Algolia InstantSearch Storybook]: https://community.algolia.com/react-instantsearch/storybook/
[Artsy Force Storybook]: https://artsy.github.io/reaction/
[React Native Web Storybook]: https://necolas.github.io/react-native-web/storybook/
[Griddle Storybook]: https://github.com/GriddleGriddle/Griddle
[Tachyons Components Storybook]: https://www.tachyonstemplates.com/components/
[Appbase Maps Storybook]: https://opensource.appbase.io/playground/
[Quran.com Storybook]: https://quran.github.io/common-components/
[TerraEclipse Storybook]: https://terraeclipse.github.io/react-stack/
[React Event Timeline Storybook]: https://rcdexta.github.io/react-event-timeline/
[Semantic-UI Storybook]: https://white-rabbit-japan.github.io/Semantic-UI-React-Storybook/
[Hack Oregon Storybook]: https://hackoregon.github.io/component-library/
[TodoMVC with Specs Storybook]: https://thorjarhun.github.io/react-storybook-todolist/
[React SVG Pan Zoom Storybook]: https://chrvadala.github.io/react-svg-pan-zoom/
[Fyndiq Storybook]: https://fyndiq.github.io/fyndiq-ui/
[GumGum Storybook]: https://storybook.gumgum.com
[Lucid UI Storybook]: https://appnexus.github.io/lucid/
[Trunx Storybook]: https://g14n.info/trunx
[Cosmos Storybook]: https://auth0-cosmos.now.sh/sandbox/
[MockingBot Storybook]: https://ibot.guide
[Vanilla React Storybook]: https://vanilla-framework.github.io/vanilla-framework-react/

[Coursera Storybook]: https://building.coursera.org/coursera-ui/
[Grommet Storybook]: https://storybook.grommet.io/
[Wix Style React Storybook]: https://wix.github.io/wix-style-react/
[Carbon Components Storybook]: http://react.carbondesignsystem.com
[Lonely Planet Storybook]: https://lonelyplanet.github.io/backpack-ui/
[Airbnb Dates Storybook]: http://airbnb.io/react-dates/
[Uber React-Vis Storybook]: https://uber.github.io/react-vis/website/dist/storybook/index.html
[Buffer Components Storybook]: https://bufferapp.github.io/buffer-components/
[Algolia InstantSearch Storybook]: https://community.algolia.com/react-instantsearch/storybook/
[Artsy Force Storybook]: https://artsy.github.io/reaction/
[React Native Web Storybook]: https://necolas.github.io/react-native-web/storybook/
[Griddle Storybook]: https://github.com/GriddleGriddle/Griddle
[Tachyons Components Storybook]: https://www.tachyonstemplates.com/components/
[Appbase Maps Storybook]: https://opensource.appbase.io/playground/
[Quran.com Storybook]: https://quran.github.io/common-components/
[TerraEclipse Storybook]: https://terraeclipse.github.io/react-stack/
[React Event Timeline Storybook]: https://rcdexta.github.io/react-event-timeline/
[Semantic-UI Storybook]: https://white-rabbit-japan.github.io/Semantic-UI-React-Storybook/
[Hack Oregon Storybook]: https://hackoregon.github.io/component-library/
[TodoMVC with Specs Storybook]: https://thorjarhun.github.io/react-storybook-todolist/
[React SVG Pan Zoom Storybook]: https://chrvadala.github.io/react-svg-pan-zoom/
[Fyndiq Storybook]: https://fyndiq.github.io/fyndiq-ui/
[GumGum Storybook]: https://storybook.gumgum.com
[Lucid UI Storybook]: https://appnexus.github.io/lucid/
[Trunx Storybook]: https://g14n.info/trunx
[Cosmos Storybook]: https://auth0-cosmos.now.sh/sandbox/
[MockingBot Storybook]: https://ibot.guide
[Vanilla React Storybook]: https://vanilla-framework.github.io/vanilla-framework-react/

[Storybook Examples]: https://storybook.js.org/examples/
[Storybook]: https://storybook.js.org
[Info Addon]: https://github.com/storybooks/storybook/tree/master/addons/info#storybook-info-addon
[lucid-docs-addon]: https://github.com/appnexus/lucid/tree/master/.storybook/lucid-docs-addon
[wix-style-react]: https://github.com/wix/wix-style-react
[trunx-custom]: https://github.com/fibo/trunx/blob/master/src/stories/elements.js
[react-native-custom]: https://github.com/necolas/react-native-web/blob/master/packages/website/storybook/1-components/Button/ButtonScreen.js
[Storybook Addon Knobs]: https://www.npmjs.com/package/@storybook/addon-knobs
