import React from 'react';
import styles from './styles.module.css';

const SORTASC = true;
const SORTDESC = false;
const Row = (props) => {
  const {
    url,
    fields,
    attributes
  } = props
  return <a
    href={ url }
  > { fields.map((f) => {
      const text = attributes[f.key];
      return <span key={f.key}> {String(text || '')} </span>
    }) }
  </a>
}

const sort = (items, sortKey, sortDirection) => {
  const sortPrefix = sortDirection === SORTASC ? 'ASC' : 'DESC';
  const customSort = sortKey['sort'+sortPrefix];
  if(customSort){ return items.sort(customSort) }
  return items.sort((sA, sB) => {
    const a = sA[sortKey]
    const b = sB[sortKey]
    if(!a && !b) { return 0 }
    if(sortDirection === SORTASC){
      if(!a) { return 1 }
      if(!b) { return -1 }
      if(typeof a  === 'string' && typeof b === 'string'){
        return a.localeCompare(b)
      }
      return a - b
    } else {
      if(!b) { return 1 }
      if(!a) { return -1 }
      if(typeof a  === 'string' && typeof b === 'string'){
        return b.localeCompare(a)
      }
      return b - a
    }
  })
}

const sort2 = (props, sortKey, sortDirection) => {
  const {
    fields,
    items
  } = props
  const sortPrefix = sortDirection === SORTASC ? 'ASC' : 'DESC';
  const field = fields.find((f) => f.key === sortKey)
  if(!field) {console.error('Field Missing ', sortKey)}
  const customSort = field[`sort${sortPrefix}`];
  if(customSort){ return items.sort(customSort) }
  return items.sort((sA, sB) => {
    const a = sA[sortKey]
    const b = sB[sortKey]
    const aEmpty = (a !== 0) && !a;
    const bEmpty = (a !== 0) && !a;
    if(aEmpty && bEmpty) { return 0 }
    if(sortDirection === SORTASC){
      if(aEmpty) { return 1 }
      if(bEmpty) { return -1 }
      if(typeof a  === 'string' && typeof b === 'string'){
        return a.localeCompare(b)
      }
      return a - b
    } else {
      if(bEmpty) { return 1 }
      if(aEmpty) { return -1 }
      if(typeof a  === 'string' && typeof b === 'string'){
        return b.localeCompare(a)
      }
      return b - a
    }
  })
}

const getTitleClass = (sortKey, field, sortDirection) => {
  const isSorting = sortKey === field.key;
  if(isSorting && sortDirection === SORTASC){ return styles.titleSortingASC; }
  if(isSorting && sortDirection !== SORTASC) { return styles.titleSortingDESC; }
  return styles.titleNotSorting;
}

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    const sortKey = props.sortDefaultKey || props.fields[0].key;
    const sortDirection = props.sortDefaultDirection || SORTASC;
    const items = sort2(props, sortKey, sortDirection);
    this.state = {
      sortKey,
      sortDirection,
      items
    };
    this.changeSort = this.changeSort.bind(this);
  }

  changeSort(f) {
    if(this.state.sortKey === f.key){
      return this.setState({sortDirection: !this.state.sortDirection})
    }
    this.setState({sortKey: f.key, sortDirection: SORTASC})
  }

  render() {
    const {fields} = this.props
    const {items} = this.state
    return <div className={styles.table}>
      <header>
        {fields.map((f) => <span
            key={f.key}
            className={getTitleClass(this.state.sortKey, f, this.state.sortDirection)}
            onClick={() => this.changeSort(f)}
          >
            {f.title}
          </span>
        )}
      </header>
      {items.map((i) => <Row
        key={i.key}
        url={i.url}
        fields={fields}
        attributes={i}
      />)}
    </div>
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.sortKey !== this.state.sortKey || prevState.sortDirection !== this.state.sortDirection){
      this.setState({items: sort2(this.props, this.state.sortKey, this.state.sortDirection)})
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: sort2(nextProps, this.state.sortKey, this.state.sortDirection)
    })
  }
}
