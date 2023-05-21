import '../../index.scss';
import LanguageContext from '../language/LanguageContext';
import Paragraph from '../paragraph/Paragraph';

function Hero() {
    return (
        <LanguageContext.Consumer>
            {({ isEnglishClicked }) => (
                <div className="hero">
                    {isEnglishClicked ? (
                        <h1 className="hero__heading">
                            Web Developer based in Paris, France
                        </h1>
                    ) : (
                        <h1 className="hero__heading">
                            Développeuse web basé à Paris, France
                        </h1>
                    )}
                    <Paragraph className="hero__para">
                        {isEnglishClicked ? (
                            <em>
                                Current technical stack:{' '}
                                <strong>
                                    Node.js, MySQL, MongoDB, Sequelize,
                                    Mongoose, Express, React, TypeScript,
                                    JavaScript, Lighthouse, SCSS, HTML5,
                                    Netlify, Visual Studio Code
                                </strong>
                            </em>
                        ) : (
                            <em>
                                Stack technique actuelle :{' '}
                                <strong>
                                    Node.js, MySQL, MongoDB, Sequelize,
                                    Mongoose, Express, React, TypeScript,
                                    JavaScript, Lighthouse, SCSS, HTML5,
                                    Netlify, Visual Studio Code
                                </strong>
                            </em>
                        )}
                    </Paragraph>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Hero;
