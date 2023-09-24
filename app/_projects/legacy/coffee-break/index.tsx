import img1 from "./1@2x.png";
import img2 from "./2@2x.png";
import img3 from "./3@2x.png";
import {SimpleProjectLayout} from "@/app/lib/project/project";
import {Project} from "@/app/_projects/project";

function Page() {
    return (
        <SimpleProjectLayout
            title={coffeeBreak.title}
            meta={{
                description: 'A zine inspired by the War on Waste which explores keep cup culture and the impact that coffee cups have on the environment, by satirically portraying keep cups from a negative perspective. It aims to empower consumers to make better and more considerate choices for the future.',
                categories: ['Zine', 'Illustration'],
                client: <>Personal Project</>,
                date: '2018',
            }}
            gallery={{
                media: [
                    img1,
                    img2,
                    img3,
                ]
            }}
            cardStyle={coffeeBreak.cardStyle!}
        />
    )
}

export const coffeeBreak: Project = {
    Page,
    title: 'Coffee Break',
    thumbnail: img1,
    cardStyle: {backgroundColor: '#F8ADAB'},
}
