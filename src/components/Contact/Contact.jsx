import './Contact.css';
import image1 from '../../assets/Contact/img1.PNG';

const Contact = () => {
    return (
        <div id='contact' className='Contact__container'>
            <div className='Contact__leftContainer'>
                <div className='Contact__contactusContainer'>
                    <div className='Contact__line'></div>
                    <div className='Contact__contactus'>CONTACT US</div>
                </div>
                <div className='Contact__imageContainer'>
                    <img alt='contactus1' width='402.9px' height='459px' src={image1}/>
                </div>
            </div>
            <div className='Contact__rightContainer'>
                <div>
                    <div className='Contact__heading'>Have something to say</div>
                    <div className='Contact__heading'>Let's connect!</div>
                </div>
                <div className='Contact__contact'>
                    <div className='Contact__subheading'>EMAIL</div>
                    <div>
                        <div className='Contact__value'>blissfulminds.bvcoe@gmail.com</div>
                    </div>
                    <div className='Contact__subheading'>CONTACT INFO</div>
                    <div>
                        <div className='Contact__value'>Shivam Kapur: +91-9999874619</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;