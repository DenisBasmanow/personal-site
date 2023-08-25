import type { Component } from 'solid-js';

import styles from './IndexTitle.module.css';
import {IndexProps} from '../../../../types/props';

const IndexTitle: Component<IndexProps> = (props) => {
    let emoji = props.emojis[Math.floor(Math.random() * props.emojis.length)];

    return (
        <>
            <h1 class={styles.title}>
                Hi! {emoji}
            </h1>
            <hr />
        </>
    );
};

export default IndexTitle;
