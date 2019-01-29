import React from "react";
const style =  require('./style.module.css');
import Layout from "../Layout"

export default (props: any) => {
  return  <Layout>
      <article className={style.article}>
      {props.children}
    </article>
  </Layout>
}
