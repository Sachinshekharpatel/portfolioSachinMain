import { useContext, useState } from "react";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";

import { ThemeContext } from "../Themecontext/theme";
import { projects, skills, contact } from "../portfolio";
import { header } from "../portfolio";
import "./Navbar.css";

const Navbar = () => {
  const { homepage, title } = header;
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="nav nav--dark p-3">
      <h3 style={{ marginLeft: "10px"}}>
        {homepage ? (
          <a href={homepage} className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <div class="nav__list-item_div">
        {projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.length ? (
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
        ) : null}
      </div>
      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
    </nav>
  );
};

export default Navbar;
