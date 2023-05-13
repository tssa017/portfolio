import '../../index.scss';
import Card from '../card/Card.js';

function Projects() {
    return (
        <div className="projects">
            <Card>
                <h2>Groupomania</h2>
                <p>
                    A secure social media platform made with Node.js, MySQL,
                    Sequelize.js, Express, React, and SCSS
                </p>
            </Card>
            <Card>
                <h2>Reservia</h2>
                <p>
                    A static website integrated from mock-ups built with HTML
                    and CSS
                </p>
            </Card>
            <Card>
                <h2>Ohmyfood</h2>
                <p>
                    A static website integrated from mock-ups built with HTML
                    and SCSS, featuring CSS animations
                </p>
            </Card>
        </div>
    );
}

export default Projects;
