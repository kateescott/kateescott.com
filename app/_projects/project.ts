import {ontologyMapping} from "@/app/_projects/ontology-mapping";
import {StaticImageData} from "next/image";
import {warmTunas} from "@/app/_projects/legacy/100_warm_tunas";
import {coffeeBreak} from "@/app/_projects/legacy/coffee-break";
import {elderAbuseNetwork} from "@/app/_projects/legacy/elder-abuse-network";
import {CSSProperties} from "react";
import {labourMarketInsights} from "@/app/_projects/labour-market-insights";
import {wellvana} from "@/app/_projects/wellvana";

export type Project = {
    Page: React.ComponentType<{}>;
    title: string,
    thumbnail: string | StaticImageData,
    cardStyle?: CSSProperties,
}


const PROJECTS: { [key: string]: Project } = {
    'ontology-mapping': ontologyMapping,
    'labour-market-insights': labourMarketInsights,
    'wellvana': wellvana,
    '100-warm-tunas': warmTunas,
    'coffee-break': coffeeBreak,
    'elder-abuse-network': elderAbuseNetwork,
}

export function getProjectSlugs(): string[] {
    return Object.keys(PROJECTS);
}

export function getProjectBySlug(slug: string): Project {
    return PROJECTS[slug]
}

export function getAllProjects(): (Project & { slug: string })[] {
    return Object.entries(PROJECTS).map(([slug, project]) => ({
        slug,
        ...project,
    }))
}
