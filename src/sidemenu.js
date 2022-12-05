function Sidemenu() {

    return (
        <div className="side-menu-container">
            <SideBarMenu logo_name="fas fa-fw fa-tachometer-alt" option_name="Dashboard" />

            <div className="side-bar-heading">interface</div>
            <SideBarMenu logo_name="fas fa-fw fa-cog" option_name="Components" />
            <SideBarMenu logo_name=" fas fa-fw fa-wrench" option_name="Utilities" />


            <div className="side-bar-heading">Addons</div>
            <SideBarMenu logo_name="fas fa-fw fa-folder" option_name="Pages" />
            <SideBarMenu logo_name=" fas fa-fw fa-chart-area" option_name="Charts" />
            <SideBarMenu logo_name=" fas fa-fw fa-table" option_name="Tables" />


        </div>);
}


function SideBarMenu({ logo_name, option_name }) {

    return (<div className="nav-side-item">
        <a href="#" className="nav-link">
            <i className={logo_name}></i>
            <span>{option_name}</span>
        </a>
        <div className="hr-divider"></div>
    </div >);

}
export { Sidemenu }