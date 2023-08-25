import antievil_icon from './assets/antievil.png';
import weksoftware_icon from './assets/weksoftware.png';
import tools_icon from './assets/tools.png';
import discord_svg from './assets/discord.svg';
import telegram_svg from './assets/telegram.svg';
import github_svg from './assets/github.svg';
import boosty_svg from './assets/boosty.svg';
import {ProjectItemProps, SocialItemProps, ToolItemProps} from './types/props';


export const title_emojis = Array(
    "👋",
    "😀",
    "🥰",
    "🫠",
    "🥴",
    "✌️",
    "🤘",
    "🫴",
    "🤝",
    "🥬",
    "🌳",
    "🦆",
    "🐦",
    "🐤"
);

export const my_projects: ProjectItemProps[] = Array(
    {
        name: "AntiEvil",
        description: "Discord bot for protect servers, with a blacklist of users.",
        icon: antievil_icon,
        link: "https://weksoftware.ru/antievil.html"
    },
    {
        name: "weksoftware.ru",
        description: "Website for the development team.",
        icon: weksoftware_icon,
        link: "https://weksoftware.ru"
    },
    {
        name: "cloud.weksoftware",
        description: "Social network. It's currently under development.",
        icon: weksoftware_icon,
        link: ""
    },
    {
        name: "Logs viewer",
        description: "Tool to view AntEvil deleted messages.",
        icon: tools_icon,
        link: "https://tools.weksoftware.ru/logs_viewer/?link=1135860926747250749/1135897124488347739/JSONDeletedMessages&txt_file=1135860926747250749/1135897124693885009/TXTDeletedMessages"
    },
); 

export const tools_i_use: ToolItemProps[] = Array(
    {
        name: "[🐍] FastAPI",
        description: "is a modern, fast, web framework for building APIs with Python 3.7+ based on standard Python type hints.",
        link: "https://fastapi.tiangolo.com/"
    },
    {
        name: "[🐍] Flask",
        description: "is a micro web framework written in Python.",
        link: "https://flask.palletsprojects.com/"
    },
    {
        name: "[🐍] Disnake",
        description: "is a modern, easy to use, feature-rich, and async-ready API wrapper for Discord.",
        link: "https://disnake.dev/"
    },
    {
        name: "[js] SolidJS",
        description: "is a declarative JavaScript library for creating user interfaces.",
        link: "https://www.solidjs.com/"
    },
    {
        name: "[🦀] Serenity.rs",
        description: "is a Rust library for the Discord API.",
        link: "https://github.com/serenity-rs/serenity"
    },
);

export const my_socials: SocialItemProps[] = Array(
    {
        link: "https://t.me/denis_wsdev",
        icon: telegram_svg
    },
    {
        link: "https://discord.com/users/405714652824338434",
        icon: discord_svg
    },
    {
        link: "https://github.com/DenisBasmanow",
        icon: github_svg
    },
    {
        link: "https://boosty.to/antievil",
        icon: boosty_svg
    }
);
