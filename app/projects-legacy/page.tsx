import Image from "next/image";
import {getAllProjects} from "@/app/_projects/project";

export default function Projects() {

    return <div style={{marginTop: '128px'}}>
        <div className="tiles">
            {getAllProjects().map(project => (
                <a key={project.slug}
                   className="tiles__tile"
                   style={project.cardStyle}
                   href={"/projects/" + project.slug}>
                    <div
                        className="tiles__tileContent tiles__tileContent--edgeToEdge">
                        <Image className="tiles__tileImage" src={project.thumbnail} alt=""/>
                    </div>
                    <div className="tiles__tileInfo">
                        <span>{project.title}</span>
                    </div>
                </a>
            ))}
        </div>

    </div>
}


