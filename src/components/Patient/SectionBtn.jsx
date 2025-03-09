import './SectionBtn.css';

function SectionBtn(props) {
    return (
        <>
            {props.activated ? (
                <div className="section-btn-container section-btn-container-selected">
                    <img src={props.icon} className="section-btn-icon-selected"/>
                    <div className="section-btn-text-selected">{props.title}</div>
                </div>
            ) : (
                <div className="section-btn-container section-btn-container-non-selected">
                    <img src={props.icon} className="section-btn-icon-non-selected"/>
                    <div className="section-btn-text-non-selected">{props.title}</div>
                </div>
            )
            }
        </>
    );
}

export default SectionBtn;