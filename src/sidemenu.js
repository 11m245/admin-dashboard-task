function Sidemenu({ isMobile }) {

    return (
        <div className="side-menu-container">
            <SideBarMenu isMobile={isMobile} logo_name="fas fa-fw fa-tachometer-alt" option_name="Dashboard" />

            <div className="side-bar-heading">interface</div>
            <SideBarMenu isMobile={isMobile} logo_name="fas fa-fw fa-cog" option_name="Components" />
            <SideBarMenu isMobile={isMobile} logo_name=" fas fa-fw fa-wrench" option_name="Utilities" />


            <div className="side-bar-heading">Addons</div>
            <SideBarMenu isMobile={isMobile} logo_name="fas fa-fw fa-folder" option_name="Pages" />
            <SideBarMenu isMobile={isMobile} logo_name=" fas fa-fw fa-chart-area" option_name="Charts" />
            <SideBarMenu isMobile={isMobile} logo_name=" fas fa-fw fa-table" option_name="Tables" />


        </div>);
}


function SideBarMenu({ isMobile, logo_name, option_name }) {


    const mobileStyle = {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
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
    return (<div className="nav-side-item">
        <a href="#" className="nav-link" style={isMobile ? mobileStyle : pcStyle}>
            <i className={logo_name}></i>
            <span>{option_name}</span>
        </a>
        <div className="hr-divider"></div>
    </div >);

}
export { Sidemenu }