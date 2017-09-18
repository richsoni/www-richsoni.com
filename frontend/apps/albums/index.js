import React from 'react';
import Presenter from './presenter';
import {Provide} from '../../shared/reduxProvider';
import {fetchAll as fetchAllReleases} from '../../data/releases/actions';

class Container extends React.Component {
  render() {
    console.log(this.props)
    return <Presenter {...this.props} />
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
    }
  }
}

const mapStateToProps = (state) => {
  return {
    releases: Object.values(state.releases.byID),
  }
}




export default Provide({
  Component: Container,
  mapStateToProps,
  mapDispatchToProps
});
