import { useContext } from "react";
import Header from "./header/header";
import About from "./aboutpage/aboutpage";
import Projects from "./Projects/project";
import Skills from "./Skills/Skills";
import ScrollToTop from "./ScrolltoTop/ScrollToTop";

import Footer from "./Footer/footer";
import "./App.css";
import { ThemeContext } from "./Themecontext/theme";
//githubLink of portFolio https://github.com/Sachinshekharpatel/portfolioSachinMain //
const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main
        style={{
          scrollBehavior: "smooth",
          padding: "10px",
          paddingLeft: "10px",
          paddingRight: "10px",
          width: "100%",
        }}
      >
        <About />
        <Projects />
        <Skills />
        <ScrollToTop />
      </main>
      <Footer />
      {/* <ScrollToTop/>
      <Footer /> */}
    </div>
  );
};

export default App;

