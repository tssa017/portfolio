import '../../index.scss';
import LanguageContext from '../language/LanguageContext';
import Paragraph from '../paragraph/Paragraph.js';
// import Button from '../button/Button';

function Bio() {
    return (
        <LanguageContext.Consumer>
            {({ isEnglishClicked }) => (
                <div className="bio" id="bio">
                    <h2>
                        {' '}
                        {isEnglishClicked ? 'About me' : 'À propos de moi'}
                    </h2>
                    <Paragraph className="bio__para">
                        {isEnglishClicked
                            ? "Hi! I'm Theressa, a Full-Stack developer, Berkeley alum, and bookworm based in Paris. I'm currently a Data Automation Developer at Captain Data."
                            : 'Salut ! Moi c\'est Theressa, une développeuse Full-Stack, Berkeley alumni, et rat de bibliothèque basée à Paris. Je suis actuellement Développeuse "Data Automation Developer" chez Captain Data.'}
                    </Paragraph>
                    <Paragraph className="bio__para">
                        {isEnglishClicked
                            ? 'I started teaching myself how to code my literary magazine with HTML and CSS, and soon became hooked. Looking forward to continue building accessible, secure web applications!'
                            : "J'ai commencé à apprendre à coder moi-même mon magazine littéraire avec HTML et CSS, et je suis rapidement devenue passionée. J'ai hâte de continuer à construire des applications web accessibles et sécurisées !"}
                    </Paragraph>
                    {/* <div class="cv" id="cv">
                        {isEnglishClicked ? (
                            <a
                                download=""
                                href="pdf/CV_June_2023_compressed.pdf"
                                aria-label="Link to Token to Theressa Malone CV"
                            >
                                <Button className="cv__btn">
                                    Download my CV!
                                </Button>
                            </a>
                        ) : (
                            <a
                                download=""
                                href="pdf/CV_juin_2023_compressed.pdf"
                                aria-label="Link to Token to Theressa Malone CV"
                            >
                                <Button className="cv__btn">
                                    Télécharger mon CV !
                                </Button>
                            </a>
                        )}
                    </div> */}
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Bio;
