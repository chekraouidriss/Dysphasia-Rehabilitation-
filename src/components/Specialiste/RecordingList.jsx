import './RecordingList.css';
import RecordingItem from "./RecordingItem";

const RecordingList = (props) => {
    return (
        <div className="recording-list-base-pro rounderCorn dropShadow">
            <p className="recording-list-title-pro">Recording List</p>
            {props.children}
        </div>
    );
}

export default RecordingList;