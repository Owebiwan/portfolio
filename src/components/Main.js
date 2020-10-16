import React from "react";
import intro from "../intro.png";
import profile from "../profilepic.png";
import markup from "../markup.png";
import petsclique from "../petsclique.png";
import legate from "../legate.png";

class Main extends React.Component {
  render() {
    return (
      <div>
        <main>
          {/* Introduction */}
          <section className="intro" id="home">
            <h1 className="section-title section-title-intro">
              Hi, I am <strong>Godwin Obamina</strong>
            </h1>
            <p className="section-subtitle section-subtitle-intro">
              front-end developer
            </p>
            <img className="intro-img" src={intro} alt="Godwin" />
          </section>
          {/* My services */}
          <section className="my-services" id="services">
            <h2 className="section-title section-title-services">What I do</h2>
            <div className="services">
              <div className="service">
                <h3>Web Development</h3>
                <p>
                  I specialize in front-end web development, but I am currently
                  practicing back-end on the MERN stack. Using HTML5, CSS3,
                  JavaScript, and React. I have developed sites from UI/UX
                  templates, and also made custom design templates for clients.
                </p>
              </div>
              <div className="service">
                <h3>Digital Marketing</h3>
                <p>
                  After obtaining the google digital marketing certification, I
                  have helped both new clients, and clients with previously
                  existing websites to create more value in their virtual (web)
                  shops. Using marketing tools such as SEO optimization and web
                  design, I have been able to satisfy my clients to a great
                  degree.
                </p>
              </div>
              <div className="service">
                <h3>Content Creation</h3>
                <p>
                  I have created effective contents for clients who desire a
                  native english writer to get the message across to their
                  customers. Communication is key in business. Knowing this, I
                  have invested much in the business language to aid my clients'
                  returns.
                </p>
              </div>
            </div>
            <a href="#work" className="btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              My Works
            </a>
          </section>
          {/* About Me */}
          <section className="about-me" id="about">
            <h2 className="section-title section-title-about">Who I am</h2>
            <p className="section-subtitle section-subtitle-about">
              Designer and developer based in Kano, Nigeria
            </p>
            <div className="about-me-body">
              <p>
                I love the MERN stack because I find it fluid and consistent in
                the parent language (JavaScript), but I am open to working with
                other stacks too. I just want to get efficient tech solutions to
                users in any way possible.
              </p>
              <p>
                I currently live Nigeria, Kano to be precise. Lovely place to go
                on a retreat. My Interests are; programming, business, music and
                gaming. A big fan of both the achievements and prospects of
                technology to the human race.
              </p>
            </div>
            <img
              src={profile}
              alt="Godwin's profile"
              className="about-me-img"
            />
          </section>
          {/* My works */}
          <section className="my-work" id="work">
            <h2 className="section-title">My works</h2>
            <p className="section-subtitle-work">
              A selection of my range of work
            </p>
            <div className="portfolio">
              <div className="card">
                <a
                  href="https://owebiwan.github.io/Legate-Quotes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  <img
                    src={legate}
                    alt="random quote generator app"
                    className="card-img"
                  />
                  <div className="card-text">
                    <h4>Quote Legate</h4>
                    <p>A war based quote app with interactive features</p>
                  </div>
                </a>
              </div>
              <div className="card">
                <a
                  href="https://owebiwan.github.io/Cool-Markup/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="card-link"
                >
                  <img
                    src={markup}
                    alt="random quote generator app"
                    className="card-img"
                  />

                  <div className="card-text">
                    <h4>Markup</h4>
                    <p>A markdown previewing app to check your syntax</p>
                  </div>
                </a>
              </div>
              <div className="card">
                <a
                  href="https://petsclique.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  <img
                    src={petsclique}
                    alt="random quote generator app"
                    className="card-img"
                  />

                  <div className="card-text">
                    <h4>Petclique</h4>
                    <p>
                      An E-commerce website built with shopify technologies and
                      CSS
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
