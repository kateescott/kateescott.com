import type {Project} from "@/app/_projects/project";
import styles from "@/app/_projects/ontology-mapping/ontology_mapping.module.css";
import {ProjectInfo} from "@/app/lib/project_info/project_info";
import React from "react";
import {ProjectLayout} from "@/app/lib/project/project";
import workforceSummaryImg from "@/app/_projects/ontology-mapping/assets/workforce_summary.png";
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'


function Page() {
    return (
        <ProjectLayout>
            <section className={styles.section}>
                <ProjectInfo
                    title={learnMate.title}
                    subtitle={learnMate.subtitle}
                    description={
                        <p>Pearson LearnMate revolutionises career development and skill acquisition through
                            personalised learning journeys. The project creates an innovative online platform that
                            leverages individual skills and occupation history to curate customised learning playlists,
                            empowering users to drive their professional growth.</p>
                    }
                    organization="Faethm by Pearson"
                    role="UX/UI Designer"
                    date="2023 (6 weeks)"
                />
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#E6F7FC'}}>
                    <img className={styles.image} src={img1.src} alt="" height="480"/>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>User Profiles</h4>
                    <p>
                        To cater to diverse user needs, Pearson LearnMate identifies four distinct user profiles, each
                        with specific learning requirements and career goals:
                    </p>
                    <ol className={styles.list}>
                        <li>Wizard: The Wizard persona represents experienced professionals seeking advanced techniques,
                            emerging trends, and specialised knowledge within their occupation. The learning playlist
                            for Wizards focuses on staying at the forefront of their field by providing updates on the
                            latest tools, technologies, and methodologies.
                        </li>
                        <li>Chameleon: Chameleon personas are proficient in their jobs but aim to enhance their existing
                            skills and stay updated with industry advancements. The Chameleon learning playlist offers
                            opportunities for continuous learning, leadership development, and courses to broaden their
                            expertise.
                        </li>
                        <li>Neophyte: The Neophyte persona represents individuals who are new to the workforce. Their
                            learning playlist focuses on acquiring the necessary skills and knowledge to enter their
                            desired occupation. It includes courses related to their field of interest, foundational
                            skill development, resume writing, interview preparation, and career exploration resources.
                        </li>
                        <li>Mysterio: The Mysterio persona represents users for whom limited information is available.
                            The learning playlist for Mysterio focuses on skill discovery, providing general courses and
                            resources to explore various occupations, identify interests, and gain a better
                            understanding of potential career paths.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Design Approach</h4>
                    <p>
                        To create an engaging and intuitive user interface for Pearson LearnMate, we followed a
                        user-centred design approach, considering the needs and preferences of each user persona. The UI
                        design principles focused on the following aspects:
                    </p>
                    <ol className={styles.list}>
                        <li>Personalisation and relevance: The UI design aimed to provide personalised learning
                            experiences by adapting to each user&apos;s skills, occupation history, and career goals. This
                            involved dynamically generating learning playlists based on individual preferences, ensuring
                            the content remains relevant and aligned with their professional growth.
                        </li>
                        <li>Intuitive navigation: To enhance user engagement, the UI design emphasised intuitive
                            navigation, enabling users to easily explore and access relevant courses and resources.
                            Clear categorisation, search functionality, and personalised recommendations help users
                            navigate the platform effortlessly.
                        </li>
                        <li>Seamless learning experience: The UI design aimed to provide a seamless learning experience
                            by integrating various learning formats, such as video lectures, interactive quizzes, and
                            collaborative projects. A consistent and intuitive interface across devices ensured that
                            users could access their learning playlists anytime, anywhere.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#E6F7FC'}}>
                    <img className={styles.image} src={img2.src} alt="" height="700px"/>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Summary</h4>
                    <p>
                        By implementing these design principles, Pearson LearnMate&apos;s UI enhancement focused on creating
                        a user-centric platform that revolutionises career growth, promotes continuous learning, and
                        empowers individuals to pursue their professional aspirations effectively.
                    </p>
                </div>
            </section>
        </ProjectLayout>
    )
}

export const learnMate: Project = {
    Page: Page,
    title: "LearnMate",
    subtitle: "Revolutionising career growth through personalised learning journeys.",
    thumbnail: img1,
    cardBackground: '#E6F7FC'
}
