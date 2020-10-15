import React from "react";
import logo from "../logo.png";

function Header(props) {
  let toggle;
  if (props.toggleNav === true) {
    toggle = "navOpen";
  } else {
    toggle = "navClose";
  }
  return (
    <div>
      {/* Header */}
      <header className={toggle}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <button className="nav-toggle" onClick={props.handletoggle}>
          <span className="fas fa-bars"></span>
        </button>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={props.handletoggle}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                className="nav-link"
                onClick={props.handletoggle}
              >
                My Services
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                className="nav-link"
                onClick={props.handletoggle}
              >
                About me
              </a>
            </li>
            <li className="nav-item">
              <a href="#work" className="nav-link" onClick={props.handletoggle}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link"
                onClick={props.handletoggle}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
