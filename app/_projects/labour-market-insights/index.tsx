import type {Project} from "@/app/_projects/project";
import styles from "@/app/_projects/ontology-mapping/ontology_mapping.module.css";
import {ProjectInfo} from "@/app/lib/project_info/project_info";
import React from "react";
import {ProjectLayout} from "@/app/lib/project/project";
import classNames from "classnames";
import labourmarketinsights from './assets/LabourMarketInsights.png'
import labourmarketinsightspersona from './assets/labourmarketinsights-persona.png'
import lmicarousel1 from './assets/lmi-carousel1.png'
import lmicarousel2 from './assets/lmi-carousel2.png'
import lmicarousel3 from './assets/lmi-carousel3.png'
import lmicarousel4 from './assets/lmi-carousel4.png'
import lmicarousel5 from './assets/lmi-carousel5.png'
import lmicarousel6 from './assets/lmi-carousel6.png'
import lmicarousel7 from './assets/lmi-carousel7.png'
import lmicarousel8 from './assets/lmi-carousel8.png'
import lmi2 from './assets/lmi-2.png'

import {Carousel, CarouselItem, Lightbox} from "@/app/lib/carousel/carousel";


function Page() {
    return (
        <ProjectLayout>
            <section className={styles.section}>
                <ProjectInfo
                    title={labourMarketInsights.title}
                    subtitle={labourMarketInsights.subtitle}
                    description={
                        <p>Faethm by Pearson's labour market insights offering simplifies data access and enhances the
                            customer experience. The project seamlessly migrates workforce information from Tableau to
                            the Faethm platform, providing users with efficient access to essential information.</p>
                    }
                    organization="Faethm by Pearson"
                    role="UX/UI Designer"
                    date="2022-2023"
                />
            </section>
            <section>
                <section className={styles.section}>
                    <div className={styles.imageCard} style={{background: '#28B0A5'}}>
                        <img className={styles.image} src={labourmarketinsights.src} alt="" height="480"/>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.text}>
                        <h4 className={styles.title}>The Problem</h4>
                        <p>
                            Policy and decision-makers face a significant challenge: they lack easy access to reliable,
                            unbiased, and comprehensive information necessary for making informed decisions in the
                            ever-evolving workforce landscape. This information gap often results in policies that fall
                            short of addressing critical issues, such as skills shortages or equitable workforce
                            development.
                        </p>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.text}>
                        <h4 className={styles.title}>Research Insights</h4>
                        <p>
                            Through research, valuable insights were gathered, revealing the challenges and pain points
                            associated with policy and decision-making in the workforce context. The following research
                            insights were identified:
                        </p>
                        <ol className={styles.list}>
                            <li>Inadequate insights and limited data hinder policy decisions.</li>
                            <li>Workforce uncertainty and challenges faced by governments.</li>
                            <li>Limited visibility on future employment growth and decline.</li>
                        </ol>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.text}>
                        <h4 className={styles.title}>User Profile</h4>
                        <p>
                            To cater to the different user needs, the users were categorised into two profiles based on
                            their jobs to be done and pain points.
                        </p><p>
                        Kris, the Government Liaison persona, assumes a critical role in bridging the gap between
                        policymakers and data, facilitating effective communication and informed decision-making. On the
                        other hand, Matt, the Policy Economist persona, represents the typical user seeking data-driven
                        insights to illuminate the impact of policy strategies.
                    </p>
                    </div>
                </section>
                <section className={styles.section}>
                    <Carousel backgroundColor="rgba(255, 238, 204, 0.5)" items={[
                        {src: labourmarketinsightspersona, alt: '', backgroundColor: '#F5FCFC'},
                        {src: lmi2, alt: '', backgroundColor: '#FFF9FA'},
                    ]}/>
                </section>

                <section className={styles.section}>
                    <div className={styles.text}>
                        <h4 className={styles.title}>Generating Possible Solutions</h4>
                        <p>
                            The team brainstormed solutions to provide government clients with actionable insights on
                            the future labour market to inform policy decisions and proactively reshape their workforce.
                            The main question addressed was:
                        </p>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={classNames(styles.text, styles.highlight)}
                         style={{background: '#FFF9FA', color: '#993D4F'}}>
                        {/* TO DO */}
                        <p>
                            How might we empower government clients with informed policy decisions for a thriving
                            workforce?
                        </p>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.text}>
                        <h4 className={styles.title}>Recommendations</h4>
                        <p>
                            Based on the research insights, the following recommendations were proposed to address the
                            challenges and enhance the policy decision-making experience:
                        </p>
                        <ol className={styles.list}>
                            <li>Skills shortages and pre-empting them: Provide insights into potential skills shortages
                                and strategies to address them.
                            </li>
                            <li>Government action: Highlight government actions and initiatives that can shape the
                                labour market effectively.
                            </li>
                            <li>Informed policy decisions for a thriving workforce: Provide data-driven insights to
                                inform policy decisions that contribute to a thriving workforce.
                            </li>
                            <li>Identifying potential risks and opportunities in the future labour market: Help identify
                                potential risks and opportunities in the labour market, enabling proactive measures.
                            </li>
                        </ol>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.text}>
                        <h4 className={styles.title}>The Solution</h4>
                        <p>
                            The Faethm platform offers a comprehensive solution for navigating the workforce of both
                            today and the future. Key features of the solution include:
                        </p>
                        <ol className={styles.list}>
                            <li>Assessing potential economic scenarios: Users can assess potential economic scenarios
                                and gain insights into their impact on the workforce and economy.
                            </li>
                            <li>Regional, industry, and job-specific insights: Users can explore how different scenarios
                                affect specific regions, industries, and jobs, facilitating informed decision-making.
                            </li>
                            <li>Collaborative functionality: Users can assign job reviews to relevant team members,
                                leveraging their expertise for accurate analysis.
                            </li>
                            <li>Empowering proactive decisions: Users are empowered to make proactive decisions and take
                                measures to shape a thriving labour market.
                            </li>
                        </ol>
                    </div>
                </section>
                <section className={styles.section}>
                    <Carousel backgroundColor="#F5FCFC" items={[
                        {src: lmicarousel1, alt: ''},
                        {src: lmicarousel2, alt: ''},
                        {src: lmicarousel3, alt: ''},
                        {src: lmicarousel4, alt: ''},
                        {src: lmicarousel5, alt: ''},
                        {src: lmicarousel6, alt: ''},
                        {src: lmicarousel7, alt: ''},
                        {src: lmicarousel8, alt: ''},

                    ]}/>
                </section>

                <section className={styles.section}>
                    <div className={styles.text}>
                        <h4 className={styles.title}>Project Learnings</h4>
                        <p>
                            Project learnings have been instrumental in shaping our journey, underlining the
                            significance of key practices to achieving product success. There practices included:
                        </p>
                        <ol className={styles.list}>

                            <li>User-centric design: Prioritising user needs and pain points throughout the design
                                process ensured that the solution delivered relevant and valuable insights to inform
                                policy decisions effectively.
                            </li>
                            <li>SData accuracy and reliability: Ensuring the accuracy and reliability of the migrated
                                workforce information from Tableau to the Faethm platform was essential to build trust
                                with users and provide reliable insights.
                            </li>
                        </ol>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.text}>
                        <h4 className={styles.title}>Summary</h4>
                        <p>
                            By seamlessly migrating workforce information to the Faethm platform and providing
                            comprehensive labour market insights, Faethm by Pearson empowers policy and decision-makers
                            to make informed decisions, shape a thriving workforce, and drive economic growth.
                        </p>
                    </div>
                </section>


            </section>
        </ProjectLayout>
    )
}

export const labourMarketInsights: Project = {
    Page: Page,
    title: "Labour Market Insights",
    subtitle: "Empowering informed policy decisions for a thriving workforce.",
    thumbnail: labourmarketinsights,
    cardBackground: '#28B0A5',
}
