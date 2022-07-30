import './Contact.css';
import line from '../../assets/Contact/line.png';
import map from '../../assets/Contact/map.png';

const Contact = () => {
    return (
        <div className="Contact__container" id="contact">
            <div className="Contact__leftContainer">
                <h1 className='Contact__leftContainerh1'>Get in touch!</h1>
                <img className='Contact__leftContainerimg' src={line} alt="line" />
                <form className="Contact__leftContainerForm" action="index.html" method="post">
                    <input className='Contact__leftContainerInput' type="text" name="name" placeholder="Enter your name" /> <br />
                    <input className='Contact__leftContainerInput' type="email" name="email" placeholder="Enter valid email address"/> <br />
                    <textarea className='Contact__leftContainerInput' name="message" rows="5" cols="70" placeholder="Enter your message"></textarea>
                    <input className='Contact__leftContainerInput' type="submit" name="submit" value="Submit "/>
                </form>
            </div>
            <div className="Contact__rightContainer">
                <div className="Contact__topContainer">
                    <div className="Contact__topContainerText">
                        <h2 className='Contact__topContainerh2'>ADDRESS</h2>
                        <p className='Contact__topContainerp'><em>A-4 block, Baba Ramdev Marg, <br/>Shiva Enclave, Paschim Vihar, <br/>New Delhi, Delhi-110063</em></p>
                        <h2 className='Contact__topContainerh2'>CALL US</h2>
                        <p className='Contact__topContainerp'><em>91-9999874619 <br/>91-9958190385</em></p>
                    </div>
                    <img className="Contact__topContainerimg" src={map} alt="map" />
                </div>
            </div>
        </div>
    );
}

export default Contact;