// src/components/Portfolio.js
import React from 'react';
import ProjectCard from './projectCard'
import Muslimimg from "../Imgs/Projectimg/muslimImg.png"

const Projects = () => {
    const projects = [
        {
            title: 'Muslim',
            description: 'Quran recitation and reading site',
            image: Muslimimg,
            technologies: ['HTML', 'CSS', 'JavaScript','API'],
            link: 'https://bas276.github.io/Mu-Slim/',
        },
        {
            title: 'Project 2',
            description: 'A brief description of Project 2.',
            image: 'path/to/project2-image.jpg',
            technologies: ['Node.js', 'Express', 'MongoDB'],
            link: '',
        }
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
