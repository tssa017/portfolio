import '../../index.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header className="header">
                <Link to="/">
                    <h1>Theressa Malone</h1>
                </Link>
            </header>
        </div>
    );
}

export default Header;
