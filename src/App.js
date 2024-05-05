import { useContext } from 'react'
import Header from './header/header'
import About from './aboutpage/aboutpage'
import Projects from './Projects/project'
import Skills from './Skills/Skills'
import ScrollToTop from './ScrolltoTop/ScrollToTop'

import Footer from './Footer/Footer'
import './App.css'
import { ThemeContext } from './Themecontext/theme'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (

    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
//https://github.com/rajshekhar26/cleanfolio/blob/main/package.json