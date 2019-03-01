---
layout: post
date: 2019-02-28
categories: [email, changelog]
tags: [javascript experiment email music-business]
revision: 1
title: "Experimenting with React Email Templates"
hero: "/images/posts/2019-02-28-hero.png"
---

# 🏋 Motivation

In some recent posts, I outlined a some different ideas I have been experimenting with and thinking about:

* [Comparing Lerna Storybook Architectures] chronicles some of the thought I have been putting into architecting a monorepo which can serve as the backbone for many of my hobby projects
* [Storybook Architecture Audit] is an exploration of the different ways to use and architect a frontend design system in [Storybook]
* [Style Tile Exercise for RichSoni.com] introduces a pattern I read about in [Atomic Design] which enables me to prototype alongside my code
* Lastly, [Experiment: Email Subject Lines (With Nilsen Strandskov)] outlines a first attempt at revamp my email process, since this is an area I have neglected for a long time, but I see a lot of value in giving focus

This post describes a some code experimentation I did to synthesize elements of the content of the posts listed above.

# 🏝 Goals

## The Primary Goal

My primary goal was to just send a pretty standard email with an event reminder.
Very similar to the one described in [Experiment: Email Subject Lines (With Nilsen Strandskov)].

## Secondary Goals

I have some requirements for email in my system:
* Emails must work in most clients, or degrade nicely
* Emails should adhere to the principles outlined in [Atomic Design] system
* Email code should be as close and similar as possible to application code.  *This promotes reuse of critical elements (theming etc.), as well as opens the potential for future automation*
* Email code should be as simple as possible
* Email should be visible and accessible to engineering, design, and product

These requirements are not currently satisfied.
I wanted to apply the lessons learned from previous experiments to satisfy some of those requirements.

# ⏏ Ejecting From MailChimp Campaign Builder

<div style='padding: 10px'>
  <img src='/images/posts/2019-02-28-mailchimp-editor.png' />
  <h5>My old Template in the <a href='https://www.mailchimp.com'>Mailchimp</a> Editor</h5>
</div>

I have a template that I built within the [MailChimp] email editor, which I have used / refined for several years.
Designing a new template seemed counter productive.
Instead, I chose to rewrite the template in the [RichSoni.com Storybook] which could satisfy my secondary goals for this experiment:
* Emails must work in most clients, or degrade nicely
* Emails should adhere to the principles outlined in [Atomic Design] system
* Email code should be as close and similar as possible to application code.  *This promotes reuse of critical elements (theming etc.), as well as opens the potential for future automation*
* Email code should be as simple as possible
* Email should be visible and accessible to engineering, design, and product

<div style='padding: 10px'>
  <img src='/images/posts/2019-02-28-openmic-email.png' />
  <h5>My new Template in the <a href='https://storybook.richsoni.com'>RichSoni.com Storybook</a></h5>
</div>

# ⚗ Atomizing


[Atomic Design] is a mental model for thinking about UI components.
The premise is generally common sense for a developer, but is revolutionary when leveraged as a tool for communicating with a team and stakeholders.
[Storybook] is just one tool that can be used to implement [Atomic Design] principles.

<div style='width: 100%'>
<div style='width: 400px; float: right; padding: 10px'>
  <img src='/images/posts/2019-02-28-theme-box.png' />
  <h5>Theme Box</h5>
</div>

<div style='width: 400px; float: right; padding: 10px'>
  <img src='/images/posts/2019-02-28-open-mic.png' />
  <h5>Open Mic Night Atom</h5>
</div>

<div style='width: 400px; float: right; padding: 10px'>
  <img src='/images/posts/2019-02-28-header.png' />
  <h5>Header Atom</h5>
</div>
</div>

# Outlook Compatibility

I also put some effort into making my email more resilient to email client compatibility quirks.

* [How To Create HTML Email Newsletters To Look The Same – Even In Outlook]
* [Email Width And Sizes]
* [Email Client Feature List]
* [Outlook Conditional CSS]

After doing this research, I wondered if there was tooling to make this easier.

I settled on giving [react-html-email] a shot.

## react-html-email

[react-html-email] provides some really neat features:
* **renderEmail(emailComponent)**:  Render an email component to an HTML string. Adds an XHTML 1.0 Strict doctype, as per [HTML Email Boilerplate]
* **configStyleValidator(config)**: By default, inline styles passed to the style prop will be validated against Campaign Monitor's [CSS Support Guide]
* Support for mailchimp `mc` HTML attributes

## Using in Storybook

At this moment, I am only really leveraging one component from this library: `renderEmail`.

I wired `renderEmail` to a prop on my own `Email` component.
This prop can be controlled by a [Storybook Knob] to reveal the source for the email.

<video controls style='border: 2px solid #bebebe'>
  <source src="/images/posts/2019-02-28-email.mp4" type="video/mp4">
</video>

# 🏁 Conclusions

This was experiment merely opens the door for lots of really interesting ideas in the future.
Here are some I would like to try:
* Automatically creating emails for upcoming events
* Fully leverage [react-html-email], and possibly even contribute some new features to that project

[Storybook Knob]: https://www.npmjs.com/package/@storybook/addon-knobs
[HTML Email Boilerplate]: https://github.com/seanpowell/Email-Boilerplate
[Experiment: Email Subject Lines (With Nilsen Strandskov)]: https://www.richsoni.com/posts/2019-02-22-experiment-email-subject-line-with-nilsen-strandskov/
[Atomic Design]: https://shop.bradfrost.com/
[Style Tile Exercise for RichSoni.com]: https://www.richsoni.com/posts/2019-02-18-style-tiles/
[Comparing Lerna Storybook Architectures]: https://www.richsoni.com/posts/2019-01-24-comparing-lerna-storybook-architectures/
[Storybook Architecture Audit]: https://www.richsoni.com/posts/2019-01-29-storybook-architecture-audit/
[How To Create HTML Email Newsletters To Look The Same – Even In Outlook]: https://robcubbon.com/create-html-email-newsletters-outlook/
[Email Width And Sizes]: https://www.campaignmonitor.com/resources/guides/email-width-and-sizes/
[CSS Support Guide]: https://www.campaignmonitor.com/
[Email Client Feature List]: https://www.campaignmonitor.com/
[Outlook Conditional CSS]: https://templates.mailchimp.com/development/css/outlook-conditional-css/
[Storybook]: https://storybook.js.org
[RichSoni.com Storybook]: https://storybook.richsoni.com/
[Mailchimp]: https://mailchimp.com
[react-html-email]: https://github.com/chromakode/react-html-email
