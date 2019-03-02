/**
 * @class Table
 */

import * as React from 'react'

import styles from './styles.css'

export interface TableItem {
  [key: string]: string;
  _id: string;
}

export type Props = {
  attributes: string[],
  sortBy: string | string[],
  sortDir: 'ASC' | 'DESC',
  items: TableItem[],
}

const Row = (props: {
  item: TableItem,
  attributes: string[],
}) => {
  const { item, attributes } = props;
  return (
    <a className={styles.row}>{
      attributes.map(attribute => (
        <span key={attribute}>
          {item[attribute]}
        </span>
      ))}
    </a>
  )
}

export default class Table extends React.Component<Props> {
  render() {
    const { attributes, sortBy, sortDir, items } = this.props

    return (
      <div className={styles.table}>
        <header>
          {attributes.map((attribute) =>{
            return (
              <span key={attribute} className={sortBy === attribute ? styles['titleSorting'+sortDir] : ''}>{attribute}</span>
            )
          })}
        </header>
        {items.map(item => <Row key={item._id} item={item} attributes={attributes} /> )}
      </div>
    )
  }
}
