import React from "react";
import style from './style.module.css';

export default (props) => {
  return <article className={style.article}>
    {props.children}
  </article>
}
