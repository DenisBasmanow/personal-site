import type { Component } from 'solid-js';

import styles from './SocialItem.module.css';
import {SocialItemProps} from '../../../../types/props';


const SocialItem: Component<SocialItemProps> = (props) => {
    return (
        <a class={styles.social} href={props.link} target='_blank'>
            <img src={props.icon} />
        </a>
    );
};

export default SocialItem;
