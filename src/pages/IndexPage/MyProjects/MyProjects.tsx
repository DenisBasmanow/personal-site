import type { Component } from 'solid-js';

import styles from './MyProjects.module.css';
import ProjectItem from './ProjectItem/ProjectItem';
import { my_projects } from '../../../config';


const MyProjects: Component = () => {
    return (
        <div class={styles.projects}>
            {my_projects.map((project) => (
                <ProjectItem 
                    name={project.name}
                    description={project.description}
                    icon={project.icon}
                    link={project.link}
                />
            ))}
        </div>
    );
};

export default MyProjects;
