import React from 'react';
import styles from '../../Styles/footer.module.css'

function Footer(props) {
  return (
    <div>
      <div className={styles.container} >
        <div className={styles.email} >
          <h1>pies de pagina</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;