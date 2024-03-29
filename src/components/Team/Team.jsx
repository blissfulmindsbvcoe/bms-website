import './Team.css';
import {
    faFacebook,
    faLinkedin,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';
import { TeamData, FoundersData, TeacherData } from '../../data/team.data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Navbar/Navbar.component';
import { useState } from 'react';
import Footer from '../Footer/footer.component';
const Team = () => {

    const imageCount = 6;

    const [imageNo, setImageNo] = useState(0);

    const nextImage = () => {
        if(imageNo === imageCount-1) {
            setImageNo(0)
        } else {
            setImageNo(prev => (prev+1))
        }
    }

    const prevImage = () => {
        if(imageNo === 0) {
            setImageNo(imageCount-1)
        } else {
            setImageNo(prev => (prev-1))
        }
    }

    return (
        <>
            <Navbar isTeam={true}/>
            <div className='Team__container'>
                <div className='Team__container1'>
                    <div className='Team__container1left'>
                        <div className='Team__Overlay'>
                            <div className='Team__leftOverlay'  onClick={prevImage}><i className="fa-solid fa-angle-left" style={{fontSize: '50px', color: 'black'}}></i></div>
                            <div className='Team__rightOverlay' onClick={nextImage}><i className="fa-solid fa-angle-right" style={{fontSize: '50px', color: 'black'}}></i></div>
                        </div>
                        <img className='Team__image' src={require(`../../assets/Team/grppic${imageNo}.jpg`)} alt='group pic' height="100%" width="100%" />
                    </div>
                    <div className='Team__container1right'>
                        <p className='Team__containerHeading'>Blissful Minds Society</p>
                        <p className='Team__containerSubHeading'>Popularly abbreviated as BMS and founded in 2022, is the first student-led Mental Health society at Bharati Vidyapeeth’s College of Engineering and IP University. The main purpose of BMS is to advocate the cause of spreading awareness about mental health issues and encourage people to look beyond the stigma associated with this sensitive subject. The vision of our society is to create a safe space for all, such that under no circumstance, a student feels hesitant to talk about his/her mental health issues. We aim to destigmatize mental illness by conducting interactive and fun sessions, wherein the students can feel heard and can be given useful advice</p>
                    </div>
                </div>
                <div className='Team__heading'>OUR MENTOR</div>
                <div className='Team__teacherCoordinator'>
                    <div style={{width: '40%'}}>
                        <img src={TeacherData.imageSrc} height='80%' width='100%' alt="teacher"/>
                        <p style={{width: '100%', textAlign: 'center', fontWeight: 600}}>Prof. Rubeena Vohra</p>
                    </div>
                    <div className='Team__teacherData'>{TeacherData.detail}</div>
                </div>
                <div className='Team__heading'>OUR FOUNDERS</div>
                <div className='Team__teamContainer'>
                    {FoundersData.map((member, index) => (<div className='Team__personContainer' key={index}>
                            <div className='Team__memberImageContainer'><img className='Team__memberImage' alt="Team" src={member.imageSrc} /></div>
                            <div className='Team__memberName'>{member.name}</div>
                            <div className='Team__position'>{member.position}</div>
                            <div className='Team__social-icons'>
                                {member.instagramURL && (
                                    <a
                                        href={member.instagramURL}
                                        className='Team__social-link'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        aria-label='Instagram'
                                    >
                                        <FontAwesomeIcon icon={faInstagram} className='icon instagram' />
                                    </a>
                                )}
                                {member.linkedInURL && (
                                <a
                                    href={member.linkedInURL}
                                    className='Team__social-link'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='LinkedIn'
                                >
                                    <FontAwesomeIcon icon={faLinkedin} className='icon linkedin' />
                                </a>
                                )}
                                {member.facebookURL && (
                                <a
                                    href={member.facebookURL}
                                    className='Team__social-link'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='Facebook'
                                >
                                    <FontAwesomeIcon icon={faFacebook} className='icon facebook' />
                                </a>
                                )}
                            </div>
                            <div className='Team__memberDetail'>{member.detail}</div>
                            {/* <div style={{width: '100%'}}>
                                <div className='Team__memberCount'>0{index+1}</div>
                                <div className='Team__memberName'>{member.name}</div>
                                <div className='Team__memberPosition'>{member.position}</div>
                            </div> */}
                        </div>)
                    )}
                </div> 
                <div className='Team__heading'>TEAM</div>
                <div className='Team__teamContainer'>
                    {TeamData.map((member, index) => (<div className='Team__personContainer' key={index}>
                            <div className='Team__memberImageContainer'><img className='Team__memberImage' alt="Team" src={member.imageSrc} /></div>
                            <div className='Team__memberName'>{member.name}</div>
                            <div className='Team__position'>{member.position}</div>
                            <div className='Team__social-icons'>
                                {member.instagramURL && (
                                    <a
                                        href={member.instagramURL}
                                        className='Team__social-link'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        aria-label='Instagram'
                                    >
                                        <FontAwesomeIcon icon={faInstagram} className='icon instagram' />
                                    </a>
                                )}
                                {member.linkedInURL && (
                                <a
                                    href={member.linkedInURL}
                                    className='Team__social-link'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='LinkedIn'
                                >
                                    <FontAwesomeIcon icon={faLinkedin} className='icon linkedin' />
                                </a>
                                )}
                                {member.facebookURL && (
                                <a
                                    href={member.facebookURL}
                                    className='Team__social-link'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='Facebook'
                                >
                                    <FontAwesomeIcon icon={faFacebook} className='icon facebook' />
                                </a>
                                )}
                            </div>
                            <div className='Team__memberDetail'>{member.detail}</div>
                            {/* <div style={{width: '100%'}}>
                                <div className='Team__memberCount'>0{index+1}</div>
                                <div className='Team__memberName'>{member.name}</div>
                                <div className='Team__memberPosition'>{member.position}</div>
                            </div> */}
                        </div>)
                    )}
                </div> 
            </div>
            <Footer isTeam={true}/>
        </>
    );
}

export default Team;