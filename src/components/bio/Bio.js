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
                            ? 'While working as an editor, I started teaching myself how to code my literary magazine with HTML and CSS, and soon became hooked! After working as a Full-Stack dev across a variety of small businesses and a big data startup, I found my ideal role in women’s health. Today, I am a Product Manager at Sonio, where I develop AI solutions for fetal ultrasound imaging.'
                            : "Pendant que je travaillais en tant que rédacteur, j'ai commencé à m'auto-former à la programmation de mon magazine littéraire avec HTML et CSS, et je suis rapidement devenu passionné ! Après avoir travaillé comme développeuse Full-Stack pour diverses petites entreprises et une startup de big data, j'ai trouvé mon rôle idéal dans la santé des femmes. Aujourd'hui, je suis Product Manager chez Sonio, où je développe des solutions IA pour l'imagerie échographique fœtale."}
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
