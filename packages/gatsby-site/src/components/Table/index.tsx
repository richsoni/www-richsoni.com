import React from 'react';
const styles = require('./styles.module.css');

export const SORTASC = true;
//@ts-ignore
export const SORTDESC = false;

const Row = (props: any) => {
  const {
    url,
    fields,
    attributes
  } = props
  return <a
    href={ url }
  > { fields.map((f: any) => {
      const text = attributes[f.key];
      const aurl = attributes[url]
      return <span key={`${f.key}:${aurl}`}> {String(text || '')} </span>
    }) }
  </a>
}

const sort2 = (props: any, sortKey: any, sortDirection: any) => {
  const {
    fields,
    items
  } = props
  const sortPrefix = sortDirection === SORTASC ? 'ASC' : 'DESC';
  const field = fields.find((f: any) => f.key === sortKey)
  if(!field) {console.error('Field Missing ', sortKey)}
  const customSort = field[`sort${sortPrefix}`];
  if(customSort){ return items.sort(customSort) }
  return items.sort((sA: any, sB: any) => {
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

const getTitleClass = (sortKey: any, field: any, sortDirection: any) => {
  const isSorting = sortKey === field.key;
  if(isSorting && sortDirection === SORTASC){ return styles.titleSortingASC; }
  if(isSorting && sortDirection !== SORTASC) { return styles.titleSortingDESC; }
  return styles.titleNotSorting;
}

type Item = {
  url: string,
}

type Fields = {
  key: string,
  title: string,
  sortASC?: any,
  sortDESC?: any,
}

type Props = {
  sortKey?: string,
  sortDirection?: boolean,
  items: Array<Item>,
  sortDefaultDirection?: boolean,
  sortDefaultKey?: string,
  fields: Array<Fields>
}

type State = {
  sortKey: string,
  sortDirection: boolean,
  items: Array<Item>,
}

export default class Table extends React.Component<Props, State> {
  constructor(props: Props) {
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

  changeSort(f: any) {
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
        {fields.map((f: any) => <span
            key={`TABLE_HEADER${f.key}`}
            className={getTitleClass(this.state.sortKey, f, this.state.sortDirection)}
            onClick={() => this.changeSort(f)}
          >
            {f.title}
          </span>
        )}
      </header>
      {items.map((i: any) => <Row
        key={i.url}
        url={i.url}
        fields={fields}
        attributes={i}
      />)}
    </div>
  }

  //@ts-ignore
  componentDidUpdate(prevProps: any, prevState: State) {
    if(prevState.sortKey !== this.state.sortKey || prevState.sortDirection !== this.state.sortDirection){
      this.setState({items: sort2(this.props, this.state.sortKey, this.state.sortDirection)})
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      items: sort2(nextProps, this.state.sortKey, this.state.sortDirection)
    })
  }
}
