import {PROJECTS} from "@/app/projects-legacy/[slug]/page";
import Image from "next/image";

export default function Projects() {
    const projects = PROJECTS;

    return <div>
        <div className="tiles">
            {projects.map(project => (
                <a key={project.slug}
                   className="tiles__tile"
                   style={project.gallery.style}
                   href={project.slug}>
                    <div
                        className="tiles__tileContent tiles__tileContent--edgeToEdge">
                        <Image className="tiles__tileImage" src={project.gallery.media[0]} alt=""/>
                    </div>
                    <div className="tiles__tileInfo">
                        <span>{project.title}</span>
                    </div>
                </a>
            ))}
        </div>

    </div>
}


