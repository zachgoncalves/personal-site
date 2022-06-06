import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Navbar = props => {
    return (
        <header className={`d-flex justify-content-between ${styles.site_header}`}>
            <h1>Zachary Goncalves</h1>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" aria-label="LinkedIn logo that links to Zach's LinkedIn profie." href="https://www.linkedin.com/in/zachary-goncalves/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-label="Github logo that links to Zach's Github account." href="https://github.com/zachgoncalves" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
        </header>
    );
};
 
export default Navbar;