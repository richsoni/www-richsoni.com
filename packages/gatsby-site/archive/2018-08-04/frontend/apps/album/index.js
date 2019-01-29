import React  from "react";
import Presenter from "./presenter";
import {Provide} from '../../shared/reduxProvider';
import {fetchAll as fetchAllReleases} from '../../data/releases/actions';
import {fetchAll as fetchAllSongs} from '../../data/songs/actions';

class RootComponent extends React.Component{
  render() {
    const {
      releases,
      slug,
      songs,
    } = this.props
    const release = releases[slug]
    if(release && Object.keys(songs).length){
      const tracks = release.tracklist.reduce((memo, s) => {
        return memo.concat([songs[s]])
      }, [])
      return <Presenter
          tracks={tracks}
          release={release}
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
      dispatch(fetchAllReleases())
      dispatch(fetchAllSongs())
    }
  }
}


const mapStateToProps = (state) => {
  return {
    releases: state.releases.byID,
    songs: state.songs.byID,
  }
}

export default Provide({
  Component: Container,
  mapStateToProps,
  mapDispatchToProps
});
