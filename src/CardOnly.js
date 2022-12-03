function CardOnly() {
    const data = {
        heading: "Development Approach", content: `SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.

    Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.` };
    const { heading, content } = data;
    return (<>
        <div className="card-head-container">
            <h3 className="card-head">{heading}</h3>
        </div>
        <div className="card-body">
            < p > {content}</p>
        </div>
    </>)
}

export { CardOnly }