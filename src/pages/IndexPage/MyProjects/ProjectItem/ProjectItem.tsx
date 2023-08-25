import type { Component } from 'solid-js';

import styles from './ProjectItem.module.css';
import {ProjectItemProps} from '../../../../types/props';


const ProjectItem: Component<ProjectItemProps> = (props) => {
    return (
        <a class={styles.project} href={props.link} target='_blank'>
            <div class={styles.project__left}>
                <img src={props.icon} alt={props.name} class={styles.project_icon}/>
            </div>
            <div class={styles.project__right}>
                <div class={styles.project_name}>{props.name}</div>
                <div class={styles.project_desc}>{props.description}</div>
            </div>
        </a>
    );
};

export default ProjectItem;
