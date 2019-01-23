---
layout: post
date: 2019-01-23
categories: [opinions]
tags: [javascript css]
revision: 1
title: "An Argument for Pure CSSModules"
hero: 
---

# 👁 😍 Pure CSSModules

For better or for worse here are my current opinions on Styling React Components.

tldr;

Here are my opinions:
* *Opinion 1*: CSS should be used to describe _How_ a component is displayed by the _browser_
* *Opinion 2*: CSS Needs To Be Less Global
* *Opinion 3*: Pure CSSModules are the Only Styling Most Applications Need


## ⭐ Opinion 1: StyleSheets should be used to describe _How_ a component is displayed by the _browser_

Browsers are optimized to style components most efficiently when working with CSS in a StyleSheet.

### Alternatives

To understand why I hold this opinion, its important to consider the alternative approaches:
* Inline JSX Styles
* `<style>` tag Injecting Libraries ([Radium], [StyledComponents])

Chris Coyier put a lot of thought into this argument in his article [The Debate Around 'Do We Even Need CSS Anymore?'].
He outlines the following advantages for Inlining styles over CSS: 
* Cascade-less
* All Javascript
* Dynamic Styles

### Technical Benefits

While its easy to use they arguments to convince yourself to use an inline approach, to me its advantages are what brought me back:
* Cachability - by separating styles into a separate stylesheet, the cachability of these assets is improved
* Specificity Spectrum Obfuscation - Javascript approaches often deny or at a minimum obfuscate the specificity spectrum feature of CSS `!important`.  Each approach compromises it for different reasons.  For example, inline styles are the top of the spectrum, so to override any inline style an `!important` is required
* States - `:hover`, `:focus`, etc. are not supported in Inline Styles
* Custom Browser Optimizations and hooks - Using rules specific for browsers `-moz`, and GPU enabled transforms etc, are just not possible with inline styles

Most of these only apply to InlineStyles.  Dynamically adding many `<style>` tags has a memory and CPU performance concern on the browser.
[StyledComponents] also adds many extra `div` elements making the markup of the site messy, and increasing memory and CPU requirements of the site.

Talia Marcassa makes a great point in [Styled Components: To Use or Not to Use?]
> Use Styled Components for elements whose styling (colours, images, etc.) is configured by the user

Having used both CSSMoudles, Sass, and Inline Styles to implement a user definable style, I can definitely see how [StyledComponents] is the right tool for that job.
In this use case I would consider using [StyledComponents], but in other cases, I simply feel that it is unnessisary.

###  🖖Speaking The Right Language

Besides the technical reasons I prefer using CSS, there is also a social driver as well.

In essence, CSS is a language for describing *how* elements should be displayed by a browser.
Since this is usually *negotiated between developers and designers* it seems logical to consider Conway's Law when making technical desisions about that relationship.

>  Any organization that designs a system (defined more broadly here than just information systems) will inevitably produce a design whose structure is a copy of the organization's communication structure ~ Melvin Conway ([Conway's Law])

In this regard, Conway's Law suggests that the system design should consider the channel between design and engineering.

While expecting a designer to grok inline JSX or `style` tag injection could be stretch, most designers can communication in CSS.

For this reason alone, I am prone to prefer a CSS Solution.

### Communication Channels When Creating Components:
<img width='800' src='/images/posts/2019-01-23-speaking-dev.svg' />

# ⭐ Opinion 2: CSS Needs To Be Less Global

As Opinion 1 states, I believe styles usually belong in CSS.  However, I also believe that CSS is flawed.

It is simple - CSS is global by default, and this causes namespace pollution and component coupling.

CSSModules does one simple thing:
> A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. ~ [CSSModules]

It does this by creating unique style names for each component:
```
/* ./src/Components/styles.module.css */
.item {
  background: blue;
}

// ./src/Component1/index.jsx
import styles from './styles.module.css'
console.log(Object.keys) // ['.style-module--Component1-item-3TXyA']
export default(() => <div className={styles.item} />)

/* ./src/Component2/styles.module.css */
.item {
  background: black;
}

// ./src/Component2/index.jsx
import styles from './styles.module.css'
console.log(Object.keys) // ['.style-module--Component2-item-0YoeF']
export default(() => <div className={styles.item} />)
```

In many ways this makes CSSModules an automated version of a system like [BEM].

## Refuting Inline Styles

The simple act of exporting unique module names, essentially makes inline styles a poor choice over CSSModules.
CSSModules are widely supported by all JSX compilers, and are included by default in [Create React App].

With CSSModules the case for Inline Javascript dissapears.  Consider this example which showcases the advantages of CSS while accomplishing the goals of Inline Styles:
```
// ./styles.module.css
@theme-font-size: 10px;

:global {
  body {
    color: linen;
  }
}

.cascada {
  font-size: $theme-font-size;
}

.cascada a {
  text-decoration: underline;
}

.cascada--highlight {
  composes: cascada;
  background-color: yellow;
}

.cascada--highlight:hover a {
  background-color: black;
  color: white;
}


// index.js
import styles from {'./styles.module.css'}
export default((props) => {
  const cascadaClass = props.modifier ? styles.cascada : .style.cascada--highlight
  return (
    <div className={props.containerClassName || styles.cascada}>
      <a>Some Link</a>
    </div>
  )
})
```

Unlike Inline Styles, CSSModules allow the developer to control tame the Cascade.
Additionally, we can see the use of logic when selecting between `cascada` and `cascada--highlight` classes (notice the influence of BEM on the class names in this module).

The compiler will create one concatenated CSS file with the unique classes.

This makes the site more cachable.

### The biggest benefit

This is just CSS.  This means a designer can grok it.  

# ⭐ Opinion 3: Pure CSSModules are the Only Styling Most Applications Need

At this point, there is only one other big option left unturned which is Sass.

Sass has a few downsides:
* node-sass is a compiled node package, and its a piece of garbadge.  When it comes to CI, build speed, etc. this library is always a bottle neck.  I think I have spent more time in my life debugging node-sass than I have writing css.  Which is why I opt to just write the CSS.
* The nested `&` operator and `mixins`, obfuscate class names from source code in an extreme mannor.  In some cases it can take a very long time to identify the source of a rule.  Much longer than just writing CSS.
* Too many options leads to overengineered styling.  Just as [Occam's Razor] states, the simplest solution is the best solution, and in the following case I believe CSS is the more simple solution:

```
/* ./src/components/Component1/styles.module.css
.item { background: black }
.item:hover { background: smoke }
.item__modified { background: blue }
.item__special { composes special from '../../shared/special.module.css' }

/* ./src/shared/styles/special.module.css
.special {
  background: green;
}

// ./src/components/Component1/styles.scss
include '../../shared/special.scss'
.Component1 {
  .item {
    background: black;
    &:hover { background: smoke; }
    __modified: { background: blue; }
    __special { extends %special }
  }
}

// ./src/components/shared/special.scss
@mixin special {
  background: green;
}
```

# Conclusion

In my opinion, the solution with CSSModules is often not only more simple, shorter, but its also legible to a wider audience than the alternatives.

[Conway's Law]: http://www.melconway.com/Home/Committees_Paper.html
[CSS Evolution: From CSS, SASS, BEM, CSS Modules to Styled Components]: https://medium.com/@perezpriego7/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b
[Radium]: https://github.com/FormidableLabs/radium
[Less]: http://lesscss.org/
[Sass]: https://sass-lang.com/
[StyledComponents]: https://www.styled-components.com/
[Styled Components: To Use or Not to Use?]: https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21
[The Debate Around 'Do We Even Need CSS Anymore?']: https://css-tricks.com/the-debate-around-do-we-even-need-css-anymore/
[CSSModules]: https://github.com/css-modules/css-modules
[BEM]: http://getbem.com/
[Create React App]: https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet
[Occam's Razor]: https://en.wikipedia.org/wiki/Occam's_razor
