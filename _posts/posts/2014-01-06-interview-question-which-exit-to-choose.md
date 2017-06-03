---
layout: post
categories: [Coding]
avatar: '/blog/posts/images/road_small.jpeg'
hero:   '/blog/posts/images/road_big.jpg'
tags: [Coding, Interview Questions]
blurb: 'If you need something the interviewee has not heard before'
title: 'Interview Question: Which Exit To Choose'
date: 2014-01-06
---

# The Problem

Here's an interesting interview question I thought of on my way home from a party recently.

1.  You are parked at some starting point `SP` which is between 2 exits `E1 and E2`
1.  We were at a cross road with Road 1 `R1` at our `SP`
1.  Our starting point is set between exit 1 and exit 2 on the highway `E1 and E2` of road 2 `R2`
1.  To reach our destination we must reach exit 4 `E4` which is past `E2`
1.  Speed limit of `R1` = 25, `R2` = 50 (double)

### ??? When will going to E1 be faster ???

From `SP` at which distance is it faster to go back to `E1` instead of going forward to `E2`.

# The Solution

<button onclick="document.getElementById('answer').style.display = 'block'"> Show Answer </button>
<div id='answer' style='display:none'>
  <i>If `D2` is > 1/4 of `D3` then ``E1`` is faster.</i>
  <img class='img-responsive' src='/blog/posts/images/road.png'/>

### Note that:

1.  `D1 = D3 - D2` (i.e. D2 is always a shorter distance)
1.  `D2` and `D1` both have the same speed (`R1`), `D3` is double ( or .5 the distance )
1.  Since `R2` is 2x the speed of `R1` it will take half as long to travel
1.  If `S1` is closer than half way then `D1` will always be faster than `D3` alone.  Meaning the faster route is determined before the car arrives at `E1`
1.  In the same vein, for `E1` to be faster the car needs to arrive before it would have reached `1/2 * D3`)
1.  Since they travel at the same speed if `S1` if 1/4 of the way between `E1` and `E2`, and it would reach `E1` at the same time that it would reach `1/2 * D3` (i.e. `< 1/4 of D3`)


</div>

# In Conclusion

Its about how the interviewee answers the question, not the answer they give.  
So, take note of the interviewees thought process while solving the problem.  

**Remember:** The question is better when you word it like I did.  
Do not say *Which route is faster*.  
That is not the question, it is *When is going backward faster*.  
This will force the interviewee to use a logical thought instead of a geometrical.
