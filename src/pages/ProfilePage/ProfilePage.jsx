import React from 'react'
import {
  Animator, MoveIn, batch,
} from 'react-scroll-motion'
import styles from './ProfilePage.module.css'
import Card from '../../components/Card/Card'
import ramen from '../../assets/ramen.svg'
import videogames from '../../assets/videogames.svg'
import coding from '../../assets/coding.svg'
import guitar from '../../assets/guitar.svg'

const ProfilePage = () => (
  <div className={styles.profilePageContainer}>
    <Animator animation={batch(MoveIn(-1000))}>
      <div className={styles.presentationCardContainer}>
        <div className={styles.presentationCard}>
          <div className={styles.imgWrapper}>
            <img alt="profilePic" className={styles.profilePic} src="https://drive.google.com/uc?export=view&id=104aDBLhkDLbx1thekW9-MLeanOENdyio" />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Un poco sobre mí</h1>
            <p className={styles.profileDescription}>
              ¿Qué tal? Soy
              <b> Pablo</b>
              . Tengo 21 años y soy un estudiante de tercer año de
              <b> Ingeniería en Ciencias de la computación</b>
              <br />
              en la Universidad del Valle de Guatemala. Recientemente comencé
              a interesarme mucho en el
              {' '}
              <b>desarrollo web.</b>
              <br />
              Este portafolio es una pequeña demostración las habilidades que he logrado adquirir
              durante este año.
              <br />
              <b>Adelante, ¡echa un vistazo!</b>
            </p>
          </div>
        </div>
      </div>
    </Animator>
    <Animator animation={batch(MoveIn(1000))}>
      <div className={styles.interests}>
        <h1 className={styles.interestsTitle}>¿Pasatiempos?</h1>
        <hr className={styles.divider} />
        <div className={styles.interestsContainer}>
          <Card text="Ramen y chelitas" img={ramen} />
          <Card text="Programar" img={coding} />
          <Card text="Tocar guitarra y ukelele" img={guitar} />
          <Card text="Videojuegos" img={videogames} />
        </div>
      </div>
    </Animator>
  </div>
)

export default ProfilePage
