import home from "./home@2x.png";
import img1 from "./1@2x.png";
import img2 from "./2@2x.png";
import img3 from "./3@2x.png";
import {SimpleProjectLayout} from "@/app/lib/project/project";
import {Project} from "@/app/_projects/project";

function Page() {
    return (
        <SimpleProjectLayout
            title={elderAbuseNetwork.title}
            meta={{
                description: 'EAN is a local interdisciplinary collaborative focused on addressing Elder Abuse in the Shoalhaven community. It aims to aid relevant local agencies in identifying, responding to and preventing abuse of older people.',
                categories: ['Branding'],
                client: 'Shoalhaven Aged Care / University of Wollongong',
                date: '2016',
            }}
            gallery={{
                media: [
                    img1,
                    img2,
                    img3,
                ]
            }}
            cardStyle={elderAbuseNetwork.cardStyle!}
        />
    )
}

export const elderAbuseNetwork: Project = {
    Page,
    title: 'EAN Shoalhaven',
    thumbnail: home,
    cardStyle: {backgroundColor: '#F9CBAC'},
}
