import React from "react";
import '../assets/styles/About.scss';

function About() {

  return (
    <div className="container" id="about">
      <div className="summary-section">
        {/*<div className="image-wrapper">
          <img src={headshot} alt="Avatar" />
        </div>*/}
        <div className="content">
          {/*<div className="social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sasha-spala-163ab5b3/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>*/}
          <h1>Hi, hello there!</h1>
          <p>I am a computational linguist in the greater Boston area with a background in <strong>ML/AI development and evaluation</strong> and <strong>bespoke data curation and annotation</strong>.</p>

          <p>I have worked in the AI industry since 2017 and am currently in my 1st year as a PhD student in the VALT lab at Tufts University. Most of my professional time has been at Adobe Document Cloud as a machine learning engineer, where I worked in applied research on a number of document intelligence tasks, and at Pryon as the Head of Data, where I oversaw the production and maintenance of all ML training and testing datasets.</p>

          <p>When I'm not working or doing research, I'm likely curled up with a knitting project, snuggling one (or both) of my two kitties, Cranberry and Asparagus, or making sure my 17th century home remains upright for another week.</p>

          <div className="mobile_social_icons">
            {/*<a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>*/}
            {/*<a href="https://www.linkedin.com/in/sasha-spala-163ab5b3/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;