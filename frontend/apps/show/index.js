"use strict"
import React  from "react";
import Presenter from "./presenter";
import {Provide} from '../../shared/reduxProvider';
import {fetchAllLocations} from '../../data/locations/actions';
import {fetchAll as fetchAllSongs} from '../../data/songs/actions';
import {hydrateShow} from '../../data/shows/actions';

class RootComponent extends React.Component{
  render() {
    const {
      locations,
      shows,
      songs,
      url,
    } = this.props
    const show = shows.byID[url]
    if(show && songs.length && locations.length ){
      const _location = locations.byID[show.slug];
      return <Presenter
          location={_location}
          songs={songs}
          show={show}
        />
    }
    return <div />
  }
}

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
      dispatch(fetchAllLocations())
      dispatch(fetchAllSongs())
      dispatch(hydrateShow(props.show))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    shows: state.shows,
    songs: state.songs,
    locations: state.locations,
  }
}

export default Provide({
  Component: Container,
  mapStateToProps,
  mapDispatchToProps
});
