import type { Component } from 'solid-js';

import styles from './MySocials.module.css';
import SocialItem from './SocialItem/SocialItem';
import {my_socials} from '../../../config';


const MySocials: Component = () => {
    return (
        <div class={styles.socials}>
            {my_socials.map((social) => (
                <SocialItem 
                    icon={social.icon}
                    link={social.link}
                />
            ))}
        </div>
    );
};

export default MySocials;
