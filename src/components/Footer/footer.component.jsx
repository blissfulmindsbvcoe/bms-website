import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faYoutube,
    // faLinkedin,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import { Link as ScrollLink } from 'react-scroll';

const Footer = ({isTeam}) => {
    return(
        <div className='Footer__container'>
            <div className='Footer__inner'>
                <p className='Footer__heading'>BMS.COM</p>
                <ul className='Footer__list'>
                    <li><a href="/" className='Footer__link'>Home</a></li>
                    {!isTeam && <li><ScrollLink spy={true} smooth={true} duration={500} to="events" className='Footer__link'>Event</ScrollLink></li>}
                    {isTeam && <li><Link to="/" className='Footer__link'>Event</Link></li>}
                </ul>
            </div>
            <div className='Footer__inner'>
                <p className='Footer__heading'>INFORMATION</p>
                <ul className='Footer__list'>
                    {!isTeam &&<li><Link to="/about" className='Footer__link'>About</Link></li>}
                    {isTeam &&<li><a href="/about" className='Footer__link'>About</a></li>}
                    {!isTeam &&<li><ScrollLink spy={true} smooth={true} duration={500} to="contact" className='Footer__link'>Contact Us</ScrollLink></li>}
                    {isTeam &&<li><Link to="/" className='Footer__link'>Contact Us</Link></li>}
                </ul>
            </div>
            <div className='Footer__inner'>
                <p className='Footer__heading'>HELPFUL LINKS</p>
                <ul className='Footer__list'>
                    <li><a href="https://blogs.blissfulmindsbvcoe.com/" className='Footer__link'>Blogs</a></li>
                </ul>
            </div>
            <div className='Footer__inner'>
                <p className='Footer__heading'>ABOUT US</p>
                <p className='Footer__subheading'>Keeping mental health in check.</p>
                <div className='Footer__aboutContainer'>
                    <img alt='logo' src={require('../../assets/Main/logo.png')} width='40%' />
                    <div className='Footer__vertLine'></div>
                    <div className='Footer__socialIconsContainer'>
                        {/* <a target='_blank' href='https://www.instagram.com/blissfulminds_bvcoe/'><FontAwesomeIcon icon={faLinkedin} className='Footer__icon'/></a> */}
                        <a target='_blank' rel="noreferrer" href='https://www.instagram.com/blissfulminds_bvcoe/'><FontAwesomeIcon icon={faInstagram} className='Footer__icon'/></a>
                        <a target='_blank' rel="noreferrer" href='https://www.youtube.com/channel/UC_zUOTNbdnd-tG_guNvG2cw'><FontAwesomeIcon icon={faYoutube} className='Footer__icon'/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;