// src/components/ProjectCard.js
import React from 'react';
import './project.css'; // Import CSS file

const ProjectCard = ({ title, description, image, technologies, link }) => {
    return (
        <div className="project-card">
            <img className="project-image" src={image} alt={title} />
            <div className="project-content">
                <div className="project-title">{title}</div>
                <p className="project-description">{description}</p>
            </div>
            <div className="technology-tags">
                {technologies.map((tech) => (
                    <span key={tech} className="technology-tag">
                        {tech}
                    </span>
                ))}
            </div>
            <div className="project-link-container">
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
