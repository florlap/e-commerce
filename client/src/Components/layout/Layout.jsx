import React from 'react'
import NavBar from './NavBar'
// import Sidebar from './Sidebar'
import styles from '../../Styles/layout.module.css'
import Footer from './Footer'
import Carousel from '../Carousel'


const Layout = ({ children }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <NavBar />
          {/* <Carousel/> */}
        </div>
        {/* <div className={styles.sidebar}>
          <Sidebar />
        </div> */}
        <div className={styles.children}>
          {children}
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout