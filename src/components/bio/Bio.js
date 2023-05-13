import '../../index.scss';
import Button from '../button/Button.js';

function Bio() {
    return (
        <div className="bio">
            <img src="images/avatar.png" className="bio__img"></img>
            <p className="bio__para">
                I started learning to code so that I could optimise the layout
                of my online literary magazine in HTML and CSS. I quickly became
                interested in programming, and began to develop my portfolio
                with Full-Stack projects.
            </p>
            <Button
                className={`bio__btn`}
                // onClick={}
                href="mailto:theressadmalone@gmail.com"
            >
                Say hi 👋
            </Button>
        </div>
    );
}

export default Bio;
