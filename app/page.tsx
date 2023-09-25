import {ProjectCard, ProjectsGrid} from "@/app/lib/project_grid/project_grid";
import React from "react";
import {getAllProjects} from "@/app/_projects/project";

export default function Home() {
    return (
        <main>
            <div className="pageContent">
                <Hero>
                    <h2>Hi, I’m Kate 👋</h2>
                    <p>I’m a UX/UI Designer based in Sydney</p>
                </Hero>
            </div>
            <ProjectsGrid>
                {getAllProjects().map((project) => (
                    <ProjectCard
                        title={project.title}
                        subtitle={project.subtitle}
                        key={project.slug}
                        url={'/projects/' + project.slug}
                        thumbnail={project.thumbnail}
                        cardStyle={project.cardStyle}
                    />
                ))}
            </ProjectsGrid>
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
