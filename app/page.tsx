import {ProjectCard, ProjectsGrid, ProjectsGridSection, ProjectsGridTitle} from "@/app/lib/project_grid/project_grid";
import React from "react";
import {getAllProjects} from "@/app/_projects/project";

export default function Home() {
    return (
        <main>
            <div className="pageContent">
                <Hero>
                    <h2>Hi, I’m Kate 👋</h2>
                    <p>I’m a UX/UI and Graphic Designer based in Sydney</p>
                </Hero>
            </div>
            <ProjectsGridSection>
                <ProjectsGridTitle>Product Design</ProjectsGridTitle>
                <ProjectsGrid>
                    {getAllProjects()
                        .filter(project => project.category === 'product-design')
                        .map((project) => (
                            <ProjectCard
                                title={project.title}
                                subtitle={project.subtitle}
                                key={project.slug}
                                url={'/projects/' + project.slug}
                                thumbnail={project.thumbnail}
                                backgroundColor={project.cardBackground}
                            />
                        ))}
                </ProjectsGrid>
            </ProjectsGridSection>
            <ProjectsGridSection>
                <ProjectsGridTitle>Graphic Design</ProjectsGridTitle>
                <ProjectsGrid>
                    {getAllProjects()
                        .filter(project => project.category === 'graphic-design')
                        .map((project) => (
                            <ProjectCard
                                title={project.title}
                                subtitle={project.subtitle}
                                key={project.slug}
                                url={'/projects/' + project.slug}
                                thumbnail={project.thumbnail}
                                backgroundColor={project.cardBackground}
                            />
                        ))}
                </ProjectsGrid>
            </ProjectsGridSection>
        </main>
    )
}


function Hero({children}: { children: React.ReactNode }) {
    return (
        <div className="pageContent__hero">
            {children}
        </div>
    );
}
