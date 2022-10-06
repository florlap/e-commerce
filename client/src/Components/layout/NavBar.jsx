import React from 'react'
import styles from './navbar.module.css'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.primary}>
        <div className={styles.uno}>
          <button>uno</button>
        </div>
        <div className={styles.dos}>
          <button>dos</button>
        </div>
        <div className={styles.contact}>
          <button>contacto</button>
        </div>
      </div>
      <div className={styles.secundary}>
        <div className={styles.search}>
          <input type="text" />
        </div>
        <div className={styles.car}>
          <button>carrito</button>
        </div>
        <div className={styles.login}>
          <button>login</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar