import React from "react";
import style from './style.module.css';

export const Breadcrumb = (props) => {
  if(props.href){
    return <a className={style.breadcrumb} href={props.href}>{props.children}</a>
  }
  return <span className={style.breadcrumb}>{props.children}</span>
};

export const Breadcrumbs =  (props) => {
  return <section className={style.breadcrumbs}>
    {props.children}
  </section>
}
