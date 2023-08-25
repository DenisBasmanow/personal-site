import type { Component } from 'solid-js';

import styles from './Section.module.css';
import {SectionProps} from '../../types/props';

const Section: Component<SectionProps> = (props) => {
    return (
        <div class={styles.container}>
            <h3 class={styles.title}>{props.section_name}</h3>

            {props.section_body({})}
        </div>
    );
};

export default Section;
