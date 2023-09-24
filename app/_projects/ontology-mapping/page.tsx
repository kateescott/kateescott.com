import {ProjectInfo} from "@/app/lib/project_info/project_info";
import {ProjectLayout} from "@/app/lib/project/project";
import workforceSummaryImg from './assets/workforce_summary.png';
import workforceMappingImg from './assets/workforce_mapping.png';
import image2Img from './assets/image_2.png';
import image3Img from './assets/image_3.png';
import image4Img from './assets/image_4.png';
import Image from 'next/image'
import styles from './ontology_mapping.module.css';
import classNames from "classnames";
import React from "react";
import {Carousel, CarouselItem, Lightbox} from "@/app/lib/carousel/carousel";

export default function OntologyMappingProject() {
    return (
        <ProjectLayout>
            <section className={styles.section}>
                <ProjectInfo
                    title="Ontology Mapping"
                    subtitle="Empowering insights through unified client data mapping."
                    description={
                        <p>Faethm by Pearson’s Ontology Mapping offering revolutionises how organisations leverage
                            skills
                            and
                            jobs data. Advanced algorithms prioritise data accuracy, empowering organisations with a
                            comprehensive understanding of their ecosystem.</p>
                    }
                    organization="Faethm by Pearson"
                    role="UX/UI Designer"
                    date="2022-2023"
                />
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#004E66'}}>
                    <img className={styles.image} src={workforceSummaryImg.src} alt="" height="480"/>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>The Problem</h4>
                    <p>
                        HR Managers responsible for inputting organisational data into the system face a cumbersome
                        and
                        time-consuming onboarding process. This inefficiency hinders their ability to fully utilise
                        the
                        platform’s value due to the lack of efficiency, leading to frustration and delays in
                        accessing
                        critical
                        data.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={classNames(styles.text, styles.highlight)}>
                    <p>
                        “Seamless customer data onboarding benefits everyone involved— by reducing the manual labor
                        required for wrangling data, it leads to a faster time to value for customers because teams
                        spend less time cleaning data and more time on revenue-generating work.”
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>User Research</h4>
                    <p>
                        Insights from internal and external interviews were gathered to understand the organisation's
                        internal processes, goals, challenges, as well as end users' experiences, challenges, and
                        expectations. These insights guided the discovery and development process, ensuring the end
                        product addressed pain points, streamlined operations, and optimised user experiences.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#F9F9F9'}}>
                    <img className={styles.image} src={image2Img.src} alt="" height="480"/>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>User Profile</h4>
                    <p>
                        Through research, a persona named Fei Fei, representing a typical user, was developed to gain
                        deeper insights into the needs, preferences, and behaviors of the target audience. Fei Fei's job
                        responsibilities include creating and retaining a consistent supply of top talent, reviewing job
                        details, and providing quarterly people analytic reporting.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#F0FAFD'}}>
                    <img className={styles.image} src={image3Img.src} alt="" height="480"/>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Research Insights</h4>
                    <p>
                        The research conducted revealed valuable insights into the challenges and pain points associated
                        with the data onboarding process. These insights highlighted four main categories:
                    </p>
                    <ol className={styles.list}>
                        <li>Manual labor and troubleshooting issues increase processing requirements.</li>
                        <li>The validation process takes over 90 business days due to manual job matching and
                            low-confidence role reviews.
                        </li>
                        <li>Data changes by clients negatively impact platform readiness and onboarding process.
                        </li>
                        <li>Lack of prior ontology knowledge and complex understanding for clients.</li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Conceptualisation</h4>
                    <p>
                        The team embarked on a user-centred journey, driven by research, ideation, and prototyping.
                        Throughout the project, the product underwent rigorous testing at various stages, including
                        insightful stakeholder feedback on lo-fi prototypes. This approach ensured the creation of
                        meaningful and impactful experiences for users.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#F9F9F9'}}>
                    <img className={styles.image} src={image4Img.src} alt="" height="300"/>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>The Solution</h4>
                    <p>
                        The ontology mapping product delivers an all-encompassing solution for optimising workforce data
                        mapping and analysis. Users are guided through a seamless onboarding experience, ensuring a
                        smooth transition to the platform.
                        Key features include:
                    </p>
                    <ol className={styles.list}>
                        <li>Mapping validation: Users can review and edit job-match recommendations to enhance data
                            accuracy and relevance.
                        </li>
                        <li>Self-serve ontology Framework: Users can explore and understand the standardised occupation
                            ontology, facilitating informed decision-making.
                        </li>
                        <li>Collaborative functionality: Users can assign job reviews to relevant team members,
                            leveraging their expertise for accurate analysis.
                        </li>
                        <li>Self-Serve client resources: Comprehensive documentation and support materials enable users
                            to maximise the platform's value independently.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <Carousel backgroundColor="#F0FAFD" items={[
                    {src: workforceMappingImg, alt: ''},
                    {src: workforceMappingImg, alt: ''},
                    {src: workforceMappingImg, alt: ''},
                    {src: workforceMappingImg, alt: ''},
                ]}/>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Project Learnings</h4>
                    <p>
                        Project learnings have been instrumental in shaping our journey, underlining the significance of
                        key practices to achieving product success. There practices included:
                    </p>
                    <ol className={styles.list}>
                        <li>Collaboration and cross-functional coordination: Effective collaboration and communication
                            between different teams, such as ontology managers and developers, were vital for
                            integration and alignment of processes.
                        </li>
                        <li>Prioritisation: Creating a strategic plan and focusing on launching a minimum viable product
                            (MVP) helped maintain project scope, avoid distractions, and deliver a high-quality product
                            within the desired timeframe.
                        </li>
                        <li>Seeking feedback early and continually: Actively involving stakeholders and users throughout
                            the design process, seeking feedback, and testing solutions in various forms early on saved
                            time and minimised the need for extensive rework later on.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Summary</h4>
                    <p>
                        By addressing the challenges of data onboarding, Faethm by Pearson's Ontology Mapping
                        revolutionises how organisations leverage skills and jobs data, providing users with a seamless
                        and efficient experience, ultimately leading to enhanced insights and informed decision-making
                    </p>
                </div>
            </section>
        </ProjectLayout>
    );
}


