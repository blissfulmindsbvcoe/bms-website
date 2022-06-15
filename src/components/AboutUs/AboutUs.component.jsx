import './AboutUs.css';
import image1 from '../../assets/AboutUs/img1.png';
import image2 from '../../assets/AboutUs/img2.png';

const AboutUs = () => {
    return (
        <div id='aboutus' className='AboutUs__container'>
            <div className='AboutUs__leftContainer'>
                <div className='AboutUs__aboutusContainer'>
                    <div className='AboutUs__line'></div>
                    <div className='AboutUs__aboutus'>ABOUT US</div>
                </div>
                <div className='AboutUs__heading'>Blissful Minds Society</div>
                <div className='AboutUs__desc'>Popularly abbreviated as BMS and founded in 2022, is the first student-led Mental Health society at Bharati Vidyapeeth’s College of Engineering and IP University. The main purpose of BMS is to advocate the cause of spreading awareness about mental health issues and encourage people to look beyond the stigma associated with this sensitive subject.</div>
                <img alt='aboutus1' height='250.5px' width='417px' src={image1}/>
            </div>
            <div className='AboutUs__rightContainer'>
                <div>
                    <div className='AboutUs__imgbackground'></div>
                    <img alt='aboutus2' height='333px' width='490.5px' src={image2}/>
                </div>
                <div className='AboutUs__orientation'>The vision of our society is to create a safe space for all, such that under no circumstance, a student feels hesitant to talk about his/her mental health issues. We aim to destigmatize mental illness by conducting interactive and fun sessions, wherein the students can feel heard and can be given useful advice. Through BMS we also intend to give the message that you are not the only one facing issues like peer pressure or social anxiety, and how these are actually mass problems that are often overlooked due to their intangible nature. As we begin our journey to destigmatize mental health, it'll be great to have your support on the way.</div>
            </div>
        </div>
    );
}

export default AboutUs;