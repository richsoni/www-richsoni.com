import React from 'react';
import HF from '../../shared/header-footer/';
import styles from './styles';

export const Table = (props) => {
  const {fields, items} = props
  const titles = fields.map((f) => f.title)
  const keys = fields.map((f) => f.key)
  return <div className={styles.table}>
    <header>
      {titles.map((t) => <span>{t}</span>)}
    </header>
    {items.map((i) => <a href={i.url}>
        {keys.map((k) => <span>{i[k]}</span>)}
      </a>
    )}
  </div>
}
