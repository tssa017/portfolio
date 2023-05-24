import '../../index.scss';
import LanguageContext from '../language/LanguageContext';
import Paragraph from '../paragraph/Paragraph';
import List from '../list/List';

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
                    <List className="hero__stack-list">
                        <li>Node.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Sequelize</li>
                        <li>Mongoose</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>Lighthouse</li>
                        <li>SCSS</li>
                        <li>HTML5</li>
                        <li>Netlify</li>
                        <li>Visual Studio Code</li>
                    </List>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Hero;
