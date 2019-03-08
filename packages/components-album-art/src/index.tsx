import * as React from 'react';
import styles from './index.module.css'

type Props = {};

class AlbumArt extends React.Component<Props> {
  static defaultProps = {};

  render() {
    return <div className={styles.container}>test</div>;
  }
}

export default AlbumArt;
