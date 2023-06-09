import '../../index.scss';
import LanguageContext from '../language/LanguageContext';
import Card from '../card/Card.js';
import Paragraph from '../paragraph/Paragraph.js';

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
                        <a
                            href="https://milly-magazine.netlify.app/"
                            target="blank"
                        >
                            <Card src="images/milly_logo.svg">
                                <h2>Milly Magazine</h2>
                                <Paragraph>
                                    {isEnglishClicked
                                        ? 'In construction: an online literary magazine I designed with Figma. Built with React, SCSS, and Tailwind.'
                                        : "En cours de construction : un magazine littéraire en ligne que j'ai conçue avec Figma. Construite avec React, SCSS, et Tailwind."}
                                </Paragraph>
                            </Card>
                        </a>
                        <a
                            href="https://github.com/tssa017/groupomania"
                            target="blank"
                        >
                            <Card src="images/Groupomania.png">
                                <h2>Groupomania</h2>
                                <Paragraph>
                                    {isEnglishClicked
                                        ? 'A secure, accessible social media platform designed with Figma, built with MySQL, Sequelize.js, Node.js, Express, React and SCSS.'
                                        : 'Une plateforme de médias sociaux sécurisée et accessible, conçue avec Figma, construite avec MySQL, Sequelize.js, Node.js, Express, React et SCSS.'}
                                </Paragraph>
                            </Card>
                        </a>
                        <a href="https://glowgirls.co.nz/" target="blank">
                            <Card src="images/Glow_girls.png">
                                <h2>Glow Girls</h2>
                                <Paragraph>
                                    {isEnglishClicked
                                        ? 'An accessible, mobile-first website designed with Figma, and built in SCSS and HTML.'
                                        : 'Un site web accessible et mobile conçu avec Figma, et construit en SCSS et HTML.'}
                                </Paragraph>
                            </Card>
                        </a>
                        <a
                            href="http://www.wulfman-corporation.com/"
                            target="blank"
                        >
                            <Card src="images/Wulfman_corporation.png">
                                <h2>Wulfman Corporation</h2>
                                <Paragraph>
                                    {isEnglishClicked
                                        ? 'I optimised this website, performing an Accessibility and SEO audit using Lighthouse. Site conforms to current WCAG3 standards and is fully responsive. I reduced the project size by 45.4%'
                                        : "J'ai optimisé ce site web en effectuant un audit d'accessibilité et de référencement à l'aide de Lighthouse. Le site est conforme aux normes WCAG3 actuelles et est entièrement responsive. J'ai réduit la taille du projet de 45,4 %"}
                                </Paragraph>
                            </Card>
                        </a>
                        <a
                            href="https://booki-theressa-malone.netlify.app/"
                            target="blank"
                        >
                            <Card src="images/Booki.png">
                                <h2>Booki</h2>
                                <Paragraph>
                                    {isEnglishClicked
                                        ? 'A responsive, accessible, static website integrated from mock-ups. Built with HTML and CSS3.'
                                        : 'Un site web statique, responsive et accessible, intégré à partir de maquettes. Construit avec HTML et CSS.'}
                                </Paragraph>
                            </Card>
                        </a>
                        <a
                            href="https://ohmyfood-theressa.netlify.app/"
                            target="blank"
                        >
                            <Card src="images/Ohmyfood.png">
                                <h2>Ohmyfood</h2>
                                <Paragraph>
                                    {isEnglishClicked
                                        ? 'A responsive, accessible, static website integrated from mock-ups. Built with HTML and SCSS, including CSS animations.'
                                        : 'Un site web statique, responsive et accessible, intégré à partir de maquettes. Construit en HTML et SCSS, avec des animations CSS.'}
                                </Paragraph>
                            </Card>
                        </a>
                    </div>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Projects;
