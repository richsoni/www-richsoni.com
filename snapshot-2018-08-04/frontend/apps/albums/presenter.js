"use strict"
import React from 'react';
import values from 'object.values';
import HF from "../../shared/header-footer/"
import styles from './styles.module.css';

// 2 until 750px
// 4 until 1000
// 1 50%, and the rest equal

const Release = (props) => {
  const {title, released_on, url, slug} = props
  return <a
    className={styles.item}
    href={url}
    style={{backgroundImage: `url(/images/releases/${slug}.png`}}
  >
    <div className={styles.overlay}>
      <div className={styles.title}>{title}</div>
      <div className={styles.year}>2017</div>
    </div>
  </a>
}

export default (props) => {
  const {
    releases
  } = props
  return <HF>
    <div className={styles.list}>
      {values(releases).map((r) => {
        return <Release key={r.slug} {...r} />
      })}
    </div>
  </HF>
}
