function ColorCards() {
    const colorList = [{ name: "Primary", value: "#4e73df" }, { name: "Success", value: "#1cc88a" },
    { name: "Info", value: "#36b9cc" }, { name: "Warning", value: "#f6c23e" },
    { name: "Danger", value: "#e74a3b" }, { name: "Secondary", value: "#858796" },
    { name: "Light", value: "#f8f9fc" }, { name: "Dark", value: "#5a5c69" }];
    return (<div className="color-cards-container">
        {colorList.map((color) => <ColorCard name={color.name} value={color.value} />)}
    </div>);
}


function ColorCard({ name, value }) {

    return (<div style={{ backgroundColor: value, padding: "1.3rem", borderRadius: "5px" }} className="color-card-wrapper shadow">
        <p style={{ color: name === "Light" ? "#000" : "#fff", marginBottom: "4px" }}>{name}</p>
        <p style={{ color: name === "Light" ? "rgba(0,0,0,.5)" : "rgba(255,255,255,.5)" }}>{value}</p>
    </div >);
}


export { ColorCards }