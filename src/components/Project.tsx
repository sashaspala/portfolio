import React from "react";
import coling2020 from '../assets/images/coling2020_white.png'
import law2019 from '../assets/images/law14.png'
import coling2018 from '../assets/images/coling2018.png'
import paclic2018 from '../assets/images/PACLIC2018.png'
import lsa2017 from '../assets/images/lsa2017.png'
import patent from '../assets/images/patent.png'
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Publications and Patents</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://patentimages.storage.googleapis.com/d6/39/4b/74396f8367322f/US12147499.pdf" target="_blank" rel="noreferrer"><img src={patent} className="zoom" alt="thumbnail" width="75%"/></a>
                <a href="https://patentimages.storage.googleapis.com/d6/39/4b/74396f8367322f/US12147499.pdf" target="_blank" rel="noreferrer"><h2>Machine-learning tool for generating segmentation and topic metadata for documents</h2></a>
                <p>Rajiv Jain, Varun Manjunatha, Joseph Barrow, Vlad Ion Morariu, Franck Dernoncourt, <strong>Sasha Spala</strong>, Nicholas Miller</p>
                <p><em>US Patent 12147499 awarded Nov. 19 2024</em></p>
            </div>
            <div className="project">
                <a href="https://patentimages.storage.googleapis.com/c3/f1/98/e1c132f815f6ac/US12130850.pdf" target="_blank" rel="noreferrer"><img src={patent} className="zoom" alt="thumbnail" width="75%"/></a>
                <a href="https://patentimages.storage.googleapis.com/c3/f1/98/e1c132f815f6ac/US12130850.pdf" target="_blank" rel="noreferrer"><h2>Model-based semantic text searching</h2></a>
                <p>Trung Bui, Yu Gong, Tushar Dublish, <strong>Sasha Spala</strong>, Sachin Soni, Nicholas Miller, Joon Kim, Franck Dernoncourt, Carl Dockhorn, Ajinkya Kale</p>
                <p><em>US Patent 12130850 awarded Oct. 29 2024</em></p>
            </div>
            <div className="project">
                <a href="https://patentimages.storage.googleapis.com/b4/14/7f/dada35a69167af/US11232255.pdf" target="_blank" rel="noreferrer"><img src={patent} className="zoom" alt="thumbnail" width="75%"/></a>
                <a href="https://patentimages.storage.googleapis.com/b4/14/7f/dada35a69167af/US11232255.pdf" target="_blank" rel="noreferrer"><h2>Generating digital annotations for evaluating and training automatic electronic document annotation models</h2></a>
                <p>Franck Dernoncourt, Walter Chang, Trung Bui, Sean Fitzgerald, <strong>Sasha Spala</strong>, Kishore Aradhya, Carl Dockhorn</p>
                <p><em>US Patent 11232255 awarded Jan. 25 2022</em></p>
            </div>
            <div className="project">
                <a href="https://aclanthology.org/2020.semeval-1.41.pdf" target="_blank" rel="noreferrer"><img src={coling2020} className="zoom" alt="thumbnail" width="75%"/></a>
                <a href="https://aclanthology.org/2020.semeval-1.41.pdf" target="_blank" rel="noreferrer"><h2>SemEval-2020 Task 6: Definition extraction from free text with the DEFT corpus</h2></a>
                <p><strong>Sasha Spala</strong>, Nicholas A Miller, Franck Dernoncourt, Carl Dockhorn</p>
                <p><em>In Proceedings of the Fourteenth Workshop on Semantic Evaluation, talk presented at COLING 2020 in Barcelona, Spain (remote)</em></p>
            </div>
            <div className="project">
                <a href="https://aclanthology.org/W19-4015.pdf" target="_blank" rel="noreferrer"><img src={law2019} className="zoom" alt="thumbnail" width="75%"/></a>
                <a href="https://aclanthology.org/W19-4015.pdf" target="_blank" rel="noreferrer"><h2>DEFT: A corpus for definition extraction in free-and semi-structured text</h2></a>
                <p><strong>Sasha Spala</strong>, Nicholas A Miller, Yiming Yang, Franck Dernoncourt, Carl Dockhorn</p>
                <p><em>In Proceedings of the 13th Linguistic Annotation Workshop, poster presented at ACL 2019 in Florence, Italy </em></p>
            </div>
            <div className="project">
                <a href="https://aclanthology.org/C18-2017.pdf" target="_blank" rel="noreferrer"><img src={coling2018} className="zoom" alt="thumbnail" width="75%"/></a>
                <a href="https://aclanthology.org/C18-2017.pdf" target="_blank" rel="noreferrer"><h2>A web-based framework for collecting and assessing highlighted sentences in a document</h2></a>
                <p><strong>Sasha Spala</strong>, Franck Dernoncourt, Walter Chang, Carl Dockhorn</p>
                <p><em>In Proceedings of the 27th International Conference on Computational Linguistics: System Demonstrations, demonstration presented at COLING 2018 in Santa Fe, New Mexico</em></p>

            </div>
            <div className="project">
                <a href="https://aclanthology.org/Y18-1071.pdf" target="_blank" rel="noreferrer"><img src={paclic2018} className="zoom" alt="thumbnail" width="75%"/></a>
                <a href="https://aclanthology.org/Y18-1071.pdf" target="_blank" rel="noreferrer"><h2>A Comparison Study of Human Evaluated Automated Highlighting Systems</h2></a>
                <p><strong>Sasha Spala</strong>, Franck Dernoncourt, Walter Chang, Carl Dockhorn</p>
                <p><em>In Proceedings of the 32nd Pacific Asia Conference on Language, Information, and Computation, talk presented at PACLIC 2018 in Hong Kong</em></p>
            </div>
            <div className="project">
                <a href="https://journals.linguisticsociety.org/proceedings/index.php/PLSA/article/view/4046/3808" target="_blank" rel="noreferrer"><img src={lsa2017} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://journals.linguisticsociety.org/proceedings/index.php/PLSA/article/view/4046/3808" target="_blank" rel="noreferrer"><h2>Speakers' rapidly-updated expectations influence prosodic realization of information structure</h2></a>
                <p>Iris Chuoying Ouyang, <strong>Sasha Spala</strong>, Elsi Kaiser</p>
                <p><em>In Proceedings of the Linguistic Society of America 2, talk presented at LSA 2017 in Boston, Massachusetts</em></p>
            </div>
        </div>
    </div>
    );
}

export default Project;