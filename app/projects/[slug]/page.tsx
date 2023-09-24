import {getProjectBySlug, getProjectSlugs} from "@/app/_projects/project";

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
