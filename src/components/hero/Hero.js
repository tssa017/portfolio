import '../../index.scss';
import FontAwesomeIcon from '../fontAwesomeIcon/FontAwesomeIcon';

function Hero() {
    return (
        <div className="hero">
            <div className="hero__main-cont">
                <h1 className="hero__main-cont--heading">
                    Web Developer based in Paris, France
                </h1>
                <p>
                    <em>
                        Current technical stack:{' '}
                        <strong>Node.js, React, SCSS, HTML5</strong>
                    </em>
                </p>
            </div>
            <ul className="hero__list">
                <li className="hero__list-item">
                    <FontAwesomeIcon className="fa-brands fa-node hero__list-icon"></FontAwesomeIcon>
                </li>
                <li className="hero__list-item">
                    <FontAwesomeIcon className="fa-brands fa-react hero__list-icon"></FontAwesomeIcon>
                </li>
                <li className="hero__list-item">
                    <FontAwesomeIcon className="fa-brands fa-sass hero__list-icon"></FontAwesomeIcon>
                </li>
                <li className="hero__list-item">
                    <FontAwesomeIcon className="fa-brands fa-html5 hero__list-icon"></FontAwesomeIcon>
                </li>
            </ul>
        </div>
    );
}

export default Hero;
