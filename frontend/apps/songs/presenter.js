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
         key: 'composed_at',
       }]}
       items={songs}
    />
  </HF>
}
