import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career and Education Highlights</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBookOpen} />}
          >
            <h3 className="vertical-timeline-element-title">PhD Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Department of Computer Science</h4>
            <h4 className="vertical-timeline-element-subtitle">Tufts University</h4>
            <p>
              <em>Ongoing industry student, expected graduation 2029</em>
            </p>
            <p>
              Visualization of natural language data and explainability, error analysis, and ethics in agentic AI systems.
            </p>
            <p>
              Advised by <a href="https://facultyprofiles.tufts.edu/remco-chang" target="_blank" rel="noreferrer">Prof. Remco Chang</a> in the <a href="https://valt.cs.tufts.edu/">Visual Analytics Lab</a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="October 2023 - December 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Head of Data</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://www.pryon.com/">Pryon Research</a></h4>
            <p>
              Lead and managed the Pryon Data Team, which provides bespoke computer vision and natural language datasets to teams throughout the company.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2017 - September 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle"><a href="https://www.adobe.com/acrobat/business.html">Adobe Document Cloud</a></h4>
            <p>
              <strong>2022 - 2023</strong>: Curated and developed PDF document datasets for GenAI and LLM features in Document Cloud products
            </p>
            <p>
              <strong>2020 - 2022</strong>: Developed evaluation metric suites for language, image, and multi-modal models for form-field detection in Adobe Sign
            </p>
            <p>
              <strong>2017 - 2020</strong>: Conducted original research relevant for transitioning Adobe Research projects into consumer products and features, including tasks on definition extraction, document segmentation, document summarization and highlighting,
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">MS Computational Linguistics</h3>
            <h4 className="vertical-timeline-element-subtitle">Department of Computer Science</h4>
            <h4 className="vertical-timeline-element-subtitle">Brandeis University</h4>
            <p>
              Advised by <a href="https://www.cs.brandeis.edu/~xuen/">Prof. Nianwen (Bert) Xue</a> and <a href="http://www.mariemeteer.com/">Dr. Marie Meteer</a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012 - 2016"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">BS Computational Linguistics</h3>
            <h4 className="vertical-timeline-element-subtitle">Department of Linguistics</h4>
            <h4 className="vertical-timeline-element-subtitle">University of Southern California</h4>
            <p>
              <strong>Minors:</strong> Computer Science, East Asian Languages and Cultures (Mandarin Chinese)
            </p>
            <p>
              Highlights:
              <ul>
                <li>First graduate of the <a href="https://catalogue.usc.edu/preview_program.php?catoid=14&poid=17543&hl=linguistics&returnto=search">Computational Linguistics BS program</a></li>
                <li><a href="https://studentrecognition.usc.edu/awards/">Order of Troy</a> recipient</li>
                <li>2013 <a href="https://www.ed.gov/grants-and-programs/grants-higher-education/ifle/foreign-language-and-area-studies-program">FLAS Fellow</a>, Beijing, China</li>
                <li><a href="https://dornsife.usc.edu/thematic-option/">Thematic Option Honors Program</a> student</li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;