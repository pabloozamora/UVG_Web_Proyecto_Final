import React from 'react'
import styles from './MainPage.module.css'

const MainPage = () => (
  <div className={styles.mainPageContainer}>
    <div className={styles.bannerContainer}>
      <h1 className={styles.bannerTitle}>¿Quién es Pablo Zamora?</h1>
      <div className={styles.bannerImgContainer}>
        <img className={styles.bannerImg} alt="bannerImage" src="https://drive.google.com/uc?export=view&id=1xuKOoMTrhHmhlMIFgk2FYcxPqzDiWKWp" />
      </div>
    </div>
  </div>
)

export default MainPage
