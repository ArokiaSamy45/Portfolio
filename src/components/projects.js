import coming_soon from "../images/140610-coming-soon.gif";
import "../css/project.css";

export function Project() {
  return (
    <>
      <section className="project" id="projects">
        {/* <img src={coming_soon} alt="coming_soon" className='project_name' /> */}
        <section class="portfolio section" id="portfolio">
          <h2 class="section__title">Portfolio</h2>
          <span class="section__subtitle">Most recent work</span>

          <div class="portfolio__container container_P grid">
            <div class="portfolio__content">
              <div>
                {/* <!-- <i class="uil uil-brackets-curly portfolio__icon"></i> --> */}
                <h3 class="portfolio__title">E-commerce App</h3>
                <p class="portfolio__discription">
                  <b>Front-end:</b>
                  <br />
                  React, HTML/CSS <br />
                  <b>Back-end:</b>
                  <br />
                  Node.js, Express
                  <br />
                  <b>Database:</b><br />
                MongoDB
                </p>
              </div>

              <a
                href="https://github.com/ArokiaSamy45/Nira-sMP/tree/main/client"
                target="_blank"
              >
                <span class="button button--flex button--small button--link portfolio__button">
                  Source-Frontend
                  <i class="uil uil-arrow-right button__icon"></i>{" "}
                </span>
              </a>
              <br />
              <br />

              <a
                href="https://github.com/ArokiaSamy45/Nira-sMP/tree/main/server"
                target="_blank"
              >
                <span class="button button--flex button--small button--link portfolio__button">
                  Source-Backend
                  <i class="uil uil-arrow-right button__icon"></i>{" "}
                </span>
              </a>
              <br />
              <br />

              <a href="https://nirasmp.onrender.com" target="_blank">
                <span class="button button--flex button--small portfolio__button">
                  Deployed url
                  <i class="uil uil-arrow-right button__icon"></i>{" "}
                </span>
              </a>
            </div>
            <div class="portfolio__content">
              <div>
                {/* <!-- <i class="uil uil-brackets-curly portfolio__icon"></i> --> */}
                <h3 class="portfolio__title">Food Delivery App</h3>
                <p class="portfolio__discription">
                  <b>Front-end:</b>
                  <br />
                  React, HTML/CSS <br />
                  <b>Back-end:</b>
                  <br />
                  Node.js, Express
                  <br />
                  <b>Database:</b><br />
                MongoDB
                </p>
              </div>

              <a
                href="https://github.com/ArokiaSamy45/Bistro_FE"
                target="_blank"
              >
                <span class="button button--flex button--small button--link portfolio__button">
                  Source-Frontend
                  <i class="uil uil-arrow-right button__icon"></i>{" "}
                </span>
              </a>
              <br />
              <br />

              <a
                href="https://github.com/ArokiaSamy45/Bistro_BE"
                target="_blank"
              >
                <span class="button button--flex button--small button--link portfolio__button">
                  Source-Backend
                  <i class="uil uil-arrow-right button__icon"></i>{" "}
                </span>
              </a>
              <br />
              <br />

              <a href="https://seaview-bistro.netlify.app/home" target="_blank">
                <span class="button button--flex button--small portfolio__button">
                  Deployed url
                  <i class="uil uil-arrow-right button__icon"></i>{" "}
                </span>
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
