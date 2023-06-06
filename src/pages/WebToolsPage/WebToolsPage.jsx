import React from 'react'
import Carousel from 'react-elastic-carousel'
import CarouselItem from '../../components/CarouselItem/CarouselItem'
import './WebToolsPage.css'
import reactjs from '../../assets/react.svg'
import eslint from '../../assets/eslint.svg'
import jest from '../../assets/jest.svg'
import nodejs from '../../assets/nodejs.svg'
import fastapi from '../../assets/fastapi.svg'
import postgres from '../../assets/postgres.svg'
import mysql from '../../assets/mysql.svg'

const WebToolsPage = () => (
  <div className="webToolsPage">
    <h1 className="webToolsTitle">Tecnologías Web</h1>
    <span className="webToolsDescription">Ahora, estas son las tecnologías web que he tenido la oportunidad de utilizar</span>
    <hr className="webToolsDivider" />
    <div className="webToolsCarouselContainer">
      <Carousel
        itemsToShow={1}
      >
        <div className="largeCarouselItem">
          <span className="largeCarouselItemTitle">Frontend Tools</span>
          <div className="webToolsCardsContainer">
            <CarouselItem title="React JS" img={reactjs} />
            <CarouselItem title="ESLint" img={eslint} />
            <CarouselItem title="Jest" img={jest} />
          </div>
        </div>
        <div className="largeCarouselItem">
          <span className="largeCarouselItemTitle">Backend Tools</span>
          <div className="webToolsCardsContainer">
            <CarouselItem title="Node JS" img={nodejs} />
            <CarouselItem title="FastAPI" img={fastapi} />
          </div>
        </div>
        <div className="largeCarouselItem">
          <span className="largeCarouselItemTitle">Data Storage</span>
          <div className="webToolsCardsContainer">
            <CarouselItem title="PostgreSQL" img={postgres} />
            <CarouselItem title="MySQL" img={mysql} />
          </div>
        </div>
      </Carousel>
    </div>
  </div>
)

export default WebToolsPage
