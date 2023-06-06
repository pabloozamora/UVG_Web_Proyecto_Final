import React from 'react'
import styles from './ProjectsPage.module.css'
import memoryGif from '../../assets/Memory.gif'
import ddgGif from '../../assets/DuckDuckGoclone.gif'
import mazeGif from '../../assets/maze.gif'
import crunchyrollGif from '../../assets/crunchyroll2.gif'

const ProjectsPage = () => (
  <div className={styles.projectsPage}>
    <h1 className={styles.projectsTitle}>¿Evidencia?</h1>
    <span className={styles.projectsDescription}>
      Siéntete libre de visitar algunos de los proyectos que he desarrollado este año
    </span>
    <hr className={styles.projectsDivider} />
    <div className={styles.projectsContainer}>
      <div className={styles.projectContainer}>
        <div className={styles.projectImgWrapper}>
          <img className={styles.projectImg} alt="projectImg" src={memoryGif} />
          <div className={styles.projectDescriptionContainer}>
            <a className={styles.projectLink} href="https://uvgenios.online/21780/Lab_6/" target="_blank" rel="noreferrer"> </a>
            <p className={styles.projectDesc}>
              Memoria estilo japonés
            </p>
          </div>
        </div>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.projectImgWrapper}>
          <img className={styles.projectImg} alt="projectImg" src={ddgGif} />
          <div className={styles.projectDescriptionContainer}>
            <a className={styles.projectLink} href="https://uvgenios.online/21780/Lab_7/" target="_blank" rel="noreferrer"> </a>
            <p className={styles.projectDesc}>
              Clon de DuckDuck Go
            </p>
          </div>
        </div>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.projectImgWrapper}>
          <img className={styles.projectImg} alt="projectImg" src={mazeGif} />
          <div className={styles.projectDescriptionContainer}>
            <a className={styles.projectLink} href="https://resonant-sundae-2f548a.netlify.app/" target="_blank" rel="noreferrer"> </a>
            <p className={styles.projectDesc}>
              Laberinto 8-bit estilo
              <br />
              japonés
            </p>
          </div>
        </div>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.projectImgWrapper}>
          <img className={styles.projectImg} alt="projectImg" src={crunchyrollGif} />
          <div className={styles.projectDescriptionContainer}>
            <a className={styles.projectLink} href="https://uvgenios.online/21780/Proyecto_1/" target="_blank" rel="noreferrer"> </a>
            <p className={styles.projectDesc}>
              Clon de Crunchyroll
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectsPage
