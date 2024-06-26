

import domain_picture from '../images/0I5A5343 - Copy.JPG'
import '../css/about.css';

export function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={domain_picture} alt="emoji" className="img-side__main-img" />
            
            </div>
            <div className="text-side">
              <h4>About me</h4>
              <h3>
                A dedicated MERN Full-Stack Web Developer based in Puducherry, TamilNadu📍
              </h3>
              <p>
              I'm a MERN full-stack web developer. I have a degree in Civil Engineering, but I'm passionate about building web applications using React, Node.js, and MongoDB. 

I'm fascinated by the way technology is transforming the world and I'm eager to learn new technologies and techniques to stay ahead of the curve. In my free time, I enjoy reading about the latest trends in software development and exploring new coding challenges.

My goal is to work with a team of talented developers on projects that make a positive impact on society. I'm excited to continue my journey as a MERN full-stack developer and look forward to the opportunities that lie ahead."
              </p>
              <a href="https://drive.google.com/file/d/1n-tc6Inwda2SD2kLHWQuHxOrVbaFuAcJ/view?usp=drive_link" target="_blank" rel="noreferrer" className="button button--flex">
                View CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

