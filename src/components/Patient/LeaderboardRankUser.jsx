import './LeaderboardRankUser.css';

function LeaderboardRankUser(props) {
    return (
        <div className="leader-board-user">
            <div className="leader-board-user-img">
                <img src={props.img} alt="Profile Picture" className="profile-img-rank"/>
            </div>
            <div className="leader-board-user-data">
                <p className="leader-board-user-name">{props.name}</p>
                <p className="leader-board-user-extra">{props.extras}</p>
            </div>
            <p className="leader-board-user-rank">{props.rank}</p>
        </div>
    );
}

export default LeaderboardRankUser;