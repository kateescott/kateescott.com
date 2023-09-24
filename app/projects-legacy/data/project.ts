import warmTunas from '@/app/_projects/legacy/100_warm_tunas';
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
