import '../../index.scss';
import Paragraph from '../paragraph/Paragraph.js';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <Paragraph>
                    © Theressa Malone, 2023 | Built in <strong>React</strong>
                </Paragraph>
            </footer>
        </div>
    );
}

export default Footer;
