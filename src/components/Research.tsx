import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faFont, faGlasses }from '@fortawesome/free-solid-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Research.scss';

const bulletsAgent = [
    "Who gets to decide what an \"agent\" is?",
    "What are the types of agentic systems currently emerging? Are they deep hierarchies, flat \"crowds\" of AI agents, or somewhere inbetween?",
    "How do agentic systems currently incorporate human users? ",
    "What happens to cascading error in agentic systems? Is there a way to center human strengths while utilzing the benefits of these systems?"
]

const bulletsRep = [
    "How do we formalize the capabilities and limitations of vector representations of language",
    "Is there inspiration from e.g. formal semantics or syntax that could translate to other representations?"
]

const bulletsVis = [
    "How do we capture and represent knowledge at scale, e.g. across a large collection of documents?",
    "Is there a way to visually represent collections of natural language data, so that a human can make an assessment about the content at a glance?"
]

const labelsFirst = [
    "Agentic AI",
    "GenAI/LLMs",
    "HCI",
];

const labelsSecond = [
    "Data Structures",
    "Linguistics-informed NLP",
    "Encoding models"
];

const labelsThird = [
    "Data Vis",
    "Data Science",
    "Big Data",
    "Computational Linguistics",
    "Document Intelligence"
];

function Research() {
    return (
    <div className="container" id="research">
        <div className="skills-container">
            <h1>Research Interests</h1>
            <div className='research-summary'>
                <p>My main area of interest is, broadly, in effectively designing human-computer interfaces around the successes <em>and limitations</em> of machine learning models, especially with respect to the nuances of natural language. As a computional linguist, I think it is critical to the future of the AI industry that we acknowledge the limitations of current computational representations of language and make a concerted effort to understand how our tools today (e.g. LLMs) are approximations of natural language, and do not effectively model all components of human-to-human linguistic communication.</p>
                <p>I am curious about how we design to handle the stochasticity of AI/ML models in consumer-facing systems without forcing human users to shoulder the burden of resolving model failures and without requiring perfect or near-perfect performance. I believe that the consequence of error increases with GenAI systems and advocate for the nuanced and limited usage of generative tools.</p>
            </div>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>Agentic AI</h3>
                    <p> What does it mean to be "agentic" in the age of GenAI?</p>

                    <ul className="flex-bullets">
                        {bulletsAgent.map((item, index) => (
                            <li  key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="flex-chips">
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFont} size="3x"/>
                    <h3>Computational Representations of Natural Language</h3>
                    <p>
                        Vector representations are only one method of representing natural language in a way that is computationally effective. What else is out there?</p>
            
                    <ul className="flex-bullets">
                        {bulletsRep.map((item, index) => (
                            <li  key={index}>{item}</li>
                        ))}
                    </ul>

                    <div className="flex-chips">
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGlasses} size="3x"/>
                    <h3>Visual Analysis of Textual Data</h3>
                    <p>How can we effectively communicate the wealth of knowledge contained by large corpora of natural language data? How do we move beyond the use of word clouds and question-answer chat interfaces?</p>
                    <ul className="flex-bullets">
                        {bulletsVis.map((item, index) => (
                            <li  key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="flex-chips">
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Research;