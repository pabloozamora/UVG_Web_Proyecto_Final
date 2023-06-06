import React from 'react'
import PropTypes from 'prop-types'
import styles from './CarouselItem.module.css'

const CarouselItem = ({ img, title }) => (
  <div className={styles.carouselItemContainer}>
    <div className={styles.carouselItem}>
      <img className={styles.carouselItemImg} alt="item" src={img} />
      <span className={styles.carouselItemTitle}>{title}</span>
    </div>
  </div>
)

CarouselItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default CarouselItem
