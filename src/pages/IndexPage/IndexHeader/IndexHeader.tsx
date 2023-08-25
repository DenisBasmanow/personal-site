import type { Component } from 'solid-js';

import IndexTitle from './IndexTitle/IndexTitle';
import IndexSubtitle from './IndexSubtitle/IndexSubtitle';
import {IndexProps} from '../../../types/props';

const IndexHeader: Component<IndexProps> = (props) => {
    return (
        <>
            <IndexTitle emojis={props.emojis} />
            <IndexSubtitle />
        </>
    );
};

export default IndexHeader;
