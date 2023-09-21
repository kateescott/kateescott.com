import cover_1 from "./cover_1.png";
import cover_2 from "./cover_2.png";
import cover_3 from "./cover_3.png";
import {Project} from "@/app/projects-legacy/data/project";

const project: Project = {
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

export default project;

