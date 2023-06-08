import '../../index.scss';
import LanguageContext from '../language/LanguageContext';
import Paragraph from '../paragraph/Paragraph.js';

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
                            ? "Hi! I'm Theressa, a bilingual web developer on a mission to build accessible, responsive, and beautiful web applications ✨"
                            : 'Salut ! Je suis Theressa, une développeuse web bilingue dont la mission est de créer des applications web accessibles, responsives et belles ✨'}
                    </Paragraph>
                    <Paragraph className="bio__para">
                        {isEnglishClicked
                            ? 'I started learning to code so that I could optimise the layout of my online literary magazine in HTML and CSS. I quickly became interested in programming, and began to develop my portfolio with Full-Stack projects. I am now looking to collaborate with a team of talented developers, building high quality, long term projects in the French Tech ecosystem.'
                            : "J'ai commencé à apprendre à coder afin d'optimiser la mise en page de mon magazine littéraire en ligne en HTML et CSS. Je me suis rapidement intéressée à la programmation et j'ai commencé à développer mon portefeuille avec des projets Full-Stack. Je cherche aujourd'hui à collaborer avec une équipe de développeurs talentueux, en construisant des projets de haute qualité et à long terme dans l'écosystème de la French Tech."}
                    </Paragraph>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Bio;
