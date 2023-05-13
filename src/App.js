// This page defines the main app logic
// Imports
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';

// Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Title from './components/title/Title';
import Socials from './components/socials/Socials';
import Bio from './components/bio/Bio';
import Projects from './components/projects/Projects';

// Function dynamically displays each page in the browser
function App() {
    return (
        <Router>
            <Header />
            <Title />
            <Socials />
            <Bio />
            <Projects />
            <Footer />
        </Router>
    );
}

export default App;
