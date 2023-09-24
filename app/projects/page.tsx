import React from "react";
import {ProjectCard, ProjectsGrid} from "@/app/lib/project_grid/project_grid";
import {getAllProjects} from "@/app/_projects/project";


export default function Projects() {
    return (
        <ProjectsGrid>
            {getAllProjects().map((project) => (
                <ProjectCard
                    title={project.title}
                    key={project.slug}
                    url={'/projects/' + project.slug}
                    thumbnail={project.thumbnail}
                    cardStyle={project.cardStyle}
                />
            ))}
        </ProjectsGrid>
    )
}
