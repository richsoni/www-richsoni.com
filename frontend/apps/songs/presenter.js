"use strict"
const React           = require("react")
const HF              = require("../../shared/header-footer/")
import Table from '../../ui/Table/';
import Tabs from '../../shared/tabs/';
import {sortASC, sortDESC} from '../../ui/Table/dateSort';

const tableFields = [
  {
    title: 'Song',
    key: 'title',
  },
  {
    title: 'Artist',
    key: 'artist',
  },
  {
    title: 'Date Composed',
    key: 'composedAt',
    sortASC,
    sortDESC,
  },
];

export default class SongPresenter extends React.Component {
  render() {
    return <HF>
      <h1>Songs</h1>
      <Tabs tabs={this.tabs()} />
    </HF>
  }

  tabs() {
    const {
      songs
    } = this.props
    return [{
      content: () => <Table
        fields={tableFields}
        items={songs}
      />,
      title: "All",
    }, {
      content: () => <Table
        fields={tableFields}
        items={songs.filter((s) => s.isMine)}
      />,
      title: "Originals",
    }, {
      content: () => <Table
        fields={tableFields}
        items={songs.filter((s) => !s.isMine)}
      />,
      title: "Covers",
    },
    ];
  }
}
