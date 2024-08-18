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
                            ? 'While working as an editor, I started teaching myself how to code my literary magazine with HTML and CSS, and soon became hooked. I landed an apprenticeship as a back-end developer in a Big Data start-up, and while working there, I took an interest in the overall product lifecycle. I leveraged this opportunity to combine my background in communication and design with my technical skills, and leapt into building a full-time career in Product Management. Today, I am a Product Manager at Sonio, where I co-ordinate AI-driven solutions for fetal ultrasound imaging.'
                            : "En travaillant comme rédactrice, j'ai commencé à apprendre à coder moi-même mon magazine littéraire avec HTML et CSS, et je suis rapidement devenue passionée. J'ai décroché un apprentissage en tant que développeuse back-end dans une start-up spécialisée dans le Big Data. Pendant que je travaillais là-bas, je me suis intéressé au cycle de vie complet des produits. J'ai saisi cette opportunité pour combiner mon expérience en communication et en design avec mes compétences techniques, et me lancer dans une carrière à temps plein en gestion de produit. Aujourd'hui, je suis Product Manager chez Sonio, où je coordonne des solutions basées sur l'IA pour l'imagerie échographique fœtale."}
                    </Paragraph>
                    <Paragraph className="bio__para">
                        {isEnglishClicked
                            ? "When I'm not obsessing over our product, you will find me in the library. I love reading, writing, and talking about writing 🤓"
                            : "Quand je ne suis pas plongée dans le développement de produits, vous me trouverez à la bibliothèque. J'adore lire, écrire et discuter d'écriture 🤓"}
                    </Paragraph>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Bio;
