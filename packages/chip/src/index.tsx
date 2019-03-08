import * as React from 'react';
import styles from './index.module.css'

type Props = {};

class Chip extends React.Component<Props> {
  static defaultProps = {};

  render() {
    return <div className={styles.container}>Chip!</div>;
  }
}

export default Chip;
