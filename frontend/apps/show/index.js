"use strict"
import React  from "react";
import Presenter from "./presenter";
import ReduxProvider from '../../shared/reduxProvider';
import {fetchAllLocations} from '../../data/locations/actions';
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
    fetchAllLocations: () => { dispatch(fetchAllLocations()) },
  }
}

const mapStateToProps = (state) => {
  return {
  
  }
}

export default (props) => {
  const Component = connect(mapStateToProps, mapDispatchToProps)(Container)
  return <ReduxProvider>
    <Component {...props} />
  </ReduxProvider>
}

class RootComponent extends React.Component{
  constructor(props) {
    super()
    this.state = { songs: null, locations: null }
    ajax.get('/api/locations.json', ((payload) => {
      const locations = JSON.parse(payload)
      this.setState({locations})
    }).bind(this));
    ajax.get('/api/songs.json', ((payload) => {
      const songs = JSON
        .parse(payload)
        .reduce((memo, item) => {
          return {...memo, [item.slug]: item}
        }, {})
      this.setState({songs})
    }).bind(this));
  }

  render() {
    if( this.state.songs && this.state.locations ){
      debugger
      const _location = this.state.locations[this.props.locationKey];
      return <Presenter
          location={_location}
          songs={this.state.songs}
          setlist={this.props.setlist}
        />
    }
    return <div />
  }
}
