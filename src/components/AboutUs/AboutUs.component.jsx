import './AboutUs.css';
import image1 from '../../assets/AboutUs/img1.png';
import image2 from '../../assets/AboutUs/img2.png';

const AboutUs = () => {
    return (
        <div className='AboutUs__container'>
            <div className='AboutUs__leftContainer'>
                <div className='AboutUs__aboutusContainer'>
                    <div className='AboutUs__line'></div>
                    <div className='AboutUs__aboutus'>ABOUT US</div>
                </div>
                <div className='AboutUs__heading'>About us heading write up 2 lines.</div>
                <div className='AboutUs__desc'>If you do find this paragraph tool useful, please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates.</div>
                <img alt='aboutus1' height='250.5px' width='417px' src={image1}/>
            </div>
            <div className='AboutUs__rightContainer'>
                <div>
                    <div className='AboutUs__imgbackground'></div>
                    <img alt='aboutus2' height='333px' width='490.5px' src={image2}/>
                </div>
                <div className='AboutUs__orientation'>
                ABOUT OUR ORIENTATION<br/>It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that.
                </div>
            </div>
        </div>
    );
}

export default AboutUs;