---
layout: post
categories: [coding]
avatar: '/blog/posts/images/github_pages_small.png'
hero: '/blog/posts/images/github_pages.png'
tags: coding
blurb: 'The experience is painless, and fruitful.  It is useful for a multitude of purposes'
title: 'Using Github Pages To Host Your Blog'
date: 2013-12-03
depricated: true
---

# Its Free and Easy

I have used a handful of different methods to host my personal site over the years.  
Each has been fine, but my most recent port has been my favorite, and the easiest to implement / manage.  

When I decided to redesign I had the following requirements:

1.  Hosting that is a cheap as possible
1.  Front End heavy architecture with little to no back en
1.  Quick to set up so I can start writing instead of coding
1.  **The ability to edit my posts in vim / save them in a git repo, so they are in effect not married to the design**

There are several parts to this article:

  1.  [The Technologies](#TheTechnologies)
  2.  [Setup](#Setup)
  3.  [Appendix - Namecheap DNS Settings](#dns)


# The Technologies

  I landed on using [github pages](http://pages.github.com/) to host my site after some floundering with a rails app on heroku, and a wordpress app.  
  It is nice because its free, and gives you a lot right out of the box if you go along with its conventions.  

  Even though I have design skills, I outsourced that work, and bought a template from [wrapbootstrap](http://wrapbootstrap.com).  
  I did this because I was eager to start writing, and its an easy way to get up and running with a polished.  

  [Github Pages](http://pages.github.com/) uses [Jekyll](http://jekyllrb.com) to generate your blog in html.


## Jekyll

  [Jekyll](http://jekyllrb.com) uses [The Liquid Templating Engine](http://liquidmarkup.org/), and [Yaml](http://yaml.org/) to generate a static blog.
  It took a bit to get used to [Jekyll](http://jekyllrb.com), but once I figured out a workflow it became painless to  cut the [wrapbootstrap](http://wrapbootstrap.com) theme into it. 
  Since you just write each post in a [Markdown](http://www.whatismarkdown.com/) file, there is not much to actually getting your content loading in [Jekyll](http://jekyllrb.com).  

# Setup

  It took some fishing to get my site setup properly, so I am going to outline what I did below.  

  <h4> Get the site up </h4>

  1.  Create a repo on github, make sure the name is ```(your_unique_sitename).github.io``` because that is how github knows to make a site from the repo.  [(how to create a repo)](https://help.github.com/articles/create-a-repo) [(github pages help)](https://help.github.com/categories/20/articles)
  2.  Clone the repo locally if you have not already
  3.  ```gem install jekyll```  [(how to)](http://jekyllrb.com/docs/installation/)
  4.  cd into the repo foler and run ```jekyll new```
  5.  ```git add .; git push origin HEAD```
  6.  navigate to ```(your_unique_sitename).github.io```, and you should see the jekyll project.
  8.  Add a CNAME file to the root of your project with the domain name in it, so github can route the subdomain properly [see mine](https://github.com/richsoni/richsoni.github.com/blob/master/CNAME)
  7.  When you are ready get point a URL to this page from your DNS provider [(see A1 for my settings)]('#a1').  I found the IP address that my page should point to (```204.232.175.78```) on [this page](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).

<h4> Configure Your Jekyll Site </h4>

  1.  Open _config.yml, and edit its contents.  If you want to copy mine [its here](https://github.com/richsoni/richsoni.github.com/blob/master/_config.yml)
  2.  Start jekyll by running ```jekyll serve -w``` the ```-w``` tells it to regenerate the files when you save.  Note: all files are generated in the _publish folder which is in the .gitignore file by default when you run ``jekyll new`` (i.e. they are only for development)
  3.  Navigate to localhost:4000 to view your site
  4.  Cut up your template into Jekyll.  I used [the documentation](http://jekyllrb.com/docs/home/), but here are some quick tips to get started.

      a. The _layouts folder contains templates that will wrap around all files that use it (declared in the YAML [Front Matter](http://jekyllrb.com/docs/frontmatter/)
         you render the page content in liquid by putting ``{ {content} }``
      b. To generate partials, create a file in the _includes folder, and put ``{ % include filename % }``
      c. You can declare any variable in the [Front Matter](http://jekyllrb.com/docs/frontmatter/), and use it in the template.  It is not reserved for Jekyll only vars
      d. Use _data to declare static data in yaml.  I used this for my Project blurb section.
      e. If you want to use markdown but not in a blog post, you can.  Just write it and Jekyll will compile it to html.  For example, ``projects/carbon.md => projects/carbon.html' which can be navigated to in the browser.
         These files also can leverage [Front Matter](http://jekyllrb.com/docs/frontmatter/), so slap a layout around it.

<hr>

<h3 id='a1'>A1) My Namecheap DNS Settings</h3>

```
Host Name: @
  IP:  204.232.175.78
  Type: A (Address)
Host Name: www
  IP:  richsoni.github.io.
  Type: CNAME (Alias)
```
