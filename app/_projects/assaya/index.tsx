import type {Project} from "@/app/_projects/project";
import styles from "@/app/_projects/ontology-mapping/ontology_mapping.module.css";
import {ProjectInfo} from "@/app/lib/project_info/project_info";
import React from "react";
import {ProjectLayout} from "@/app/lib/project/project";
import {Carousel, CarouselItem, Lightbox} from "@/app/lib/carousel/carousel";
import classNames from "classnames";
import assaya1 from './assets/assaya1.png';
import assaya2 from './assets/assaya2.png';
import assaya3 from './assets/assaya3.png';
import assaya4 from './assets/assaya4.png';
import assaya5 from './assets/assaya5.png';
import assaya6 from './assets/assaya6.png';
import assaya7 from './assets/assaya7.png';
import assaya9 from './assets/assaya9.png';
import assaya10 from './assets/assaya10.png';
import assaya11 from './assets/assaya11.png';
import assaya12 from './assets/assaya12.png';
import assaya13 from './assets/assaya13.png';
import assaya15 from './assets/assaya15.png';
import assaya16 from './assets/assaya16.png';
import assaya17 from './assets/assaya17.png';
import assayadashboard from './assets/assayadashboard.png';


function Page() {
    return (
        <ProjectLayout>
            <section className={styles.section}>
                <ProjectInfo
                    title={assaya.title}
                    subtitle={assaya.subtitle}
                    description={
                        <p>Assaya collaborates with NGOs in remote Aboriginal communities to combat HIV/AIDS. Through
                            innovative solutions and support, Assaya enhances the efforts of NGOs in preventing the
                            spread of HIV/AIDS and improving healthcare outcomes.</p>
                    }
                    organization="AcademyXi x Assaya"
                    role="UX/UI Designer"
                    date="2023 (6 weeks)"
                />
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#519F85'}}>
                    <img className={styles.image} src={assayadashboard.src} alt="" height="480"/>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>The Problem</h4>
                    <p>
                        Non-Government Organisations (NGOs) delivering healthcare to remote Aboriginal communities in
                        Australia, with high rates of HIV/AIDS, face challenges accessing diagnostic tools and providing
                        crucial services due to limited community infrastructure. As a result, their ability to deliver
                        quality healthcare and effectively address the specific needs of these communities is hindered.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Research Findings</h4>
                    <p>
                        Qualitative research conducted as part of the project has uncovered crucial insights that form
                        the basis for empowering NGOs in their mission to combat the spread of HIV/AIDS in remote
                        Aboriginal communities. Key research findings include:
                    </p>
                    <ol className={styles.list}>
                        <li>21 times higher risk of STDs in remote Aboriginal communities.
                        </li>
                        <li>Aboriginal communities are twice as likely to be diagnosed with HIV.
                        </li>
                        <li>20% of individuals in remote Aboriginal communities are living with undiagnosed HIV.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <Carousel backgroundColor="#F7FAF9" items={[
                    {src: assaya1, alt: ''},
                    {src: assaya2, alt: ''},
                    {src: assaya3, alt: '',backgroundColor: '#FFFBF8'},
                    {src: assaya4, alt: ''},
                ]}/>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Research Insights</h4>
                    <p>
                        The research has revealed valuable insights into the challenges and pain points associated with
                        addressing HIV/AIDS in remote Aboriginal communities. Key insights include: </p>
                    <ol className={styles.list}>
                        <li>There is a need for targeted interventions in remote Aboriginal communities.
                        </li>
                        <li>Tailored strategies are crucial to address the unique challenges faced by these
                            communities.
                        </li>
                        <li>There is an urgent need to close the gap in HIV/AIDS knowledge.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>User Profile</h4>
                    <p>
                        Through research, two main personas were developed to gain deeper insights into the needs,
                        preferences, and behaviours of the target audience. These personas represent typical users of
                        the Assaya platform, enabling effective customisation of the product to meet their specific
                        requirements.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <Carousel backgroundColor="#F7FAF9" items={[
                    {src: assaya5, alt: ''},
                    {src: assaya6, alt: '',backgroundColor: '#FFFBF8'},
                ]}/>
            </section>


            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Generating Possible Solutions</h4>
                    <p>
                        The team brainstormed solutions to address the unique challenges faced by international medical
                        graduates (IMGs) during the registration process to practice in the Australian healthcare
                        system. The main question addressed was:
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={classNames(styles.text, styles.highlight)} style={{backgroundColor: '#F7FAF9', color:'#1B4240'}}>
                    <p>
                        How might we design the Assaya platform so that NGOs can easily and effectively target
                        prevention and intervention strategies, which can lead to improved healthcare outcomes for
                        remote Aboriginal communities?
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Recommendations</h4>
                    <p>
                        Based on the research findings and insights, the following recommendations were proposed to
                        address the challenges faced by NGOs in preventing the spread of HIV/AIDS in remote Aboriginal
                        communities:
                    </p>
                    <ol className={styles.list}>
                        <li>Augment Assaya&apos;s dashboard for real-time monitoring.
                        </li>
                        <li>Optimise Assaya&apos;s dashboard for efficient test result tracking.
                        </li>
                        <li>Expand Assaya&apos;s resources for partner NGOs.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Conceptualisation</h4>
                    <p>
                        The design approach focuses on creating meaningful and user-centred experiences through
                        research, ideation, and prototyping. User feedback and iterative design processes will be
                        employed to ensure that the final solution effectively addresses the challenges faced by NGOs
                        and meets the needs of remote Aboriginal communities.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <Carousel backgroundColor="#F7FAF9" items={[
                    {src: assaya7, alt: ''},
                    {src: assaya9, alt: ''},
                    {src: assaya10, alt: ''},
                ]}/>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>The Solution</h4>
                    <p>
                        The Assaya platform will be designed to address the specific needs of NGOs working to prevent
                        the spread of HIV/AIDS in remote Aboriginal communities. Key elements of the solution include:
                    </p>
                    <ol className={styles.list}>
                        <li>Enhanced dashboard: Assaya&apos;s dashboard will provide real-time monitoring capabilities,
                            allowing NGOs to track and analyse data related to HIV/AIDS prevalence, testing, and
                            intervention outcomes.
                        </li>
                        <li>Streamlined test result tracking: The dashboard will be optimised to facilitate efficient
                            tracking and management of test results, ensuring timely diagnosis and appropriate
                            follow-up.
                        </li>
                        <li>Expanded resources: Assaya will expand its resources, including educational materials and
                            support services, to empower partner NGOs in their efforts to prevent the spread of HIV/AIDS
                            and improve healthcare outcomes.
                        </li>
                    </ol>
                </div>
            </section>

            <section className={styles.section}>
                <Carousel backgroundColor="#519F85" items={[
                    {src: assaya11, alt: ''},
                    {src: assaya12, alt: ''},
                    {src: assaya13, alt: ''},
                    {src: assaya15, alt: ''},
                    {src: assaya16, alt: ''},
                    {src: assaya17, alt: ''},
                ]}/>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Summary</h4>
                    <p>
                        By leveraging technology, data-driven strategies, and collaborative partnerships, Assaya and
                        NGOs aim to prevent the spread of HIV/AIDS, improve healthcare outcomes, and support the
                        well-being of remote Aboriginal communities.
                    </p>
                </div>
            </section>

        </ProjectLayout>
    )
}

export const assaya: Project = {
    Page: Page,
    title: "Assaya's Collaboration with NGOs",
    subtitle: "Preventing the spread of HIV/AIDS in remote Aboriginal communities.",
    thumbnail: assayadashboard,
    cardBackground: '#519F85'
}
