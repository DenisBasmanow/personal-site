import type { Component } from 'solid-js';

import styles from './ToolItem.module.css';
import {ToolItemProps} from '../../../../types/props';


const Tool: Component<ToolItemProps> = (props) => {
    return (
        <a class={styles.tool} href={props.link} target='_blank'>
            <div class={styles.tool_name}>{props.name}</div>
            <div class={styles.tool_desc}>{props.description}</div>
        </a>
    );
};

export default Tool;
