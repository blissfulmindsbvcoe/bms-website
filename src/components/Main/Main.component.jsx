import { useEffect, useState } from 'react';

import './Main.css';

const Main = () => {

    const [eventImageNo, setEventImageNo] = useState(0);

    const changeImage = () => {
        setEventImageNo(prev => {
            return prev===imageName.length-1 ? 0: (prev + 1)
        })
    }

    useEffect(()=>{
        setInterval(()=>{
            changeImage()
        }, 5000)
    }, [])

    const imageName = [
        'l1.jpg',
        'l2.jpg',
        'l3.jpg',
        'l4.jpeg',
        'l5.jpeg',
        'l6.jpeg',
        'l7.jpg',
        'l8.jpg',
        'l9.jpg',
        'l10.jpg'
    ]

    return (
        <div className='Main__container'>
            <div className='Main__leftContainer'>
                <p className='Main__leftContainerp'>Blissful Minds Society</p>
                <p className='Main__leftContainerSubp'>Keeping Mental Health in Check</p>
                <div className='Main__line'></div>
                {/* <div className='Main__bottomLeftContainer'>
                    <div className='Main__BLContainer1'>
                        <div className='Main__NumberContainer'>
                            <div className='Main__Number'>02</div>
                            <div className='Main__horizontalLine'></div>
                        </div>
                        <div className='Main__NameEvent'>Mind Your Mind</div>
                        <img src={mind} alt="img" height='60%' width='75%'/>
                    </div>
                    <div className='Main__BLContainer2'>
                        <div className='Main__NumberContainer'>
                            <div className='Main__Number'>03</div>
                            <div className='Main__horizontalLine'></div>
                        </div>
                        <div className='Main__NameEvent'>Webinar</div>
                        <img  src={Webinar} alt="img" height='60%' width='75%'/>
                    </div>
                    <div className='Main__BLContainer3'>
                        <div className='Main__NumberContainer'>
                            <div className='Main__Number'>04</div>
                            <div className='Main__horizontalLine'></div>
                        </div>
                        <div className='Main__NameEvent'>Orientation</div>
                        <img  src={orientation} alt="img" height='60%' width='75%'/>
                    </div>
                </div> */}
            </div>
            <div className='Main__rightContainer'>
                <img className='Main__rightContainerimg' src={require(`../../assets/Main/${imageName[eventImageNo]}`)} alt="img" />
            </div>
        </div>
    );
}

export default Main;