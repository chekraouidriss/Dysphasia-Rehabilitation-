import './Logo.css';
import logo from '../../../Assets/icons/DL logo.svg';

function Logo(props) {
    return (
        <div className="logo-container">
            <img src={logo} alt="logo"/>
        </div>
    );
}

export default Logo;