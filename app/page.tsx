import Image from 'next/image'
import {Nav} from "@/app/lib/header/nav";
import {PROJECTS} from "@/app/projects/projects";
import {ProjectCard, ProjectsGrid} from "@/app/lib/project_grid/project_grid";
import React from "react";

export default function Home() {
    return (
        <main className="pageContent">
            <Hero>
                <h2>Hi, I’m Kate 👋</h2>
                <p>I’m a Graphic Designer located in Sydney</p>
            </Hero>
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
