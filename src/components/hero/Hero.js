import '../../index.scss';
import LanguageContext from '../language/LanguageContext';
import Paragraph from '../paragraph/Paragraph';

function Hero() {
    return (
        <LanguageContext.Consumer>
            {({ isEnglishClicked }) => (
                <div className="hero" id="hero">
                    {isEnglishClicked ? (
                        <h1 className="hero__heading">
                            Web Developer based in Paris, France
                        </h1>
                    ) : (
                        <h1 className="hero__heading">
                            Développeuse web basé à Paris, France
                        </h1>
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
                            <li>CSS3 / SCSS / Tailwind CSS</li>
                            <li>HTML5</li>
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
                            <li>Visual Studio Code</li>
                        </ul>
                    </div>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Hero;
