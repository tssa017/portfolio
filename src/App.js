// This page defines the main app logic

// Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';
import LanguageContext from './components/language/LanguageContext';
import Button from './components/button/Button';
import FontAwesomeIcon from './components/fontAwesomeIcon/FontAwesomeIcon';
import { useState, useEffect } from 'react';

// Components
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Bio from './components/bio/Bio';
import Form from './components/form/Form';
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
                                <a href="/about" className="current">
                                    <li>About</li>
                                </a>
                                <a href="/projects" className="current">
                                    <li>Projects</li>
                                </a>
                                <a href="/contact" className="current">
                                    <li>Contact</li>
                                </a>
                            </ul>
                        )}{' '}
                        {isFrenchClicked && (
                            <ul className="nav__list">
                                <a href="/about" className="current">
                                    <li>À propos</li>
                                </a>
                                <a href="/projects" className="current">
                                    <li>Projets</li>
                                </a>
                                <a href="/contact" className="current">
                                    <li>Contacter</li>
                                </a>
                            </ul>
                        )}
                    </nav>
                    <div className="language__flex-item">
                        <div className="socials">
                            {/* <a
                                href="mailto:theressa.malone.fr@gmail.com"
                                target="blank"
                            >
                                <FontAwesomeIcon className="fa-regular fa-envelope socials-link"></FontAwesomeIcon>
                            </a> */}
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
                                aria-label="Read page content in English"
                            >
                                EN
                            </Button>
                        )}
                        {!isFrenchClicked && (
                            <Button
                                className="language__btn"
                                id="language__btn--fr"
                                onClick={handleFrenchClick}
                                aria-label="Read page content in French"
                            >
                                FR
                            </Button>
                        )}
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/contact" element={<Form />} />
                    <Route path="/about" element={<Bio />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />
            </Router>
        </LanguageContext.Provider>
    );
}

export default App;
