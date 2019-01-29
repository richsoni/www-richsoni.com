import React from "react";
import HF from "../../shared/header-footer/";
import Disqus from "../../shared/disqus/component";

export default class Presenter extends React.Component {
  render() {
    const {
      slug, content, title, showsWithSong
    } = this.props
    const performedLive = showsWithSong.length > 0 ? `Performed Live: ${showsWithSong.length} ${showsWithSong.length === 1 ? 'time' : 'times'}` : ''
    return <HF>
      <h1>
        <a href="/songs">Songs</a> / {title}
      </h1>
      {performedLive}
      <div dangerouslySetInnerHTML={{__html: content}} />
      <h3>Comments</h3>
      <Disqus />
    </HF>
  }
}
