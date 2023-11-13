// This page defines the main app logic

// Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';
import LanguageContext from './components/language/LanguageContext';
import Button from './components/button/Button';
import FontAwesomeIcon from './components/fontAwesomeIcon/FontAwesomeIcon';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Bio from './components/bio/Bio';
// import Form from './components/form/Form';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

function App() {
    useEffect(() => {
        const currentPath = window.location.pathname;
        const links = document.getElementsByClassName('current');

        for (const link of links) {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('current-page');
            }
        }
    }, []);

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
        // Consuming component responds to context provider function
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
                {/* Set site language on button click */}
                <div className="language">
                    <nav className="nav">
                        {isEnglishClicked && (
                            <ul className="nav_list">
                                <Link to="/about" className="current">
                                    <li>About</li>
                                </Link>
                                <Link to="/projects" className="current">
                                    <li id="middle-item">Projects</li>
                                </Link>
                                {/* <Link to="/contact" className="current">
                                    <li>Contact</li>
                                </Link> */}
                            </ul>
                        )}{' '}
                        {isFrenchClicked && (
                            <ul className="nav__list">
                                <Link to="/about" className="current">
                                    <li>À propos</li>
                                </Link>
                                <Link to="/projects" className="current">
                                    <li id="middle-item">Projets</li>
                                </Link>
                                {/* <Link to="/contact" className="current">
                                    <li>Contacter</li>
                                </Link> */}
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
                    {/* <Route path="/contact" element={<Form />} /> */}
                    <Route path="/about" element={<Bio />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />
            </Router>
        </LanguageContext.Provider>
    );
}

export default App;
