function CardwithPic({ data }) {
    const { image, heading, content, linkName, linkUrl } = data;
    return (<>
        <div className="card-head-container">
            <h3 className="card-head">{heading}</h3>
        </div>
        <div className="card-body">
            <img width="80% " src={image} alt={heading} />
            < p > {content}</p>
            <a href={linkUrl} target="_blank" rel="noreferrer">{linkName} </a>
        </div>
    </>)
}

export { CardwithPic }