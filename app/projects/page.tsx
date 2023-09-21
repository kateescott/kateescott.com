import React from "react";
import {ProjectCard, ProjectsGrid} from "@/app/lib/project_grid/project_grid";
import {PROJECTS} from "@/app/projects/projects";


export default function Projects() {
    return (
        <ProjectsGrid>
            {PROJECTS.map((project) => (
                <ProjectCard
                    title={project.name}
                    key={project.slug}
                    url={project.url}
                    thumbnailSrc={project.thumbnailSrc}
                />
            ))}
        </ProjectsGrid>
    )
}
