import React from "react";
import AlbumArtwork from '../AlbumArtwork/';
import styles from './styles.module.css';

export default (props) => {
  return <div>
      <AlbumArtwork data={props.data} className={styles.artwork} />
      <div>{props.data.frontmatter.title}</div>
    </div>

};
