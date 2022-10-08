import React from 'react';
//import styles from '../Styles/home.module.css'
//import imagen from "../Images/cafe1.jpg"
import Carousel from './Carousel'


function Home(props) {
  const images = ["cafe1.jpg", "cafe2.jpg","cafe3.jpg"] 

  return (
    <div>
      {/* <div className={styles.container} >
        <div className={styles.imagen} >
        <img src={imagen} alt="" width="800px" height="600px"/>
      </div>
      </div>  */}
      <div>
         <Carousel images={images}/> 
      </div>
    </div>
  );
}

export default Home;