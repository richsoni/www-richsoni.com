"use strict"
import React  from "react";
import Presenter from "./presenter";
import ReduxProvider from '../../shared/reduxProvider';
import {fetchAllLocations} from '../../data/locations/actions';
import {fetchAll as fetchAllSongs} from '../../data/songs/actions';
import ajax   from "../../lib/ajax";
import {connect} from 'react-redux';

class Container extends React.Component {
  render() {
    return <RootComponent {...this.props} />
  }

  componentDidMount() {
    if(this.props.componentDidMount){
      this.props.componentDidMount()
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    componentDidMount: () => {
      dispatch(fetchAllLocations())
      dispatch(fetchAllSongs())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
    locations: state.locations,
  }
}

export default (props) => {
  const Component = connect(mapStateToProps, mapDispatchToProps)(Container)
  return <ReduxProvider>
    <Component {...props} />
  </ReduxProvider>
}

class RootComponent extends React.Component{
  render() {
    const {
      locations,
      locationKey,
      songs,
    } = this.props
    if( songs.length && locations.length ){
      const _location = locations.byID[locationKey];
      return <Presenter
          location={_location}
          songs={songs}
          setlist={this.props.setlist}
        />
    }
    return <div />
  }
}
