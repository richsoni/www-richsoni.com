const React = require('react')

const buildURL = function(playlistId, color){
  return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${playlistId}&amp;color=${color}&amp;theme_color=${color}&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false`
}

class SoundCloudPlaylist extends React.Component{
  render(){
    return <iframe
      height='100%'
      scrolling="no"
      frameborder="no"
      src={buildURL(
        this.props.playlistId,
        this.props.color
      )}
    />
  }
}

SoundCloudPlaylist.propTypes = {
  playlistId: React.PropTypes.string.isRequired,
  color: React.PropTypes.string,
}

SoundCloudPlaylist.defaultProps = {
  color: '000000'
}
module.exports = SoundCloudPlaylist
