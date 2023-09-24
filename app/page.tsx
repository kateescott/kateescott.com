import {ProjectCard, ProjectsGrid} from "@/app/lib/project_grid/project_grid";
import React from "react";
import {getAllProjects} from "@/app/_projects/project";

export default function Home() {
    return (
        <main className="pageContent">
            <Hero>
                <h2>Hi, I’m Kate 👋</h2>
                <p>I’m a Graphic Designer located in Sydney</p>
            </Hero>
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
            <div className="pageContent__footer">
                <a href="/projects/">See more &rarr;</a>
            </div>
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
