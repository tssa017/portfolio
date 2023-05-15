import '../../index.scss';
import Card from '../card/Card.js';
import Paragraph from '../paragraph/Paragraph.js';

function Projects() {
    return (
        <div className="projects">
            <h2>Check out some of my projects!</h2>
            <div className="projects__cards-cont">
                <a href="https://github.com/tssa017/groupomania">
                    <Card src="images/Groupomania.png">
                        <h2>Groupomania</h2>
                        <Paragraph>
                            A <strong>secure, accessible</strong> social media
                            platform I designed with <strong>Figma</strong>.
                            <br></br> • Integrated SQL database, using{' '}
                            <strong>MySQL</strong> with{' '}
                            <strong>Sequelize.js</strong>
                            <br></br> • API built with <strong>Node.js</strong>{' '}
                            and <strong>Express</strong>
                            <br></br>• Front-End built with{' '}
                            <strong>React</strong> and <strong>SCSS</strong>
                        </Paragraph>
                    </Card>
                </a>
                <a href="https://glowgirls.co.nz/">
                    <Card src="images/Glow_girls.png">
                        <h2>Glow Girls</h2>
                        <Paragraph>
                            An <strong>accessible</strong>,{' '}
                            <strong>mobile-first</strong> booking website I
                            built for a New Zealand-based beauty company.
                            <br></br> • Designed with <strong>Figma</strong>
                            <br></br> • Built in <strong>SCSS</strong> and{' '}
                            <strong>HTML</strong>
                            <br></br> • Embedded third-party Acuity booking
                            service
                        </Paragraph>
                    </Card>
                </a>
                <a href="http://www.wulfman-corporation.com/">
                    <Card src="images/Wulfman_corporation.png">
                        <h2>Wulfman Corporation</h2>
                        <Paragraph>
                            <strong>Optimised</strong> this Blockchain / Web3
                            consulting company:<br></br> • Performed an{' '}
                            <strong>Accessibility</strong> and{' '}
                            <strong>SEO</strong> audit using{' '}
                            <strong>Lighthouse</strong>
                            <br></br>• Site conforms to current{' '}
                            <strong>WCAG3</strong> standards<br></br> • Made
                            site <strong>responsive</strong> and integrated{' '}
                            <strong>mobile-first UX design</strong>
                            <br></br>• Reduced the size of the project by{' '}
                            <strong>45.4%</strong>
                        </Paragraph>
                    </Card>
                </a>
                <a href="https://booki-theressa-malone.netlify.app/">
                    <Card src="images/Booki.png">
                        <h2>Booki</h2>
                        <Paragraph>
                            A <strong>responsive,</strong> and{' '}
                            <strong>accessible</strong> website integrated from
                            mock-ups
                            <br></br> • Built with <strong>HTML</strong> and{' '}
                            <strong>CSS</strong>
                            <br></br> • Conforms to <strong>WCAG3</strong>{' '}
                            standards
                        </Paragraph>
                    </Card>
                </a>
                <a href="https://ohmyfood-theressa.netlify.app/">
                    <Card src="images/Ohmyfood.png">
                        <h2>Ohmyfood</h2>
                        <Paragraph>
                            A <strong>responsive, accessible</strong> website
                            integrated from mock-ups
                            <br></br> • Built with <strong>HTML</strong> and{' '}
                            <strong>SCSS</strong>
                            <br></br> • Features <strong>CSS animations</strong>
                            <br></br> • Conforms to <strong>WCAG3</strong>{' '}
                            standards
                        </Paragraph>
                    </Card>
                </a>
            </div>
        </div>
    );
}

export default Projects;
