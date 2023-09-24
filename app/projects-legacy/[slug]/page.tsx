import cover_1 from '@/app/_projects/legacy/100_warm_tunas/cover_1.png'
import cover_2 from '@/app/_projects/legacy/100_warm_tunas/cover_2.png'
import cover_3 from '@/app/_projects/legacy/100_warm_tunas/cover_3.png'
import Image from 'next/image';

export function generateStaticParams() {
    return PROJECTS;
}

// Three versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
// - /product/1
// - /product/2
// - /product/3
export default function Page({params}: { params: { slug: string, Page: React.ReactNode } }) {
    const {slug} = params
    const project = PROJECTS.find(p => p.slug === slug);
    if (project == null) {
        // return <Error statusCode={404}/>
        throw new Error("Not Found");
    }

    return (
        <div className="pageContent pageContent--split">
            <div className="pageContent__left">
                <div className="pageContent__leftSticky">
                    <h2>{project.title}</h2>
                    <div className="pageContent__meta">
                        <div className="pageContent__metaItem pageContent__metaItem--description">
                            <h3>About The Project</h3>
                            <div>{project.meta.description}</div>
                        </div>
                        <div className="pageContent__metaItem">
                            <h3>Date</h3>
                            <p>{project.meta.date}</p>
                        </div>
                        <div className="pageContent__metaItem">
                            <h3>Client</h3>
                            <p>{project.meta.client}</p>
                        </div>
                        <div className="pageContent__metaItem">
                            <h3>Categories</h3>
                            <p>{project.meta.categories.join(', ')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pageContent__right">
                <div className="pageContent__assetList">
                    {project.gallery.media.map(media => (
                        <div className="pageContent__asset" style={project.gallery.style}>
                            <Image className="pageContent__assetImage" src={media} alt=""/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export const PROJECTS = [
    {
        slug: '100-warm-tunas',
        title: '100 Warm Tunas',
        meta: {
            description: '100 Warm Tunas is a yearly prediction of Triple J’s Hottest 100.',
            categories: ['Branding', 'Social'],
            client: <a href="https://100warmtunas.com/">100 Warm Tunas</a>,
            date: '2016-2020',
        },
        featured: false,
        gallery: {
            media: [
                cover_1,
                cover_2,
                cover_3,
            ],
            style: {backgroundColor: '#F7E1A9'},
        },
    }
];
