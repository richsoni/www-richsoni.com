import React from 'react';
import Presenter from "./presenter";
import {Provide} from '../../shared/reduxProvider';
import {hydrateOne} from '../../data/songs/actions';
import {fetchAll} from '../../data/shows/actions';
import {connect} from 'react-redux';
import {showsWithSong} from './selectors';

class Container extends React.Component {
  render() {
    return <RootComponent {...this.props} />
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
      dispatch(hydrateOne(props.song))
      dispatch(fetchAll())
    }
  }
}



const mapStateToProps = (state, props) => {
  return {
    songs: state.songs,
    showsWithSong: showsWithSong(state, props.slug)
  }
}

class RootComponent extends React.Component{
  render() {
    const {
      pathname,
      page,
      songs,
      slug,
      content,
      showsWithSong,
    } = this.props
    const song = songs.byID[slug]
    if(song){
      return <Presenter
        {...song}
        showsWithSong={showsWithSong}
      />
    }
    return <div />
  }
}

export default Provide({
  Component: Container,
  mapStateToProps,
  mapDispatchToProps
});
