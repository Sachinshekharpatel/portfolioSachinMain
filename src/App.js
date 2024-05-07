import { useContext } from 'react'
import Header from './header/header'
import About from './aboutpage/aboutpage'
import Projects from './Projects/project'
import Skills from './Skills/Skills'
import ScrollToTop from './ScrolltoTop/ScrollToTop'

import Footer from './Footer/footer'
import './App.css'
import { ThemeContext } from './Themecontext/theme'
//githubLink of portFolio https://github.com/Sachinshekharpatel/portfolioSachinMain //
const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (

    <div id='top' className={`${themeName} app`}>
  
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <ScrollToTop/>
        <Footer/>
      </main>

      {/* <ScrollToTop/>
      <Footer /> */}
    </div>
  )
}

export default App
//https://github.com/rajshekhar26/cleanfolio/blob/main/package.json