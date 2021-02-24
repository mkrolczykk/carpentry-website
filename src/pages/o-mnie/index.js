import React from 'react'

import "../../styles/main.scss"

// About-us components
import Title from "./title/Title"
import Description from "./description/Description"
import Achievements from "./achievements/Achievements"

// Common components
import QuickInfo from "../components/quickInfo/QuickInfo"
import Menu from "../components/header/Header"
import Contact from '../components/contact/Contact'
import Footer from "../components/footer/Footer"

const AboutMe = () => {
    return (
        <div className="about-me">
          <header className="about-me__header">
            <QuickInfo/>
            <Menu />
          </header>
          <Title />
          <Description/>
          <Achievements/>
          <Contact
            parentClassName="about-me"
            title="Pogadajmy"
          />
          <Footer/>
        </div>
      )
}

export default AboutMe
