import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import headshot from '../assets/images/sasha_headshot.png'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={headshot} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            {/*<a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>*/}
            <a href="https://www.linkedin.com/in/sasha-spala-163ab5b3/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Sasha Spala</h1>
          <p>AI/ML Engineer | Natural Language Data Specialist</p>

          <div className="mobile_social_icons">
            {/*<a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>*/}
            <a href="https://www.linkedin.com/in/sasha-spala-163ab5b3/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;