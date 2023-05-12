import '../../index.scss';
import Button from '../button/Button.js';

function Bio() {
    return (
        <div className="bio">
            <p>
                I started learning to code so that I could optimise the layout
                of my online literary magazine in HTML and CSS. I quickly became
                interested in programming, and began to develop my portfolio
                with Full-Stack projects.
            </p>
            <Button
            // className={}
            // onClick={}
            >
                Say hi 👋
            </Button>
        </div>
    );
}

export default Bio;
