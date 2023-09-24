import cover_1 from "./cover_1.png";
import cover_2 from "./cover_2.png";
import cover_3 from "./cover_3.png";
import {SimpleProjectLayout} from "@/app/lib/project/project";
import {Project} from "@/app/_projects/project";

function Page() {
    return (
        <SimpleProjectLayout
            title={warmTunas.title}
            meta={{
                description: '100 Warm Tunas is a yearly prediction of Triple J’s Hottest 100.',
                categories: ['Branding', 'Social'],
                client: <a href="https://100warmtunas.com/">100 Warm Tunas</a>,
                date: '2016-2020',
            }}
            gallery={{
                media: [
                    cover_1,
                    cover_2,
                    cover_3,
                ]
            }}
            cardStyle={warmTunas.cardStyle!}
        />
    )
}


export const warmTunas: Project = {
    Page,
    title: '100 Warm Tunas',
    thumbnail: cover_1,
    cardStyle: {backgroundColor: '#F7E1A9'}
}
