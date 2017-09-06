import React from "react";
import HF from "../../shared/header-footer/";
import Disqus from "../../shared/disqus/component";

export default class Presenter extends React.Component {
  render() {
    const {
      slug, content, title
    } = this.props
    return <HF>
      <h1>
        <a href="/songs">Songs</a> / {title}
      </h1>
      <div dangerouslySetInnerHTML={{__html: content}} />
      <h3>Comments</h3>
      <Disqus />
    </HF>
  }
}
