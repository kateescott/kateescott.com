import warmTunas from './100_warm_tunas/project';
import {StaticImageData} from "next/image";
import {CSSProperties} from "react";

export type Project = {
    slug: string,
    title: string,
    meta: {
        description: string,
        categories: string[],
        client: React.ReactNode,
        date: string,
    },
    cover: StaticImageData,
    cardStyle: CSSProperties,
    gallery: {
        media: StaticImageData[],
    }
}

export const PROJECTS = [
    warmTunas,
]
