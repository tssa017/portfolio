// Imports
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';

// Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Function dynamically displays each page in the browser
function App() {
    return (
        <Router>
            <Header />
            <Footer />
        </Router>
    );
}

export default App;
