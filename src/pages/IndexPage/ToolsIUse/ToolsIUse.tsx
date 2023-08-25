import type { Component } from 'solid-js';

import styles from './ToolsIUse.module.css';
import ToolItem from './ToolItem/ToolItem';
import {tools_i_use} from '../../../config';


const ToolsIUse: Component = () => {
    return (
        <div class={styles.tools}>
            {tools_i_use.map((tool) => (
                <ToolItem 
                    name={tool.name}
                    description={tool.description}
                    link={tool.link}
                />
            ))}
        </div>
    );
};

export default ToolsIUse;
