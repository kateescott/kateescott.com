import {ontologyMapping} from "@/app/_projects/ontology-mapping";
import {StaticImageData} from "next/image";
import {labourMarketInsights} from "@/app/_projects/labour-market-insights";
import {talentLens} from "@/app/_projects/talent-lens";
import {dataVisualisationLibrary} from "@/app/_projects/data-visualisation-library";
import {learnMate} from "@/app/_projects/learn-mate";
import {assaya} from "@/app/_projects/assaya";
import {hireHiddenGems} from "@/app/_projects/hire-hidden-gems";

export type Project = {
    Page: React.ComponentType<{}>;
    title: string,
    subtitle: string,
    thumbnail: string | StaticImageData,
    cardBackground: `#${string}`,
}


const PROJECTS: { [key: string]: Project } = {
    'ontology-mapping': ontologyMapping,
    'labour-market-insights': labourMarketInsights,
    'assaya': assaya,
    'talent-lens': talentLens,
    'learn-mate': learnMate,
    'data-visualization-library': dataVisualisationLibrary,
    'hire-hidden-gems': hireHiddenGems,
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
