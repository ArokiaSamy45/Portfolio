
import React from 'react';
import '../css/home.css';

export function Home() {
  

  return (
    <>
    
      <section id="home" className="home">
        <div className="container">
          <div className="content">
            <div className="home-main">
              <div className="home-text">
                
             
              
              
                <h1>Full-Stack Web Developer</h1>
                <p>
                Hi, I'm Arokia Samy. A passionate Full Stack Web Developer with experience in creating dynamic and responsive web applications using a variety of programming languages and frameworks.
                </p>
                
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/arokia-samy-9167b5165/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/ArokiaSamy45"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </span>
              </div>

              <div className="home-img"></div>
            </div>

            {/*  */}
            <div className="skills">
                  <p>Tech Stack</p>
                  <div className="logos">
                    <ul>
                      <li><img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" title="HTML5" alt="program_img"/></li>
                      <li><img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" title="CSS3" alt="program_img"/></li>
                      <li><img src="https://cdn-icons-png.flaticon.com/512/136/136530.png" title="Javascript" alt="program_img"/></li>
                      <li><img src="https://cdn-icons-png.flaticon.com/512/760/760457.png" title="React JS" alt="program_img"/></li>
                      <li><img src="https://img.icons8.com/color/256/nodejs.png" title="Node JS" alt="program_img"/></li>
                      <li><img src="https://img.icons8.com/fluency/256/mysql-logo.png" title="MySQl" alt="program_img"/></li></ul>
                      </div>
                      </div>
          </div>
        </div>
       
      </section>
    </>
  );
}


