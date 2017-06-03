class EventsHalf extends React.Component {
  render(){
    return <iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frichsonimusic&tabs=events&width=1000&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=190656394463883"
      style={{
        border:'none',
        width: '500px',
        minHeight: '780px',
      }}
      scrolling="no"
      frameborder="0"
      allowTransparency="true"
    ></iframe>
  }
}

module.exports = EventsHalf
