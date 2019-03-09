import * as React from 'react';
import styles from './index.module.css'

interface Props {
  label: string,
  onClick?: () => any,
  color: 'default' | 'primary' | 'secondary',
};

class Chip extends React.Component<Props> {
  static defaultProps = {
    label: '',
    color: 'default',
  };

  render() {
    const {label, onClick, color} = this.props;
    return <div
      role='button'
      onClick={onClick || (() => {}) }
      className={`${styles.container} ${styles[color]} ${onClick ? styles.clickable : ''}`}><span>{label}</span></div>;
  }
}

export default Chip;