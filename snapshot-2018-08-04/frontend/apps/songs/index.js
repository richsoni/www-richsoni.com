import React from 'react';
import moment from 'moment';
import Presenter from './presenter';
import {Provide} from '../../shared/reduxProvider';
import {fetchAll as fetchAllSongs} from '../../data/songs/actions';
import {fetchAll as fetchAllShows} from '../../data/shows/actions';
import {songIndex} from './selectors';

class Songs extends React.Component {
  render(){
    const {
      songs
    } = this.props
    if(!songs) { return <div /> }
    const x = songs
      .map((song) => {
        return {
        ...song,
      }})
    return <Presenter
      songs={songs}
    />
  }
}

class Container extends React.Component {
  render() {
    return <Songs {...this.props} />
  }

  componentDidMount() {
    if(this.props.componentDidMount){
      this.props.componentDidMount(this.props)
    }
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    componentDidMount: (props) => {
      dispatch(fetchAllSongs())
      dispatch(fetchAllShows())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    songs: songIndex(state),
  }
}

export default Provide({
  Component: Container,
  mapStateToProps,
  mapDispatchToProps
});
