// src/components/Portfolio.js
import React from 'react';
import ProjectCard from './projectCard'
import Muslimimg from "../Imgs/Projectimg/muslimImg.png"
import Banboo from "../Imgs/Projectimg/banboo.png"
import StationService from "../Imgs/Projectimg/station.png"
import Portfolio from "../Imgs/Projectimg/portfolio.png"

const Projects = () => {
    const projects = [
        {
            title: 'Banboo Store',
            image: Banboo,
            technologies: ['Express.Js', 'MongoDB', "CSS"],
            link: 'http://localhost:3000/projects',
            githublink: 'https://github.com/BAS276/Onine-Store-Banboo',
        },
        {
            title: 'Gestion Station',
            image: StationService,
            technologies: ['React.Js','Express.Js', 'MongoDB', "CSS"],
            link: 'http://localhost:3000/projects',
            githublink: 'https://github.com/BAS276/app-gestion-stations',
        },
        {
            title: 'Portfolio',
            image: Portfolio,
            technologies: ['React.Js', "CSS"],
            link: 'https://portfolio-six-mauve-21.vercel.app/',
            githublink: 'https://github.com/BAS276/Portfolio',
        },
        {
            title: 'Muslim',
            image: Muslimimg,
            technologies: ['HTML', 'CSS', 'JavaScript','API'],
            link: 'https://bas276.github.io/Mu-Slim/',
            githublink: 'https://github.com/BAS276/Mu-Slim',
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
                    githublink={project.githublink}
                />
            ))}
        </div>
    );
};

export default Projects;
