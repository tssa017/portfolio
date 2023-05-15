import '../../index.scss';
import Button from '../button/Button.js';
import Paragraph from '../paragraph/Paragraph.js';

function Bio() {
    return (
        <div className="bio">
            <img
                src="images/avatar.png"
                className="bio__img"
                alt="avatar"
            ></img>
            <Paragraph className="bio__para">
                I started learning to code so that I could optimise the layout
                of my online literary magazine in HTML and CSS. I quickly became
                interested in programming, and began to develop my portfolio
                with Full-Stack projects.
            </Paragraph>
            <a href="mailto:theressadmalone@gmail.com">
                {' '}
                <Button className={`bio__btn`}>Say hi 👋</Button>
            </a>
        </div>
    );
}

export default Bio;
