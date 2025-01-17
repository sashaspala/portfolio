import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faMagnifyingGlass, faScaleBalanced }from '@fortawesome/free-solid-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const bulletsNL = [
    "Identifying underlying descriptive linguistic phenomena, which help to expand dataset taxonomy to multiple domains",
    "Developing bespoke, accurate, and reproducable annoation guidelines for human and model-assisted labeling tasks",
    "Evaluating label quality at scale to understand label consistency, quality, and spread"
]

const bulletsEthics = [
    "Human-driven decision making in AI products",
    "Thoughtful and transparent communication about use of customer data",
    "Maintaining quality data provenance for AI/ML datasets",
    "Integration of human annotation teams into AI dev teams"
]

const labelsFirst = [
    "Natural Language Annotation",
    "Data Provenance",
    "Dataset Management"
];

const labelsSecond = [
    "Multimodal Models",
    "RAG",
    "GraphRAG",
    "GenAI",
    "LLMs",
    "Transformer Models",
    "NER"
];

const labelsThird = [
    "Bias Reduction",
    "Risk Assessment",
    "AI Assurance",
    "Harm Reduction",
    "Environmental Justice"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Commercial Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faComment} size="3x"/>
                    <h3>Natural Language Data Curation</h3>
                    <p>I specialize in the collection and annotation of complex natural language datasets, primarily for the purpose of finetuning and evaluating modern AI/ML models.</p>
                    <p> My expertise focuses on:</p>

                    <ul className="flex-bullets">
                        {bulletsNL.map((item, index) => (
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
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="3x"/>
                    <h3>Product-forward Model Evaluation</h3>
                    <p>
                        I have driven numerous evaluation efforts for consumer-facing AI-driven products and features. My interests are primarily in assessment of AI features which incorporates human user expectations and behaviors.</p>
                    <p>
                        Some previous evaluation tasks I have worked on include:
                    </p>
                    <ul className="flex-bullets">
                    <li><a href="https://www.adobe.com/acrobat/hub/what-is-adobe-liquid-mode.html">Adobe Liquid Mode</a></li>
                    <li><a href="https://aclanthology.org/2020.semeval-1.41.pdf">SemEval 2020 Definition Extraction Evaluation (DEFTEval)</a></li>
                    <li><a href="https://www.pryon.com/product/retrieval-engine">Pryon RAG and GraphRAG Products</a></li>
                    <li><a href="https://www.pryon.com/product/generative-engine">Pryon GenAI Solutions</a></li>
                    </ul>


                    <div className="flex-chips">
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faScaleBalanced} size="3x"/>
                    <h3>AI Ethics</h3>
                    <p>I am committed to ethical data practices, experimental design, and human-centered AI.</p>
                    <p>I regularly advocate for </p>
                    <ul className="flex-bullets">
                        {bulletsEthics.map((item, index) => (
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

export default Expertise;