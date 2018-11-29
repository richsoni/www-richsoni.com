import React from "react";
import style from './style.module.css';
import Layout from "../Layout"

export default (props) => {
  return  <Layout>
      <article className={style.article}>
      {props.children}
    </article>
  </Layout>
}
