import React from 'react';
import styles from '../Styles/home.module.css'
import imagen from "../Images/cafe1.jpg"

function Home(props) {
  return (
    <div>
      <div className={styles.container} >
        <div className={styles.imagen} >
        <img src={imagen} alt="" width="200px" />
      </div>
      </div>
    </div>
  );
}

export default Home;