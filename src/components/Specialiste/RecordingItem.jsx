import './RecordingItem.css'
import img from "../../../Assets/img/2148729672.jpg";

const RecordingItem = (props) => {
    return (
        props.isSelected ? (
            <div className="recording-item-details-container recording-item-details-container-selected">
                <div className="recording-item-img-container-pro">
                    <img src={img} className="recording-item-img-pro" alt=""/>
                </div>
                <div className="recording-student-data-pro">
                    <p className="recording-student-data-name-pro recording-current-text-selected">{props.student}</p>
                    <p className="recording-student-data-extras-pro recording-current-text-selected">Extras Lorem</p>
                </div>
                <div className="recording-current-level-pro">
                    <p className="recording-current-level-text-pro recording-current-text-selected-pro">{props.level}</p>
                </div>
                <div className="recording-current-exercise-pro">
                    <p className="recording-current-exercise-text-pro recording-current-text-selected-pro">{props.exercise}</p>
                </div>
                <div className="recording-current-duration-pro">
                    <p className="recording-current-duration-text-pro recording-current-text-selected-pro">{props.duration}</p>
                </div>
                <div className="recording-current-date-pro">
                    <p className="recording-current-date-text-pro recording-current-text-selected-pro">{props.date}</p>
                </div>
            </div>
        ) : (
            <div className="recording-item-details-container">
                <div className="recording-item-img-container-pro">
                    <img src={img} className="recording-item-img-pro" alt=""/>
                </div>
                <div className="recording-student-data-pro">
                    <p className="recording-student-data-name-pro">{props.student}</p>
                    <p className="recording-student-data-extras-pro">Extras Lorem</p>
                </div>
                <div className="recording-current-level-pro">
                    <p className="recording-current-level-text-pro">{props.level}</p>
                </div>
                <div className="recording-current-exercise-pro">
                    <p className="recording-current-exercise-text-pro">{props.exercise}</p>
                </div>
                <div className="recording-current-duration-pro">
                    <p className="recording-current-duration-text-pro">{props.duration}</p>
                </div>
                <div className="recording-current-date-pro">
                    <p className="recording-current-date-text-pro">{props.date}</p>
                </div>
            </div>
        )
    );
}
export default RecordingItem;