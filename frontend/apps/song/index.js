import React from 'react';
import Presenter from "./presenter";
import {Provide} from '../../shared/reduxProvider';
import {hydrateOne} from '../../data/songs/actions';
import {connect} from 'react-redux';

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
    }
  }
}



const mapStateToProps = (state) => {
  return {
    songs: state.songs,
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
    } = this.props
    const song = songs.byID[slug]
    if(song){
      return <Presenter
        {...song}
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
