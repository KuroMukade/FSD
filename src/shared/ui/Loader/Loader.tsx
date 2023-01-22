import React, { FC } from 'react';
import { cs } from 'shared/utils/classnames';

import styles from './Loader.module.scss';

export interface ILoaderProps {
  size?: number;
  speed?: number;
}

const Loader: FC<ILoaderProps> = ({ ...props }) => {
  const { size } = props;

  const style = {
    width: `${size}px`,
    height: `${size}px`,
  }

  console.log(props)
  return (
    <div className={styles.container}>
      <span
        style={style}
        className={styles.loader}></span>
    </div>
  );
};

export default Loader;
