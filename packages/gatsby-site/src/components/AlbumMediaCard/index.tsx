import React from "react";
// import AlbumArtwork from '../AlbumArtwork/';
const styles = require('./styles.module.css');

export default (props: any) => {
  const url = `https://archive.org/embed/${props.data.frontmatter.links.archiveID}&playlist=1`;
  return <div>
      <h1 className={styles.title}>{props.data.frontmatter.title}</h1>
      <iframe src={url} width="500" height="1000" frameBorder="0"></iframe>
    </div>

};
