import React from 'react'
import Carousel from 'react-elastic-carousel'
import './LanguagesPage.css'
import CarouselItem from '../../components/CarouselItem/CarouselItem'
import js from '../../assets/javascript.svg'
import python from '../../assets/python.svg'
import java from '../../assets/java.svg'
import cpp from '../../assets/cpp.svg'
import html5 from '../../assets/html5.svg'
import css from '../../assets/css.svg'
import arm from '../../assets/arm.svg'

const LanguagesPage = () => (
  <div className="languagesPageContainer">
    <h1 className="languagesTitle">¿Qué lenguajes conozco?</h1>
    <span className="languagesDescription">Estos son los lenguajes de programación con los que he trabajado en diferentes proyectos</span>
    <hr className="languagesDivider" />
    <div className="languagesCarouselContainer">
      <Carousel
        itemsToShow={3}
        itemsToScroll={3}
      >
        <CarouselItem img={html5} title="HTML" />
        <CarouselItem img={css} title="CSS" />
        <CarouselItem img={js} title="JavaScript" />
        <CarouselItem img={java} title="Java" />
        <CarouselItem img={python} title="Python" />
        <CarouselItem img={cpp} title="C++" />
        <CarouselItem img={arm} title="ARM Assembly" />
      </Carousel>
    </div>
  </div>
)

export default LanguagesPage
