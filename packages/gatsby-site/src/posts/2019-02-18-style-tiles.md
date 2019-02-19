---
layout: post
date: 2019-02-18
categories: [changelog]
tags: [javascript design storybook]
revision: 1
title: "Style Tile Exercise for RichSoni.com"
hero: /images/posts/2019-02-18-stv6-story.png
---

# Style Tiles

I started reading [Brad Frost]'s book [Atomic Design].
Within the first pages, I felt the urge to put the book down and play with my site.

I was specifically inspired to implement [Style Tiles] on RichSoni.com.

<div style='width: 50%; float: right'>
  <img src='/images/posts/2019-02-18-style-tile-we.png' />
  <h5>Example Style Tile from <a href='http://styletil.es/'>Style Tiles</a></h5>
</div>

[Style Tiles] are an idea conceived by [Samantha Warren].
Warren describes them as: *'a design deliverable consisting of fonts, colors and interface elements that communicate the essence of a visual brand for the web.'* 

She also says, '*They help form a common visual language between the designers and the stakeholders and provide a catalyst for discussions around the preferences and goals of the client.*' 

# The Template

On the [Style Tiles] website, Warren provides a template [PSD], which can be used as a starting point.

I however, do not particularly enjoy working in Photoshop, and would much rather design in a way that can naturally borrow, evolve with, and contribute to my actual components.

<div style='width: 50%; float: right'>
  <img src='/images/posts/2019-02-18-tile-template.png' />
  <h5>Style Tile Template <a href='http://styletil.es/downloads/Style_Tile_Template.psd.zip'>PSD</a></h5>
</div>

The place I feel most comfortable designing is within the [RichSoni.com Storybook].
To me, this is a natural commonground between developer and designer.
When I am wearing both hats (designer, and developer) Storybook has a few advantage and disadvantages to the alternative approaches (No Prototype or Pure Prototype).

Writing code requires consideration of details that Photoshop and Figma tuck under the hood.
This however, can become problematic when designing.
Design requires a fast iteration loop, which is prevented by the complexities of writing code.

However, not considering those demands can cause design phases to make incorrect assumptions about effort.

This is where tools like [Storybook] shine.

By tucking the complexities of development away, [Storybook] enables a quick enough iteration loop for an experienced web developer to design a prototype.

<div style='width: 50%; float: right'>
  <img src='/images/posts/2019-02-18-tile-template-story.png' />
  <h5>Style Tile Template <a href='https://storybook.richsoni.com/?selectedKind=StyleTiles&selectedStory=default&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs'>Story</a></h5>
</div>


The savings happens when the final version of that prototype needs to be actually created.
The code written in [Storybook] can be reused, and productionized with significantly less effort (none if done correctly).

So, I took the [PSD] template [Samantha Warren] created, and turned it into a [StyleTile Story on RichSoni.com]

# Design Exercise

After I created this component, I could use [Storybook Addon Knobs] to edit the colors, and attributes in the browser:

<img width='900' src='/images/posts/2019-02-18-stv6-story.png' />

Then I can save this as its own story, to show get feedback.
This is the code for both the default template and my redesigned Safety Tapes Vol. 6 Theme:
```
// StoryTiles.stories.tsx
import StyleTile from "@richsoni/style-tile";
import { array, color, text, withKnobs} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

const stories = storiesOf("StyleTiles", module);

stories.addDecorator(withKnobs);

stories.add("default", () => (
  <div style={{width: 1200, margin: "auto auto"}}>
    <StyleTile
      tileVersion={1}
      adjectives={array("Adjectives", [
        "Example",
        "Adjective",
        "Another Example",
      ])}
    />
  </div>
));

stories.add("STV6", () => (
  <div style={{width: 1200, margin: "auto auto"}}>
    <StyleTile
      projectName="RichSoni.com"
      tileVersion={1}
      logoSRC={text("Logo SRC", "https://richsoni.com/static/logo-300-ccaf244cfbddb3bd8bc2478b293c0b3a.png")}
      colors={{
        background: color("Color: background", "#ffffff"),
        foreground: color("Color: foreground", "#000000"),
        primaryColor: color("Color: primaryColor", "#1565c0"),
        primaryColorSoft: color("Color: primaryColorSoft", "#4DAAF6"),
        secondaryColor: color("Color: secondaryColor", "#FF5F00"),
        secondaryColorSoft: color("Color: secondaryColorSoft", "#F7A65B"),
      }}
      textures={array("Texture Images", [
        "https://richsoni.com/images/releases/safety-tapes-vol-6.png",
        "https://www.richsoni.com/images/releases/safety-tapes-vol-5.png",
        "https://www.richsoni.com/images/releases/safety-tapes-vol-3.png",
        "https://www.richsoni.com/images/releases/live-2017-07-16-pine-island.png",
      ])}
      adjectives={array("Adjectives", [
        "Prolific Songwriter",
        "Frontend Developer",
        "Storyteller",
        "Thinker",
        "Writer",
        "Creator",
      ])}
    />
  </div>
));
```

When this component gets just a tad more mature, I publish it for anyone to use in their own projects.

[Storybook Addon Knobs]:https://www.npmjs.com/package/@storybook/addon-knobs
[Storybook]: https://storybook.js.org
[RichSoni.com Storybook]: https://storybook.richsoni.com
[PSD]: http://styletil.es/downloads/Style_Tile_Template.psd.zip
[Samantha Warren]: https://twitter.com/intent/user?screen_name=samanthatoy
[Style Tiles]: http://styletil.es/
[Atomic Design]: https://shop.bradfrost.com/
[Brad Frost]: http://bradfrost.com/
[StyleTile Story on RichSoni.com]: https://storybook.richsoni.com/?selectedKind=StyleTiles&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
