// This page defines the main app logic

// Imports
import { BrowserRouter as Router } from 'react-router-dom';
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
                            aria-label="Read page content in English"
                        >
                            🇬🇧
                        </Button>
                    )}
                    {!isFrenchClicked && (
                        <Button
                            className="language__btn"
                            id="language__btn--fr"
                            onClick={handleFrenchClick}
                            aria-label="Read page content in French"
                        >
                            🇫🇷
                        </Button>
                    )}
                </div>
                <Hero />
                <Bio />
                <Projects />
                <Footer />
            </Router>
        </LanguageContext.Provider>
    );
}

export default App;
