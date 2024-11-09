// src/components/Portfolio.js
import React from 'react';
import ProjectCard from './projectCard'
import Muslimimg from "../Imgs/Projectimg/muslimImg.png"

const Projects = () => {
    const projects = [
        {
            title: 'Muslim',
            description: 'Quran recitation and reading site',
            image: Muslimimg, // Replace with your project image path
            technologies: ['HTML', 'CSS', 'JavaScript','API'],
            link: 'https://github.com/username/project1', // Replace with your project link
        },
        {
            title: 'Project 2',
            description: 'A brief description of Project 2.',
            image: 'path/to/project2-image.jpg', // Replace with your project image path
            technologies: ['Node.js', 'Express', 'MongoDB'],
            link: 'https://github.com/username/project2', // Replace with your project link
        },
        {
            title: 'Project 2',
            description: 'A brief description of Project 2.',
            image: 'path/to/project2-image.jpg', // Replace with your project image path
            technologies: ['Node.js', 'Express', 'MongoDB'],
            link: 'https://github.com/username/project2', // Replace with your project link
        },
    ];

    return (
        <div className="contaner">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    link={project.link}
                />
            ))}
        </div>
    );
};

export default Projects;
