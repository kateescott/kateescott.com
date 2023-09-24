import {ProjectInfo} from "@/app/lib/project_info/project_info";
import {ProjectLayout} from "@/app/lib/project/project";
import workforceSummaryImg from './assets/workforce_summary.png';
import workforceMappingImg from './assets/workforce_mapping.png';
import om1 from './assets/om1.png';
import om2 from './assets/om2.png';
import om3 from './assets/om3.png';
import om4 from './assets/om4.png';
import om5 from './assets/om5.png';
import om6 from './assets/om6.png';
import om7 from './assets/om7.png';
import om8 from './assets/om8.png';
import om9 from './assets/om9.png';
import om10 from './assets/om10.png';
import om11 from './assets/om11.png';
import om12 from './assets/om12.png';
import om13 from './assets/om13.png';
import om14 from './assets/om14.png';
import om15 from './assets/om15.png';
import om16 from './assets/om16.png';
import om17 from './assets/om17.png';
import om18 from './assets/om18.png';
import om19 from './assets/om19.png';
import om20 from './assets/om20.png';
import om21 from './assets/om21.png';
import omcover from './assets/omcover.png';

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
                        <>
                            <p>Faethm by Pearson's Ontology Mapping offering aims to revolutionise the way organisations leverage skills and jobs data. It empowers organisations by providing them with a comprehensive understanding of the jobs within their ecosystem, thanks to advanced algorithms that prioritise data accuracy.</p>
                            <p>The goal of this project is to bridge the gap between disparate client data sources and Faethm by Pearson’s robust occupation ontology. This process ensures that all data points are consistently and meaningfully organised ultimately, allowing for a holistic view of the organisation’s insights across the entire product suite.</p>
                        </>
                    }
                    organization="Faethm by Pearson"
                    role="UX/UI Designer"
                    date="2022-2023"
                />
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#004E66'}}>
                    <img className={styles.image} src={omcover.src} alt="" height="480"/>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>The Problem</h4>
                    <p>
                    A HR manager responsible for inputting organisational data into our system faces the cumbersome and time-consuming task of manual data entry and validation. This hinders their ability to fully utilise the platform's value until this task is completed, which can take anywhere from 90 to 120 business days.
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
                    <p>For instance, during an internal interview with the customer team, we discovered that onboarding new clients often took months due to manual data validation, causing delays in project timelines. Externally, we interviewed a data analyst who shared their frustration about the lack of self-serve resources availability to understand the platform's ontology framework.</p>
                </div>
            </section>
            {/* <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#F9F9F9'}}>
                    <img className={styles.image} src={image2Img.src} alt="" height="480"/>
                </div>
            </section> */}

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
                <div className={classNames(styles.text, styles.highlight)}>
                    <p>
                        "Theres been organisations who've had a validation file sitting with them for a good six months."
                    </p>
                </div>
            </section>


            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>User Profile</h4>
                    <p>
                    Through research, a persona named Fei Fei, representing a typical user, was developed to gain deeper insights into the needs, preferences, and behaviours of the target audience. Fei Fei's job responsibilities include creating and retaining a consistent supply of top talent, reviewing job details, and providing quarterly people analytic reporting.</p>

<p>We discovered that Fei Fei often had to rely on spreadsheets and manual data cleaning processes to align the company's data with the platform.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#F0FAFD'}}>
                    <img className={styles.image} src={om12.src} alt="" height="480"/>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Generating Possible Solutions</h4>
                    <p>
                    After brainstorming, the team selected solutions that directly addressed the pain points identified during user research. The goal was to reduce manual work, improve validation, and enhance ontology understanding.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={classNames(styles.text, styles.highlight)}>
                    <p>
                        "How might we enable clients to quickly and efficiently access insights on and get value from our platform?"
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Recommendations</h4>
                    <p>
                    Based on research insights, the following recommendations were proposed to address the challenges and enhance the data onboarding experience:
                    </p>
                    <ol className={styles.list}>
                        <li>Automated error detection: Implement automated scripts to streamline manual processes, and resolve common data discrepancies to expedite data validation.
                        </li>
                        <li>Automated job matching: Introduce an automated job matching system to increase confidence levels in role matches through the implementation of machine learning algorithms to improve accuracy over time.
                        </li>
                        <li>Data change controls: Enforce data change controls and verification processes by  implementing version control for client data to prevent unexpected changes.
                        </li>
                        <li>Comprehensive documentation: Provide comprehensive documentation and training on the ontology framework. Include FAQs and user guides to empower users with better understanding of the ontology.
                        </li>
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
                <Carousel backgroundColor="#F0FAFD" items={[
                    {src: om13, alt: ''},
                    {src: om14, alt: ''},
                    {src: om15, alt: ''},
                    {src: om16, alt: ''},
                    {src: om17, alt: ''},
                    {src: om18, alt: ''},
                    {src: om19, alt: ''},
                    {src: om20, alt: ''},
                ]}/>
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
                    {src: om6, alt: '', caption: 'HR Managers can experience the seamless alignment of their workforce data with our world-class data science ontology through this interface. It exhibits the ease with which HR managers can fine-tune recommended occupation matches based on the original job role data, addressing the data accuracy challenges uncovered during user research and offering a more efficient and precise onboarding process.'},
                    {src: om4, alt: '', caption: 'With the “What we have mapped” drop-down feature, HR managers can seamlessly enhance the accuracy of their workforce data by making changes to the recommended occupation matches, based on the original job role data.'},
                    {src: om2, alt: '', caption:'The drop-down in "What We Have Mapped" suggests five closely matched occupations from the Pearson Occupation Ontology, streamlining decision-making and enhancing user experience.'},
                    {src: om3, alt: '', caption:'The “Browse Ontology” feature empowers HR Managers to refine role matches efficiently, addressing time-consuming challenges in data validation and role matching, that was previously done in excel, during onboarding. It streamlines operations, facilitates faster access to data, and enhances the overall user experience.'},
                    {src: om21, alt: '', caption:'The workforce distribution page equips HR Managers with a self-serve resource that provides vital insights into their workforce distribution, enabling data-driven decision-making to help identify trends, disparities, and optimisation opportunities, offering valuable context to the workforce structure post-ontology mapping.'},
                    {src: om7, alt: '', caption:'The occupations page presents HR Managers with a self-serve resource that has a detailed overview of roles within their organisation, offering context to their workforce structure post-ontology mapping.'},
                    {src: om10, alt: '', caption:'The tasks page allows HR Managers to efficiently view tasks and operations within their organisation, offering valuable context to workforce productivity after ontology onboarding.'},
                    {src: om8, alt: '', caption:'Skills distribution empowers HR Managers with insights into skill sets across their organisation, offering context to skill distribution post-ontology mapping.'},
                    {src: om9, alt: '', caption:'The skills demand page assists HR Managers in identifying skill gaps and demand within their organisation, providing essential context to skill requirements post-ontology mapping.'},
                    {src: om5, alt: '', caption:'The ontology mapping resources section serves as a hub for users, providing a repository of knowledge, tutorials, and FAQs. It equips HR Managers with the essential knowledge and tools required for seamless navigation and optimisation of the platform post ontology mapping.'},
                    {src: om1, alt: '',},
                ]}/>
            </section>

             {/* TO DO - IMPACT  */}

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
                    By addressing the challenges of data onboarding, Faethm by Pearson's Ontology Mapping revolutionises how organisations leverage skills and jobs data, providing users with a seamless and efficient experience.</p>
                    <p>For instance, HR Managers can now onboard their data in as little as a few minutes to a few hours (depending on dataset size), a substantial improvement from the previous average of 90 business days, thanks to the implementation of the automated validation processes. </p>
                    <p>This remarkable reduction in onboarding time empowers organisations to access their workforce data in a more timely manner, enabling them to make faster, data-driven decisions and enhance their overall operational agility.</p>
                </div>
            </section>
        </ProjectLayout>
    );
}


