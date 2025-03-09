import './NavigationUser.css';
import Logo from "./Logo";
import GroupBtn from "./GroupBtn";
import SectionBtn from "./SectionBtn";
import GroupBtnExtras from "./GroupBtnExtras";
import overViewIcon from "../../../Assets/icons/iconmonstr-dashboard-lined.svg"
import practiceIcon from "../../../Assets/icons/iconmonstr-layer-multiple-alt-lined.svg"
import collabIcon from "../../../Assets/icons/iconmonstr-school-28.svg"
import profileIcon from "../../../Assets/icons/iconmonstr-user-6.svg"
import settingIcon from "../../../Assets/icons/iconmonstr-gear-thin.svg"
import themeIcon from "../../../Assets/icons/iconmonstr-contrast-filled.svg"
import logoutIcon from "../../../Assets/icons/iconmonstr-log-out-18.svg"

function NavigationUser(props) {
    return(
        <div className="navigation-user-base rounderCorn dropShadow">
            <Logo/>
            <GroupBtn>
                <SectionBtn activated={false} title='OVERVIEW' icon={overViewIcon}/>
                <SectionBtn activated={false} title='PRACTICE' icon={practiceIcon}/>
                <SectionBtn activated={true} title='COLLAB' icon={collabIcon}/>
                <SectionBtn activated={false} title='PROFIL' icon={profileIcon}/>
                <SectionBtn activated={false} title='SETTING' icon={settingIcon}/>
            </GroupBtn>
            <GroupBtnExtras>
                <SectionBtn activated={false} title='DARK / LIGHT' icon={themeIcon}/>
                <SectionBtn activated={false} title='LOGOUT' icon={logoutIcon}/>
            </GroupBtnExtras>

        </div>
    );
}

export default NavigationUser;