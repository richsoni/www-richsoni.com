"use strict"
const React           = require("react")
const HF              = require("../../shared/header-footer/")
import Table from '../../ui/Table/';

export default (props) => {
  const {
    songs
  } = props
  return <HF>
    <Table
       fields={[{
         title: 'Title',
         key: 'title',
       }, {
         title: 'Composed',
         key: 'composedAt',
         sortASC: (sA, sB) => {
            if(!sA.moment) { return 1 }
            if(!sB.moment) { return -1 }
            if(!sA.moment && !sB.moment) { return 0 }
            return sA.moment.diff(sB.moment)
         },
         sortDESC: (sA, sB) => {
           if(!sA.moment) { return -1 }
           if(!sB.moment) { return 1 }
           if(!sA.moment && !sB.moment) { return 0 }
           return sB.moment.diff(sA.moment)
         }
       }]}
       items={songs}
    />
  </HF>
}
