import '../../index.scss';
import LanguageContext from '../language/LanguageContext';
import Paragraph from '../paragraph/Paragraph';

function Hero() {
    return (
        <LanguageContext.Consumer>
            {({ isEnglishClicked }) => (
                <div className="hero" id="hero">
                    {isEnglishClicked ? (
                        <Paragraph className="hero__heading">
                            Hi! I'm Theressa 👋
                        </Paragraph>
                    ) : (
                        <Paragraph className="hero__heading">
                            Salut ! Moi c'est Theressa 👋
                        </Paragraph>
                    )}
                    <img
                        src="images/Theressa.jpg"
                        alt="Theressa Malone"
                        className="hero__img"
                    ></img>
                    {isEnglishClicked ? (
                        <Paragraph className="hero__para">
                            I'm a Product Manager, Berkeley alum, and bookworm
                            based in Paris.<br></br> I'm currently building
                            AI-driven solutions for women's health at Sonio 👩‍🍼
                        </Paragraph>
                    ) : (
                        <Paragraph className="hero__para">
                            Je suis Product Manager, Berkeley alumni, et rat de
                            bibliothèque basée à Paris.<br></br> Je développe
                            actuellement des solutions basées sur l'IA pour la
                            santé des femmes chez Sonio 👩‍🍼
                        </Paragraph>
                    )}
                    <Paragraph className="hero__stack-heading">
                        {' '}
                        {isEnglishClicked
                            ? 'Current technical stack:'
                            : 'Stack technique actuelle :'}
                    </Paragraph>
                    <div className="hero__stack-cont">
                        <ul className="hero__stack-list">
                            <li>
                                <strong>
                                    {isEnglishClicked
                                        ? 'Front-End:'
                                        : 'Front-End :'}
                                </strong>
                            </li>
                            <li>HTML5</li>
                            <li>CSS3 / SCSS / Tailwind CSS</li>
                            <li>JavaScript / TypeScript</li>
                            <li>React</li>
                            <li>Next.js</li>
                        </ul>
                        <ul className="hero__stack-list">
                            <li>
                                <strong>
                                    {isEnglishClicked
                                        ? 'Back-End:'
                                        : 'Back-End :'}
                                </strong>
                            </li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MySQL / Sequelize / PostgreSQL</li>
                            <li>MongoDB / Mongoose</li>
                        </ul>
                        <ul className="hero__stack-list">
                            <li>
                                <strong>
                                    {isEnglishClicked
                                        ? 'Productivity:'
                                        : 'Outils de productivité :'}
                                </strong>
                            </li>
                            <li>GitHub / GitLab</li>
                            <li>Netlify / Vercel</li>
                            <li>Visual Studio Code</li>
                            <li>Linear</li>
                            <li>Figma</li>
                            <li>Notion</li>
                        </ul>
                    </div>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Hero;
