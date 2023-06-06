import React from 'react'
import {
  Animator, Fade, ScrollContainer, ScrollPage, batch, MoveOut, FadeIn, ZoomIn, Sticky, MoveIn,
} from 'react-scroll-motion'
import './App.css'
import MainPage from './pages/MainPage/MainPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import LanguagesPage from './pages/LanguagesPage/LanguagesPage'
import WebToolsPage from './pages/WebToolsPage/WebToolsPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ContactInfoPage from './pages/ContactInfoPage/ContactInfoPage'

function App() {
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Fade(), MoveOut(0, 200))}>
          <MainPage />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <ProfilePage />
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(FadeIn(), MoveIn(0, 800), Sticky(), MoveOut(3000, 0))}>
          <LanguagesPage />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-3000, 0))}>
          <WebToolsPage />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch((ZoomIn()))}>
          <ProjectsPage />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade())}>
          <ContactInfoPage />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  )
}

export default App
