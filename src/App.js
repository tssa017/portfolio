// Imports
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from 'react-router-dom';
import './index.scss';
import LanguageContext from './components/language/LanguageContext';
import Button from './components/button/Button';
import FontAwesomeIcon from './components/fontAwesomeIcon/FontAwesomeIcon';
import { useState } from 'react';

// Components
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Bio from './components/bio/Bio';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

function App() {
    // These states store information about which language option a user has selected
    const [isEnglishClicked, setIsEnglishClicked] = useState(true);
    const [isFrenchClicked, setIsFrenchClicked] = useState(false);

    // If user clicks English, reset button states
    const handleEnglishClick = () => {
        setIsEnglishClicked(true);
        setIsFrenchClicked(false);
    };

    const handleFrenchClick = () => {
        setIsEnglishClicked(false);
        setIsFrenchClicked(true);
    };

    return (
        <LanguageContext.Provider
            value={{
                isEnglishClicked,
                isFrenchClicked,
                handleEnglishClick,
                handleFrenchClick,
            }}
        >
            <Router>
                <Header />
                <div className="language">
                    <nav className="nav">
                        {isEnglishClicked && (
                            <ul className="nav_list">
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'current-page'
                                                : 'nav-link'
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li id="middle-item">
                                    <NavLink
                                        to="/projects"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'current-page'
                                                : 'nav-link'
                                        }
                                    >
                                        Projects
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                        {isFrenchClicked && (
                            <ul className="nav__list">
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'current-page'
                                                : 'nav-link'
                                        }
                                    >
                                        À propos
                                    </NavLink>
                                </li>
                                <li id="middle-item">
                                    <NavLink
                                        to="/projects"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'current-page'
                                                : 'nav-link'
                                        }
                                    >
                                        Projets
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </nav>
                    <div className="language__flex-item">
                        <div className="socials">
                            <a href="https://github.com/tssa017">
                                <FontAwesomeIcon className="fa-brands fa-github socials-link"></FontAwesomeIcon>
                            </a>
                            <a href="https://www.linkedin.com/in/theressamalone/">
                                <FontAwesomeIcon className="fa-brands fa-linkedin socials-link"></FontAwesomeIcon>
                            </a>
                        </div>
                        {!isEnglishClicked && (
                            <Button
                                className="language__btn"
                                id="language__btn--en"
                                onClick={handleEnglishClick}
                            >
                                EN
                            </Button>
                        )}
                        {!isFrenchClicked && (
                            <Button
                                className="language__btn"
                                id="language__btn--fr"
                                onClick={handleFrenchClick}
                            >
                                FR
                            </Button>
                        )}
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<Bio />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />
            </Router>
        </LanguageContext.Provider>
    );
}

export default App;
