const ProjectCard = ({backgroundImage, title, description}) => {
    return (
        <div className="projectCard"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

            <div className="projectCardContainer" >
                <span className="projectTitle">{title}</span>
                <p className="projectDescription">{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;