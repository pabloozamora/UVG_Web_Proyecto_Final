import React from 'react'
import styles from './ContactInfoPage.module.css'
import email from '../../assets/email.svg'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import me from '../../assets/io.svg'

const ContactInfoPage = () => (
  <div className={styles.contactInfoPage}>
    <div className={styles.backgroundWrapper}>
      <div className={styles.wave} />
    </div>
    <div className={styles.textWrapper}>
      <h1 className={styles.contactInfoTitle}>¿Llegaste hasta aquí?</h1>
      <h2>A lo mejor te puede interesar:</h2>
      <hr className={styles.divider} />
      <div className={styles.detailsContainer}>
        <span className={styles.contactRow}>
          <img className={styles.socialImg} alt="social" src={email} />
          pabloozamora02@gmail.com
        </span>
        <span className={styles.contactRow}>
          <img className={styles.socialImg} alt="social" src={github} />
          <a className={styles.socialLink} href="https://github.com/pabloozamora">pabloozamora02</a>
        </span>
        <span className={styles.contactRow}>
          <img className={styles.socialImg} alt="social" src={instagram} />
          <a className={styles.socialLink} href="https://www.instagram.com/pabloozamora/">pabloozamora</a>
        </span>
        <span className={styles.contactRow}>
          <img className={styles.socialImg} alt="social" src={linkedin} />
          <a className={styles.socialLink} href="https://www.linkedin.com/in/pablo-zamora02/">Pablo Zamora</a>
        </span>
      </div>
    </div>
    <img className={styles.io} alt="io" src={me} />
  </div>
)

export default ContactInfoPage
