import './GroupBtn.css';

function GroupBtn(props) {
    return(
        <div className="Group-btn-container">
            {props.children}
        </div>
    );
}

export default GroupBtn;