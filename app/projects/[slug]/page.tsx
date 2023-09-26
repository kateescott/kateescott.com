import {getProjectBySlug, getProjectSlugs} from "@/app/_projects/project";
import {Metadata, ResolvingMetadata} from "next";

export default function ProjectPage({params: {slug}}: { params: { slug: string } }) {
    const project = getProjectBySlug(slug);

    return (
        <div>
            <project.Page/>
        </div>
    )
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    return getProjectSlugs().map(slug => ({
        slug,
    }));
}


export async function generateMetadata(
    {params: {slug}}: { params: { slug: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const project = getProjectBySlug(slug);
    return {
        title: project.title + ' | Kate Scott',
        description: project.subtitle,
        openGraph: {
            images: [
                typeof project.thumbnail === 'string'
                    ? project.thumbnail
                    : project.thumbnail.src
            ],
        }

    }
}
