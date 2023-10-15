import '../../index.scss';
import React from 'react';
import LanguageContext from '../language/LanguageContext';
import Paragraph from '../paragraph/Paragraph.js';
import Card from '../card/Card.js';
import cardsData from './cardsData.json';

function Projects() {
    return (
        <LanguageContext.Consumer>
            {({ isEnglishClicked }) => (
                <div className="projects" id="projects">
                    {isEnglishClicked ? (
                        <h2 className="projects__heading">
                            Check out some of my projects!
                        </h2>
                    ) : (
                        <h2 className="projects__heading">
                            Découvrez mes projets !
                        </h2>
                    )}
                    <div className="projects__cards-cont">
                        {cardsData.map((card, index) => (
                            <a key={index} href={card.link} target="blank">
                                <Card src={card.imageSrc}>
                                    <h2>{card.title}</h2>
                                    <Paragraph>{card.description}</Paragraph>
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Projects;
