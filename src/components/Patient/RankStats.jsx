import './RankStats.css';
import imgLevel from "../../../Assets/icons/level1.svg";

function RankStats(props) {
    return(
        <div className="rank-stats-base rounderCorn dropShadow">
            <div className="rank-stats-content-container">
                <img src={imgLevel} className="rank-stats-image" alt=""/>
                <p className="rank-stats-name">LEVEL 1 RANK</p>
                
            </div>
        </div>
    );
}

export default RankStats;