import {ProjectInfo} from "@/app/lib/project_info/project_info";
import {ProjectLayout} from "@/app/lib/project/project";
import pu1 from './assets/pu1.png';
import pu2 from './assets/pu2.png';
import pu3 from './assets/pu3.png';
import pu4 from './assets/pu4.png';
import Image from 'next/image';
import styles from './pull_up_banners.module.css';
import classNames from "classnames";
import React from "react";
import {Carousel, TextCarousel} from "@/app/lib/carousel/carousel";

export default function pullUpBanners() {
    return (
        <ProjectLayout>
            <section className={styles.section}>
                <ProjectInfo
                    title="Industry Events Banners"
                    subtitle="Crafting compelling marketing assets for event promotion."
                    description={
                        <>
                            <p>
                                Faethm is committed to revolutionising workforce analytics and empowering organisations with data-driven solutions. To enhance their industry presence, they aim to strategically craft marketing assets for event promotion, with the goal of elevating their brand visibility and solidifying their leadership in the evolving landscape of workforce analytics.
                            </p>
                        </>
                    }
                    organization="Faethm by Pearson"
                    role="Graphic Designer"
                    date="2022"
                />
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#33C4BD'}}>
                    <Image src={pu1} className={styles.image} alt="" placeholder="blur"/>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Overview</h4>
                    <p>
                    Faethm, a leading workforce analytics platform, sought to promote their innovative predictive skills data and workforce planning solutions at prominent industry events. To capture the attention of attendees and convey the value of their offerings, they required visually appealing and impactful pull-up event banners. The banners were aimed at highlighting key features of Faethm&apos;s services, including future-proofing L&D investments, guiding the future of work, and enhancing workforce planning with predictive insights.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Objectives</h4>
                    <p>
                    Both internal and external research have uncovered challenges that impact our platform and end-users. These findings include:
                    </p>
                    <ol className={styles.list}>
                        <li>Create visually captivating banners that stand out amidst the event crowd.</li>
                        <li>Clearly communicate Faethm&apos;s core offerings and value propositions.</li>
                        <li>Ensure consistency in branding and messaging across all banners.</li>
                        <li>Incorporate imagery and design elements that resonate with the target audience of HR professionals and business leaders.</li>
                    </ol>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#C2EDEB'}}>
                    <Image src={pu2} className={styles.image} alt="" placeholder="blur"/>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Future-proof your L&D investments with predictive skills data</h4>
                    <p>
                    For this banner, the focus was on conveying the concept of future-proofing investments and leveraging predictive skills data for effective L&D strategies. The design incorporated vibrant colours and dynamic visuals to signify growth and forward-thinking. Key phrases such as “optimize upskilling & reskilling pathways” were emphasized to highlight Faethm&apos;s ability to tailor learning initiatives to future capabilities.
                    </p>
                </div>
            </section>
            
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#C2EDEB'}}>
                    <Image src={pu3} className={styles.image} alt="" placeholder="blur"/>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Your guide to the future of work</h4>
                    <p>
                    This banner aimed to position Faethm as a trusted advisor in navigating the complexities of the evolving workplace landscape. The design featured sleek and modern typography against a background that symbolized innovation and progress. The inclusion of the website address emphasized accessibility to Faethm&apos;s insights and solutions, inviting attendees to explore further.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#C2EDEB'}}>
                    <Image src={pu4} className={styles.image} alt="" placeholder="blur"/>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Smarter workforce planning with predictive insights</h4>
                    <p>
                    The third banner emphasized the importance of smarter workforce planning and the role of predictive insights in anticipating future skill requirements. The design utilized clean lines and professional imagery to convey reliability and trustworthiness. The messaging was concise yet impactful, focusing on the ability to foresee critical future skills and stay ahead of industry trends.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Outcome</h4>
                    <p>
                    The finalised pull-up event banners successfully achieved Faethm&apos;s objectives by effectively communicating their value propositions and capturing the attention of event attendees. Feedback from both Faethm representatives and event attendees was overwhelmingly positive, with many expressing interest in learning more about Faethm&apos;s offerings. The cohesive design approach ensured consistency in branding and messaging across all banners, reinforcing Faethm&apos;s positioning as a leader in workforce analytics and predictive insights.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Conclusion</h4>
                    <p>
                    Through strategic graphic design, Faethm was able to effectively showcase their innovative solutions and attract the interest of potential clients and industry stakeholders. The pull-up event banners served as powerful marketing tools, driving engagement and generating leads at the event. Moving forward, Faethm can leverage the success of this design campaign to further enhance their brand visibility and expand their market presence within the HR and workforce analytics space.
                    </p>
                </div>
            </section>

        </ProjectLayout>
    );
}


