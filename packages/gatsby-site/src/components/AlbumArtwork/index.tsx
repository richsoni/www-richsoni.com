import React from "react";
const styles = require('./styles.module.css');
import ReactImageFallback from "react-image-fallback";

export default (props: any) => {
  const Overlay = props.overlay ? (
    <div className={styles.overlay}>
      <div className={styles.title}>{props.data.frontmatter.title}</div>
      <div className={styles.year}>{props.data.frontmatter.releaseYear}</div>
    </div>
  ) : (<div />)
  const ImageFallback = (
    <ReactImageFallback
      src={'/images/releases/'+props.data.fields.basename+'.png'}
      fallbackImage='/images/releases/default.png'
      className={styles.image} />
  )
  if(props.clickable) {
    return (
      <a
        className={styles.wrapper + ' ' + props.className}
        href={props.data.fields.url}
      >
        {ImageFallback}
        {Overlay}
      </a>
    );
  }
  return (
    <div
      className={styles.wrapper + ' ' + props.className}
    >
      {ImageFallback}
      {Overlay}
    </div>
  );
}

