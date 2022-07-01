import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoH from '../../assets/images/profile.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faTelegram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoH} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="hanif"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/qalam-hazin">
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/HanifNahan">
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/KunimitsuKun">
                    <FontAwesomeIcon icon={faYoutube} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@kunimitsu_kun">
                    <FontAwesomeIcon icon={faTiktok} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/kunimitsu_kun/">
                    <FontAwesomeIcon icon={faInstagram} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://t.me/KunimitsuKun">
                    <FontAwesomeIcon icon={faTelegram} color="4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar