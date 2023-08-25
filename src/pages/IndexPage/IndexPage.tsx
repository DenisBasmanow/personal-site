import type { Component } from 'solid-js';

import styles from './IndexPage.module.css';
import {IndexProps} from '../../types/props';
import IndexHeader from './IndexHeader/IndexHeader';
import MyProjects from './MyProjects/MyProjects';
import Section from '../../components/Section/Section';
import ToolsIUse from './ToolsIUse/ToolsIUse';
import MySocials from './MySocials/MySocials';


const IndexPage: Component<IndexProps> = (props) => {
    return (
        <div class={styles.container}>
            <IndexHeader emojis={props.emojis} />

            <Section
                section_name='My projects'
                section_body={MyProjects}
            />

            <Section
                section_name='The tools I use'
                section_body={ToolsIUse}
            />

            <Section 
                section_name='Links'
                section_body={MySocials}
            />
        </div>
    );
};

export default IndexPage;
