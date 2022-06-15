import './Team.css';
import { TeamData } from '../../data/team.data';
const Team = () => {
    return (
        <div id='team' className='Team__container'>
            <div className='Team__ourteamContainer'>
                <div className='Team__line'></div>
                <div className='Team__ourteam'>OUR TEAM</div>
            </div>
            <div className='Team__facebehind'>FACE BEHIND THE SOCIETY</div>
            <div className='Team__teamContainer'>
                {TeamData.map((member, index) => (<div className='Team__memberContainer' key={index}>
                        <img className='Team__memberImage' alt="Team" src={member.imageSrc} />
                        <div style={{width: '100%'}}>
                            <div className='Team__memberCount'>0{index+1}</div>
                            <div className='Team__memberName'>{member.name}</div>
                            <div className='Team__memberPosition'>{member.position}</div>
                        </div>
                    </div>)
                )}
            </div>
        </div>
    );
}

export default Team;