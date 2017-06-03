const React = window.React = require("react")

const pages = {
  home:     require("./apps/homepage/entry"),
  subscribe:    require("./apps/subscribe/entry"),
  blog:         require("./apps/blog-index/entry"),
  songIndex: require("./apps/song-index/entry"),
  songs:        require("./apps/song/entry"),
  post: require("./apps/blog-post/entry"),
}

window.App = {
  pages: pages,
  boot: function(page, attrs){
    let Component = pages[page]
    if (Component){
      React.render(<Component {...attrs} />, document.body)
    } else {
      console.error(page, ' is not an app')
    }
  }
}
