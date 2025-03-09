import './Dashboard.css'

function Dashboard(props){
    return (
        <div className="grid-container-dashboard">
            {props.children}
        </div>
    );
}

export default Dashboard;