import './Contact.css';

const Contact = () => {
    return (
        <div className='Contact__container'>
            <div className='Contact__leftContainer'>
                <div className='Contact__aboutusContainer'>
                    <div className='Contact__line'></div>
                    <div className='Contact__aboutus'>ABOUT US</div>
                </div>
                <div className='Contact__heading'>About us heading write up 2 lines.</div>
                <div className='Contact__desc'>If you do find this paragraph tool useful, please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates.</div>
            </div>
            <div className='Contact__rightContainer'>
                <div>
                    <div className='Contact__imgbackground'></div>
                </div>
                <div className='Contact__orientation'>
                ABOUT OUR ORIENTATION<br/>It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that.
                </div>
            </div>
        </div>
    );
}

export default Contact;