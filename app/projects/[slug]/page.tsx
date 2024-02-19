import {getProjectBySlug, getProjectSlugs} from "@/app/_projects/project";
import {Metadata, ResolvingMetadata} from "next";
import fs from "fs";
import path from "path";
import {VFile} from 'vfile';
import {matter} from "vfile-matter";
import {notFound} from "next/navigation";
import {compileMDX} from "next-mdx-remote/rsc";

const Quote = ({children}: {children: React.ReactNode}) => {
    <em>Quo {children} Quo</em>
}

const mdxComponents = {
    'Quote': Quote
}

export default async function ProjectPage({params: {slug}}: { params: { slug: string } }) {
    const postInfo = (await getAllProjects())
        .find(p => p.slug == slug)

    if (!postInfo) {
        return notFound();
    }

    const postFile = fs.readFileSync(postInfo.postPath);
    const {frontmatter, content} = await compileMDX({
        source: postFile,
        options: {parseFrontmatter: true},
        components: mdxComponents
    });

    console.log(frontmatter, content)
    return (
        <div>
            {content}
        </div>
    )

    // const project = getProjectBySlug(slug);
    // return (
    //     <div>
    //         <project.Page/>
    //     </div>
    // )
}


const projectsDir = path.resolve(process.cwd(), 'app/projects/_content');
const slugRe = /(\d{4})-(\d{1,2})-(\d{1,2})-(.*)/


export function getAllProjects() {
    return Promise.all(fs.readdirSync(projectsDir)
        .map((name) => {
            const itemPath = path.join(projectsDir, name)
            if (fs.lstatSync(itemPath).isDirectory()) {
                const projectPath = ['index.md', 'index.mdx']
                    .map(item => path.join(itemPath, item))
                    .find(item => fs.existsSync(item))
                if (projectPath == null) {
                    return;
                }

                return {slug: name, postPath: projectPath}
            }
            return undefined
        })
        .filter(exists)
        .map(async p => {
            const postFile = fs.readFileSync(p.postPath);
            const vfile = new VFile(postFile);
            matter(vfile, {strip: true});
            return {...p, frontmatter: (vfile.data.matter ?? {}) as any}
        }));
}

export function exists<TValue>(value: TValue | null | undefined): value is TValue {
    return value != null;
}


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    console.log(await getAllProjects())

    return getProjectSlugs().map(slug => ({
        slug,
    }));
}


// export async function generateMetadata(
//     {params: {slug}}: { params: { slug: string } },
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//     const project = getProjectBySlug(slug);
//     return {
//         title: project.title + ' | Kate Scott',
//         description: project.subtitle,
//         openGraph: {
//             images: [
//                 typeof project.thumbnail === 'string'
//                     ? project.thumbnail
//                     : project.thumbnail.src
//             ],
//         }
//
//     }
// }
