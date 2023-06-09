import '../../index.scss';
import LanguageContext from '../language/LanguageContext';
import Paragraph from '../paragraph/Paragraph.js';
import Button from '../button/Button';

function Bio() {
    return (
        <LanguageContext.Consumer>
            {({ isEnglishClicked }) => (
                <div className="bio" id="bio">
                    <img
                        src="images/avatar.png"
                        className="bio__img"
                        alt="avatar"
                    ></img>
                    <h2>
                        {' '}
                        {isEnglishClicked ? 'About me!' : 'À propos de moi !'}
                    </h2>
                    <Paragraph className="bio__para">
                        {isEnglishClicked
                            ? "Hi! I'm Theressa, a curious and highly motivated web developer on a mission to build accessible, intuitive, and meaningful web applications ✨"
                            : 'Salut ! Je suis Theressa, une développeuse web curieuse et très motivée dont la mission est de créer des applications web accessibles, intuitives et utiles ✨'}
                    </Paragraph>
                    <Paragraph className="bio__para">
                        {isEnglishClicked
                            ? 'I started learning to code so that I could optimise the layout of my online literary magazine in HTML and CSS. I quickly became interested in programming, and graduated with my diploma in Web Development from OpenClassrooms. I am now looking to collaborate with a team of talented developers, building high quality, long term projects in the French Tech ecosystem.'
                            : "J'ai commencé à apprendre à coder afin d'optimiser la mise en page de mon magazine littéraire en ligne en HTML et CSS. Je me suis rapidement intéressée à la programmation, et j'ai obtenu mon diplôme en développement web chez OpenClassrooms. Je cherche maintenant à collaborer avec une équipe de développeurs talentueux, en construisant des projets de qualité et à long terme dans l'écosystème de la French Tech."}
                    </Paragraph>
                    <div class="cv" id="cv">
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
                    </div>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Bio;
