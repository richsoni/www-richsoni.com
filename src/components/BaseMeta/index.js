import React from "react";
import Helmet from 'react-helmet';
import favicon from './favicon.png';

//TODO
// <link rel="alternate" type="application/rss+xml" title="RichSoni.com" href="/feed.xml">
    // {% if page.title %}
    //   <title>Rich Soni - {{ page.title }}</title>
    // {% else %}
    //   <title>Rich Soni</title>
    // {% endif %}
    // <meta property="og:url" content="{{page.url}}" />
    // <meta property="og:title" content="{{page.title}}" />
    // <meta property="og:image" content="{{ page.attributes.image }}" />

export default () => {
  return (
    <Helmet>
      <link rel="icon" type="image/png" href={favicon} />
      <meta name="viewport" content="initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
      <meta property="og:type" content="website" />
    </Helmet>
  )

}
