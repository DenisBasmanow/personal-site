import {Component, JSXElement} from "solid-js";

export type SectionProps = {
    section_name: string;
    section_body: Component;
}


export type IndexProps = {
    emojis: string[];
}


export type ProjectItemProps = {
    name: string;
    description: string;
    icon: string;
    link: string;
}

export type ToolItemProps = {
    name: string,
    description: string;
    link: string;
} 

export type SocialItemProps = {
    link: string;
    icon: string;
}
