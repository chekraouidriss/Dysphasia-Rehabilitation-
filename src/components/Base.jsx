import './Base.css'

function Base(props){
    return (
        <div className="base">
            {props.children}
        </div>
    );
}
export default Base;