import React from 'react';
import Presenter from './presenter';
import {Provide} from '../../shared/reduxProvider';
import {fetchAll as fetchAllReleases} from '../../data/releases/actions';
import {sorted as sortedReleases} from '../../data/releases/selectors';

class Container extends React.Component {
  render() {
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
    releases: sortedReleases(state),
  }
}




export default Provide({
  Component: Container,
  mapStateToProps,
  mapDispatchToProps
});
