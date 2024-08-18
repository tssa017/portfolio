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
                            ? 'While working as an editor, I started teaching myself how to code my literary magazine with HTML and CSS, and soon became hooked.'
                            : "En travaillant comme rédactrice, j'ai commencé à apprendre à coder moi-même mon magazine littéraire avec HTML et CSS, et je suis rapidement devenue passionée."}
                    </Paragraph>
                    <Paragraph className="bio__para">
                        {isEnglishClicked
                            ? 'While taking computer science courses with OpenClassrooms, I started working as a freelance web dev. I designed and built new business websites, and performed audits to improve web performance and SEO on existing websites.'
                            : "Pendant que je suivais des cours d'informatique sur OpenClassrooms, j'ai commencé à travailler comme développeuse web en freelance. J'ai conçu et créé de nouveaux sites web pour des entreprises, et j'ai réalisé des audits pour améliorer la performance et le SEO des sites existants."}
                    </Paragraph>
                    <Paragraph className="bio__para">
                        {isEnglishClicked
                            ? 'I soon landed an apprenticeship as a back-end developer in a Big Data start-up. While working there, I took an interest in the overall product lifecycle. Taking on Product Management responsibilities, I leveraged the opportunity to combine my design and accessibility experience with my technical expertise. I leapt into building a full-time career in Product Management.'
                            : "J'ai rapidement décroché un apprentissage en tant que développeuse back-end dans une start-up spécialisée dans le Big Data. Pendant que je travaillais là-bas, je me suis intéressé au cycle de vie complet des produits. En assumant des responsabilités en gestion de produit, j'ai saisi l'opportunité de combiner mon expérience en design et accessibilité avec mes compétences techniques. Je me suis lancé à plein temps dans une carrière en gestion de produit."}
                    </Paragraph>
                    <Paragraph className="bio__para">
                        {isEnglishClicked
                            ? 'Today, I am working as a Product Manager in the Health industry. I help build and co-ordinate AI-driven solutions for fetal ultrasound imaging 👩‍🍼'
                            : "Aujourd'hui, je travaille en tant que Product Manager dans l'industrie de la santé. Je contribue à la création et à la coordination de solutions basées sur l'IA pour l'imagerie échographique fœtale 👩‍🍼"}
                    </Paragraph>
                    <Paragraph className="bio__para">
                        {isEnglishClicked
                            ? "When I'm not obsessing over our product, you will find me in the library. I love reading, writing, and talking about writing."
                            : "Quand je ne suis pas plongée dans le développement de produits, vous me trouverez à la bibliothèque. J'adore lire, écrire et discuter d'écriture"}
                    </Paragraph>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Bio;
