import '../../index.scss';
import FontAwesomeIcon from '../fontAwesomeIcon/FontAwesomeIcon';

function Header() {
    return (
        <div>
            <header className="header">
                <h1>Theressa Malone</h1>
                <div className="header__socials">
                    <a href="https://github.com/tssa017">
                        <FontAwesomeIcon className="fa-brands fa-github header__socials-link"></FontAwesomeIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/theressamalone/">
                        <FontAwesomeIcon className="fa-brands fa-linkedin header__socials-link"></FontAwesomeIcon>
                    </a>
                </div>
            </header>
        </div>
    );
}

export default Header;
