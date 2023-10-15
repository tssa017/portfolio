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
                            Hi! I'm Theressa.
                        </Paragraph>
                    ) : (
                        <Paragraph className="hero__heading">
                            Salut ! Moi c'est Theressa.
                        </Paragraph>
                    )}
                    <img
                        src="images/Theressa.jpg"
                        alt="Theressa Malone"
                        className="hero__img"
                    ></img>
                    {isEnglishClicked ? (
                        <Paragraph className="hero__para">
                            I'm a Full-Stack developer, Berkeley alum, and
                            bookworm based in Paris.<br></br> I'm currently
                            working as a Data Automation Developer at Captain
                            Data.
                        </Paragraph>
                    ) : (
                        <Paragraph className="hero__para">
                            Je suis développeuse Full-Stack, Berkeley alumni, et
                            rat de bibliothèque basée à Paris.<br></br> Je suis
                            actuellement en poste de Data Automation Developer
                            chez Captain Data.
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
                            <li>MySQL / Sequelize</li>
                            <li>MongoDB / Mongoose</li>
                        </ul>
                        <ul className="hero__stack-list">
                            <li>
                                <strong>
                                    {isEnglishClicked
                                        ? 'Ecosystem:'
                                        : 'Ecosystem :'}
                                </strong>
                            </li>
                            <li>GitHub / GitLab</li>
                            <li>Netlify</li>
                            <li>Vercel</li>
                            <li>Visual Studio Code</li>
                        </ul>
                    </div>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Hero;
