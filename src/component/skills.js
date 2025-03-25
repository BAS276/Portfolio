// src/Skills.js
import React from 'react';


import HTML from '../Imgs/Logoimgs/html.png';
import CSS from '../Imgs/Logoimgs/css.png'; 
import JavaScript from '../Imgs/Logoimgs/javascript.png'; 

import Bootstrap from '../Imgs/Logoimgs/Bootstrap.png';
import Reactjs from '../Imgs/Logoimgs/Reactjs.png'; 
import Laravel from '../Imgs/Logoimgs/laravel-logo.webp'; 
import Express from '../Imgs/Logoimgs/ex.png'; 
import mongodb from '../Imgs/Logoimgs/mongodb.png'; 

import Figma from '../Imgs/Logoimgs/Figma.png';
import Photoshop from '../Imgs/Logoimgs/Photoshop.png'; 
import Adobe from '../Imgs/Logoimgs/Adobe.png'; 

import SQL from '../Imgs/Logoimgs/SQL.png';
import Databases from '../Imgs/Logoimgs/Databases.png'; 
import PHP from '../Imgs/Logoimgs/php.png'; 
import node from '../Imgs/Logoimgs/node.png'; 

import Git from '../Imgs/Logoimgs/Git.png';
import GitHub from '../Imgs/Logoimgs/GitHub.png'; 
import docker from '../Imgs/Logoimgs/docker.png'; 
import postman from '../Imgs/Logoimgs/postman.svg'; 

import './skills.css';

const Skills = () => {
    const skillsData = {
        Basics: [
            { src: HTML, name: "HTML" },
            { src: CSS, name: "CSS" },
            { src: JavaScript, name: "JavaScript" },
        ],
        Framework: [
            { src: Bootstrap, name: "Bootstrap" },
            { src: Reactjs, name: "React.js" },
            { src: Express, name: "Express.js" },
            { src: Laravel, name: "Laravel" },
        ],
        Design: [
            { src: Figma, name: "Figma" },
            { src: Photoshop, name: "Photoshop" },
            { src: Adobe, name: "Adobe XD" },
            
        ],
        Backend: [
            { src: SQL, name: "SQL" },
            { src: Databases, name: "MySQL" },
            { src: mongodb, name: "Mongodb" },
            { src: node, name: " Node.js" },
            { src: PHP, name: "PHP" },
        ],
        Extra: [
            { src: Git, name: "Git" },
            { src: GitHub, name: "GitHub" },
            { src: docker, name: "Docker" },
            { src: postman, name: "Postman" },
        ],
    };

    return (
        <div className="skills-container">
            <h2 className="skills-title">Web Developer Skills</h2>
            <div className="skills-sections">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div className="skills-category" key={category}>
                        <h3>{category}</h3>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>
                                    <img src={skill.src} alt={skill.name} className="skill-icon" />
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
