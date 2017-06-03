---
layout: post
date: 2014-11-14
title: "Sifting for Javascript, Ruby Style"
categories: []
avatar:   '/blog/posts/images/panning.jpg'
hero:   '/blog/posts/images/panning.jpg'
tags: []
revision: 1
blurb: Porting the Ruby's grep operator to javascript has great debugging advantages

---

<a class='caption' target="_blank" href='https://www.flickr.com/photos/thomasfisherlibrary/5954552837/in/photolist-a5bD76-8yo9on-8yroiu-cvpQNC-cvpQrA-kUxRG-6oM741-amN8eE-4uZddZ-EHLrQ-5Aphtr-2kdVUj-5keipH-eNhxFg-e9S1dg-2WajBx-e9S1ie-e9S19T-9sau5q-e9S1me-e9RZTV-e9S13z-e9S118-4Vny19-e9XF8U-e9XF6Y-3APYDN-27mzPz-e9RZMH-gsXzfr-2ZkT1k-4uyKqW-2ZkT7k-asosyR-asLrL7-6UU7yG-aeb3H1-9NGqDK-3iaHSo-asoxHR-asoypr-asrcfj-eA2h8-8gHYuy-dCKMCY-dCKRi7-bnsD2k-asrbUW-9NBZKi-djPA8w'>Header Photo credit to Thomas Fischer Rare Book Library</a>

# Panning for Rubies

It is difficult to wrangle long hashes, and big objects when debugging.
Often times, you know the name of the attribute or method, and need to visually scan through a list.
Ruby has a built in solution to make this process less painful:  The ```object.methods.grep``` and ```hash.keys.grep``` patterns.
Here is each one in action:

## Sifting Arrays

Filtering through arrays in Ruby is as easy as using the ```grep``` command.

```
> hash.methods.length
 => 147
> hash.methods.grep /to_/
=> [:to_hash, :to_h, :to_a, :to_s, :to_enum]
```

Instead of reading through a list of 147 entries, the programmer can filter it to what is important.

# Feeling the Pain

A common painpoint faced in javascript is sifting through json keys.
Sometimes you know the key is something like ```reference_number```, but ```object.reference_number``` is undefined.
In this case, you may need to pop open the object and read through the list.
If the key was ```order_reference_number``` it may be hard to find.
uspecially in a long list.

# A Solution

Here are two small tools inspired by Ruby's ```grep``` to mitigate this pain:

```javascript
Array.prototype.grep = function (regex) {
  this.filter( function (elem) {
    return elem.match(regex)})}

Object.grepKeys = function (object, regex) {
  Object.keys(object)
    .grep(regex)
    .reduce(function(memo, val){
      memo[val] = object[val];
      return memo}, {})}
```

With these methods at hand, wrangling arrays, and objects becomes much simpler:

```javascript
> array = ['foo', 'bar', 'baz']
> array.grep(/b/)
['bar', 'baz']
> array.grep(/ar/)
['bar']

> obj = [foo: 1, bar: 1, baz: 1]
> Object.grepKeys(obj, /oo/)
{foo: 1}
> Object.grepKeys(obj, /[^b]/)
{bar: 1, baz: 1}
```

I dont actually use these functions in my application code, but include them to make debugging less painful.

##  For The Faint Hearted

Some are weary of overwriting builtin prototypes.
This currying solution provided by [Ampersand55 on reddit](http://www.reddit.com/r/javascript/comments/2maw9q/sifting_for_javascript_ruby_style/) may suit them better than the above solution.

```
function grep(regex) {
  return function(el) {
    return regex.test(el)
  }
}
```

Enjoy, and happy coding!!!
