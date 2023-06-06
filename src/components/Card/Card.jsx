import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'

const Card = ({ img, text }) => (
  <div className={styles.cardContainer}>
    <div className={styles.cardContainerInner}>
      <div className={styles.cardTextContainer}>
        <p className={styles.cardText}>{text}</p>
      </div>
      <div className={styles.imgWrapper}>
        <img alt="cardImg" className={styles.cardImg} src={img} />
      </div>
    </div>
  </div>
)

Card.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Card
