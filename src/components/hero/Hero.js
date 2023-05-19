import '../../index.scss';
import LanguageContext from '../language/LanguageContext';
import Paragraph from '../paragraph/Paragraph';

function Hero() {
    return (
        <LanguageContext.Consumer>
            {({ isEnglishClicked }) => (
                <div className="hero">
                    <div className="hero__main-cont">
                        {isEnglishClicked ? (
                            <h1 className="hero__main-cont--heading">
                                Web Developer based in Paris, France
                            </h1>
                        ) : (
                            <h1 className="hero__main-cont--heading">
                                Développeuse web basé à Paris, France
                            </h1>
                        )}
                        <Paragraph>
                            {isEnglishClicked ? (
                                <em>
                                    Current technical stack:{' '}
                                    <strong>Node.js, React, SCSS, HTML5</strong>
                                </em>
                            ) : (
                                <em>
                                    Stack technique actuelle :{' '}
                                    <strong>Node.js, React, SCSS, HTML5</strong>
                                </em>
                            )}
                        </Paragraph>
                    </div>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Hero;
