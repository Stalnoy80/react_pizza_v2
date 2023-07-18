import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>🧐</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>К сожалению данной страницы нет в нашем приложении.</p>
    </div>
  );
};

export default NotFoundBlock;
