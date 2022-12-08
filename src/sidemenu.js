import { Link } from 'react-router-dom';
import { useState } from 'react';
function Sidemenu({ isMobile }) {

    return (
        <div className="side-menu-container">
            <SideBarMenu subMenu={{ isSubMenu: false }} path="/" isMobile={isMobile} logo_name="fas fa-fw fa-tachometer-alt" option_name="Dashboard" />

            <div className="side-bar-heading">interface</div>
            <SideBarMenu subMenu={{ isSubMenu: true, menus: { head: "Custom Components", list: ["Buttons", "Cards"] } }}
                path="/Buttons" isMobile={isMobile} logo_name="fas fa-fw fa-cog" option_name="Components" />
            <SideBarMenu subMenu={{ isSubMenu: true, menus: { head: "hhhhhh", list: ["option1", "option2"] } }}
                path="/Utilities" isMobile={isMobile} logo_name=" fas fa-fw fa-wrench" option_name="Utilities" />

            <div className="side-bar-heading">Addons</div>
            <SideBarMenu subMenu={{ isSubMenu: true, menus: { head: "hhhhhh", list: ["option1", "option2"] } }}
                path="/Pages" isMobile={isMobile} logo_name="fas fa-fw fa-folder" option_name="Pages" />
            <SideBarMenu subMenu={{ isSubMenu: false }} path="/Charts" isMobile={isMobile} logo_name=" fas fa-fw fa-chart-area" option_name="Charts" />
            <SideBarMenu subMenu={{ isSubMenu: false }} isMobile={isMobile} logo_name=" fas fa-fw fa-table" option_name="Tables" />


        </div>);
}


function SideBarMenu({ isMobile, logo_name, option_name, path, subMenu }) {

    const [showSubMenu, setShowSubMenu] = useState(false);

    const mobileStyle = {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        // flexWrap: "wrap",
        alignItems: "center",
        textDecoration: "none",
        color: "rgba(255, 255, 255, .6)",
        padding: "1rem"
    };

    const pcStyle = {
        flexDirection: "row",
        alignItems: "center",
        textDecoration: "none",
        gap: "0.5rem"
    };
    return (<div style={{ position: "relative" }} onClick={() => setShowSubMenu(!showSubMenu)} className="nav-side-item">
        <Link to={path} style={isMobile ? mobileStyle : pcStyle}>
            <div style={isMobile ? { flexDirection: "column" } : { flexDirection: "row" }} className="nav-link">
                <i className={logo_name}></i>
                <span>{option_name}</span>
            </div>

            {(subMenu.isSubMenu && !isMobile) ?
                (<div style={showSubMenu ? { display: "block" } : { display: "none" }} className="sub-menu-container">
                    <h5 className='sub-menu-head'>{subMenu.menus.head}</h5>
                    {subMenu.menus.list.map((option) => <p className='sub-menu-option' >{option}</p>)}
                </div>) : null}
        </Link>
        <div className="hr-divider"></div>
    </div >);

}
export { Sidemenu }