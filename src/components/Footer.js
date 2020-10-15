import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        {/* Footer */}
        <footer id="footer" className="footer">
          <a href="mailto:godwinobamina1@gmail.com" className="footer-link">
            Godwinobamina1@gmail.com
          </a>
          <ul className="social-list">
            <li className="social-list-item">
              <a
                className="social-list-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://codepen.io/Beewan"
              >
                <i className="fab fa-codepen"></i>
              </a>
            </li>
            <li className="social-list-item">
              <a
                className="social-list-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/godwin-obamina"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="social-list-item">
              <a
                className="social-list-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/ObaminaGodwin"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-list-item">
              <a
                className="social-list-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Owebiwan"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Footer;
