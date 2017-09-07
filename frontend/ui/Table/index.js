import React from 'react';
import HF from '../../shared/header-footer/';
import styles from './styles.module.css';

const Row = (props) => {
  const {
    url,
    fields,
    attributes
  } = props
  return <a
    href={ url }
  > { fields.map((f) => {
      return <span> {attributes[f.key]} </span>
    }) }
  </a>
}

const sort = (items, sortKey, sortDirection) => {
  const customSort = sortKey['sort'+sortDirection];
  if(customSort){ return items.sort(customSort) }
  return items.sort((sA, sB) => {
    const a = sA[sortKey]
    const b = sB[sortKey]
    if(!a && !b) { return 0 }
    if(sortDirection === 'ASC'){
      if(!a) { return 1 }
      if(!b) { return -1 }
      return a.localeCompare(b)
    } else {
      if(!b) { return 1 }
      if(!a) { return -1 }
      return b.localeCompare(a)
    }
  })
}

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    const sortKey = props.sortDefaultKey || props.fields[0].key;
    const sortDirection = props.sortDefaultDirection || 'ASC';
    const items = sort(props.items, sortKey, sortDirection);
    this.state = {
      sortKey,
      sortDirection,
      items
    };
  }

  render() {
    const {fields} = this.props
    const {items} = this.state
    const titles = fields.map((f) => f.title)
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

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: sort(nextProps.items, this.state.sortKey, this.state.sortDirection)
    })
  }
}
