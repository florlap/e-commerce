import React from 'react';
import styles from './sidebar.module.css'

function Sidebar(props) {
  return (
    <div>
      <div className={styles.container} >
        <div className={styles.uno} >
          <button>1</button>
        </div>
        <div className={styles.dos} >
          <button>2</button>
        </div>
        <div className={styles.tres} >
          <button>3</button>
        </div>
        <div className={styles.cuatro} >
          <button>4</button>
        </div>
        <div className={styles.cinco} >
          <button>5</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;