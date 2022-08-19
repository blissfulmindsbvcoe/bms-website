import './AboutUs.css';

const AboutUs = () => {
    return (
        <div id="about" className="AboutUs__container">
            <div className="AboutUS__textContainer">
                <div className="AboutUs__leftText" onClick={()=>{window.location = "/about"}}>
                    <h1 className='AboutUs__h1'>About Us</h1>
                    <a className='AboutUs__a' href="/about">View More</a>
                </div>
                <div className="AboutUs__rightText" onClick={()=>{window.location = "https://blogs.blissfulmindsbvcoe.com"}}>
                    <h1 className='AboutUs__h1'>Blogs</h1>
                    <a className='AboutUs__a' href="https://blogs.blissfulmindsbvcoe.com">View More</a>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;