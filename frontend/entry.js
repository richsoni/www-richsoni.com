const React = window.React = require("react")
const ReactDOM = window.ReactDOM = require('react-dom')
import moment from 'moment';
window.moment = moment;
import songEntry from "./apps/song/"

const pages = {
  home:     require("./apps/homepage/entry"),
  subscribe:    require("./apps/subscribe/entry"),
  blog:         require("./apps/blog-index/entry"),
  songIndex: require("./apps/song-index/entry"),
  shows: require('./apps/shows/'),
  songs: songEntry,
  show: require("./apps/show/"),
  post: require("./apps/blog-post/entry"),
}

window.App = {
  pages: pages,
  boot: function(page, attrs){
    let Component = pages[page]
    if (Component){
      ReactDOM.render(<Component {...attrs} />, document.body)
    } else {
      console.error(page, ' is not an app')
    }
  }
}
