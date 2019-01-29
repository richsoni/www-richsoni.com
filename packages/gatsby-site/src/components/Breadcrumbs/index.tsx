import React from "react";
const style = require('./style.module.css');

export const Breadcrumb = (props: any) => {
  if(props.href){
    return <a className={style.breadcrumb} href={props.href}>{props.children}</a>
  }
  return <span className={style.breadcrumb}>{props.children}</span>
};

export const Breadcrumbs =  (props: any) => {
  return <section className={style.breadcrumbs}>
    {props.children}
  </section>
}
