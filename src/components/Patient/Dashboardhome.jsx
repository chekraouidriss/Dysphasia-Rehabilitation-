import './Dshboardhome.css'

function Dashboard(props){
    return (
        <div className="grid-container-dashboardhome">
            {props.children}
        </div>
    );
}

export default Dashboard;