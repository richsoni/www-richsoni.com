/**
 * @class Table
 */

import * as React from 'react';
import {orderBy} from 'natural-orderby';

import styles from './styles.css';

export interface TableItem {
  [key: string]: string;
  _id: string;
}

export type Props = {
  attributes: string[],
  sortBy: string,
  sortDir: 'asc' | 'desc',
  items: TableItem[],
}

export type State = {
  localSortBy: string,
  localSortDir: 'asc' | 'desc'
}

const Row = (props: {
  item: TableItem,
  attributes: string[],
}) => {
  const { item, attributes } = props;
  return (
    <a
      className={styles.row}
      href={item.href}
    >{
      attributes.map(attribute => (
        <span key={attribute}>
          {item[attribute]}
        </span>
      ))}
    </a>
  )
}

export default class Table extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {
      localSortBy: props.sortBy,
      localSortDir: props.sortDir,
    }
  }

  render(){
    const { attributes, items } = this.props;
    const {localSortDir, localSortBy} = this.state;
    return (
      <div className={styles.table}>
        <header>
          {attributes.map((attribute) =>{
            return (
              <span
                key={`TABLE_HEADER${attribute}`}
                className={localSortBy === attribute ? styles['titleSorting'+localSortDir.toUpperCase()] : ''}
                onClick={() => {
                  if(attribute === localSortBy){
                    if(localSortDir === 'asc'){
                      this.setState({localSortDir: 'desc'})
                    } else {
                      this.setState({localSortDir: 'asc'})
                    }
                  } else {
                    this.setState({localSortBy: attribute})
                  }
                }}
              >
                  {attribute}
              </span>
            )
          })}
        </header>
        {orderBy(items, localSortBy, localSortDir).map(item => <Row key={item._id} item={item} attributes={attributes} /> )}
      </div>
    )
  }
}
