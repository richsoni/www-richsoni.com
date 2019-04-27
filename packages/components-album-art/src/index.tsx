import * as React from 'react';
import styles from './index.module.css';
import {CompactDisc} from '@richsoni/components-icon';

type Props = {
  className?: string;
  src?: JSX.Element;
};

class AlbumArt extends React.Component<Props> {
  static defaultProps = {
    className: '',
    src: '',
  };

  render() {
    if(this.props.src) {
      return <div style={{backgroundImage: `url(${this.props.src})`}} className={styles.container}>
        {this.props.children}
      </div>
    }
    return <div className={styles.iconContainer}>
      <CompactDisc className={styles.icon} />
      <div>{this.props.children}</div>
    </div>
  }
}

export default AlbumArt;
