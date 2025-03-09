import './DashboardTop.css'
import'../../../src/components/colors.css'
import img from '../../../src/assets/profileim.png'

function DashboardTop() {
    return (
        <div className="dashboard-top-base rounderCorn dropShadow">
            <div className="dashboard-top-container">
                <span className="dashboard text-dark">Dashboard</span>
                <img src={img} alt="Profile Picture" className="profile-img"/>
            </div>
        </div>
    );
}

export default DashboardTop