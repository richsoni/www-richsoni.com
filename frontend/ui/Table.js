import React from 'react';
import HF from '../../shared/header-footer/';
import styles from './styles';

const Row = (props) => {
  const {
    url,
    fields,
    attributes
  } = props
  return <a
    href={ url }
  > { fields.map((f) => {
    <span> {attributes[k]} </span>
  }) }
}

export const Table = (props) => {
  const {fields, items} = props
  const titles = fields.map((f) => f.title)
  const keys = fields.map((f) => f.key)
  return <div className={styles.table}>
    <header>
      {titles.map((t) => <span>{t}</span>)}
    </header>
    {items.map((i) => <Row
      url={i.url}
      fields={fields}
      attributes={i}
    />)}
  </div>
}
