import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/pro-duotone-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'



const Footer = props => {
    return (
        <footer>
            <span>Made with <FontAwesomeIcon icon={faHeart} /> in Philadelphia. </span>
        </footer>
    );
};

export default Footer; 