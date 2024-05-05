import "./Footer.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/Sachinshekharpatel/portfolioSachinMain"
        className="link footer__link"
      >
        Created By Sachin Shekhar Patel
      </a>
      <div class="footer__container">
        <div class="footer__section">
          <h3 class="footer__title">About</h3>
          <p class="footer__desc">
            <p className="section-description">
              Passionate{" "}
              <span className="highlight">frontend React developer</span> with a
              keen eye for detail and a love for creating{" "}
              <span className="highlight">beautiful user interfaces</span>.
            </p>
          </p>
        </div>
        <div class="footer__section">
          <h3 class="footer__title">Navigation</h3>
          <ul class="footer__list">
            <li>
              <a href="#" class="footer__link">
                Top
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#projects" class="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" class="footer__link">
                Skills
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__section">
          <h3 class="footer__title">Contact</h3>
          <ul class="footer__list">
            <li>
              <a
                aria-label="Email"
                className="link link--icon"
                href={`mailto:heroft7024@gmail.com`}
              >
                <EmailIcon></EmailIcon>
              </a>
            </li>
            <li>
              <a
                aria-label="Whatsapp"
                className="link link--icon"
                href="https://api.whatsapp.com/send?phone=6263877374"
              >
                <WhatsAppIcon></WhatsAppIcon>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sachin-shekhar-patel-04b47a239/"
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                aria-label="Whatsapp"
                className="link link--icon"
                href="https://github.com/Sachinshekharpatel/portfolioSachinMain"
              >
                <GitHubIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; Sachin Shekhar Patel . All rights reserved. 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
