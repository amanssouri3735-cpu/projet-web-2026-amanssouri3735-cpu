function ProjectCard({ title, description, technologies, link, index }) {
    return (
        <div className="project-card" data-aos="flip-up" data-aos-delay={index * 100}>
            <div className="project-icon">
                <i className="fas fa-code"></i>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-tech">
                <strong>Technologies :</strong> {technologies}
            </div>
            <a href={link} target="_blank" className="project-link">
                Voir le projet <i className="fas fa-arrow-right"></i>
            </a>
        </div>
    );
}