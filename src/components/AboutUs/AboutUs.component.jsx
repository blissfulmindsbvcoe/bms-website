import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="AboutUs__container">
            <div className="AboutUS__textContainer">
                <div className="AboutUs__leftText">
                    <h1 className='AboutUs__h1'>About Us</h1>
                    <a className='AboutUs__a' href="/about">View More</a>
                </div>
                <div className="AboutUs__rightText">
                    <h1 className='AboutUs__h1'>Blogs</h1>
                    <a className='AboutUs__a' href="#">View More</a>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;