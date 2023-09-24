import {ontologyMapping} from "@/app/_projects/ontology-mapping";
import {StaticImageData} from "next/image";
import {warmTunas} from "@/app/_projects/legacy/100_warm_tunas";
import {coffeeBreak} from "@/app/_projects/legacy/coffee-break";
import {elderAbuseNetwork} from "@/app/_projects/legacy/elder-abuse-network";
import {CSSProperties} from "react";
import {labourMarketInsights} from "@/app/_projects/labour-market-insights";
import {talentLens} from "@/app/_projects/talent-lens";
import {dataVisualisationLibrary} from "@/app/_projects/data-visualisation-library";
import {learnMate} from "@/app/_projects/learn-mate";
import {assaya} from "@/app/_projects/assaya";

export type Project = {
    Page: React.ComponentType<{}>;
    title: string,
    thumbnail: string | StaticImageData,
    cardStyle?: CSSProperties,
}


const PROJECTS: { [key: string]: Project } = {
    'ontology-mapping': ontologyMapping,
    'labour-market-insights': labourMarketInsights,
    'assaya': assaya,
    'talent-lens': talentLens,
    'learn-mate': learnMate,
    'data-visualization-library': dataVisualisationLibrary,

    // Legacy
    // '100-warm-tunas': warmTunas,
    // 'coffee-break': coffeeBreak,
    // 'elder-abuse-network': elderAbuseNetwork,
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
