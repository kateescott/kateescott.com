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
import ontologymap from './assets/ontology-map.png';

import Image from 'next/image'
import styles from './ontology_mapping.module.css';
import classNames from "classnames";
import React from "react";
import {Carousel, CarouselItem, Lightbox, TextCarousel} from "@/app/lib/carousel/carousel";

export default function OntologyMappingProject() {
    return (
        <ProjectLayout>
            <section className={styles.section}>
                <ProjectInfo
                    title="Ontology Mapping"
                    subtitle="Empowering insights through unified client data mapping."
                    description={
                        <>
                            <p>Faethm by Pearson's occupation mapping is transforming how organisations leverage skills and jobs data. It provides organisations with a comprehensive understanding of their workforce by seamlessly bridging the gap between disparate data sources.</p>
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
                    <cite>
                        – Osmos.io (<a
                        href="https://www.osmos.io/guides/customer-data-onboarding">https://www.osmos.io/guides/customer-data-onboarding</a>)
                    </cite>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>User Research</h4>
                    <p>
                    Insights from internal and external interviews were gathered to understand the organisation's internal processes, goals, challenges, as well as end users' experiences, challenges, and expectations. These insights guided the discovery and development process, ensuring the end product addressed pain points, streamlined operations, and optimised user experiences.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <TextCarousel backgroundColor="#F0FAFD" items={[
                    {
                        text: "\"Theres been organisations who've had a validation file sitting with them for a good six months.\"",
                        cite: "– Customer Insights Manager, Pearson"
                    },
                    {
                        text: "\"It can be a little confusing for people who see the ontology for the first time, especially with different levels.\"",
                        cite: "– Customer Insights Manager, Pearson"
                    },
                    {
                        text: "\"I think the main issue we have, is anytime you do anything manually its subject to an error.\"",
                        cite: "– Customer Insights Manager, Pearson"
                    }
                ]}/>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Research Findings</h4>
                    <p>
                    Both internal and external research have uncovered challenges that impact our platform and end-users. These findings include:
                    </p>
                    <ol className={styles.list}>
                        <li>Users spend several hours a day manually matching job roles and troubleshooting data discrepancies, with Pearson’s ontology manager being solely responsible for manually matching the client’s job roles to the ontology.</li>
                        <li>The validation process, done by csv file, takes an average of 90 business days due to manual job matching and low-confidence role reviews, causing significant delays in onboarding to the platform.</li>
                        <li>Unexpected data changes by clients negatively impact platform readiness.</li>
                        <li>Several users express difficulty in understanding the ontology, making the onboarding process challenging.</li>
                    </ol>
                </div>
            </section>


            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#F9F9F9'}}>
                    <img className={styles.image} src={ontologymap.src} alt="" height="480"/>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Research Insights</h4>
                    <p>
                    The research findings unveiled invaluable insights into the challenges and pain points within the data onboarding process. These insights include:
                    </p>
                    <ol className={styles.list}>
                        <li>The manual job matching process and troubleshooting of data discrepancies are resource-intensive and time-consuming for users. The heavy reliance on the ontology manager for these tasks suggests an opportunity to streamline and automate these processes to improve user efficiency and reduce operational overhead.</li>
                        <li>The lengthy validation process, primarily caused by manual job matching and low-confidence role reviews, presents a critical bottleneck in the onboarding process. This finding highlights the need to implement a more efficient, and automated validation procedure to expedite the onboarding of users onto the platform and reduce time-to-value.</li>
                        <li>Unforeseen data changes by clients can impact platform readiness, highlighting the importance of enhancing the platform's adaptability and data management capabilities. This finding shows the need to develop strategies to handle and accommodate such changes more effectively to ensure a smoother onboarding process for clients.</li>
                        <li>The finding that users' struggle to grasp the ontology indicates a potential barrier to successful onboarding. This emphasises the need to improve user training and documentation regarding the ontology, as well as possibly simplifying or providing additional support for users who may not have prior experience.</li>
                    </ol>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>User Profile</h4>
                    <p>
                    Through research, a persona named Fei Fei, representing a typical user, was developed to gain deeper insights into the needs, preferences, and behaviours of the target audience. Fei Fei's job responsibilities include creating and retaining a consistent supply of top talent, reviewing job details, and providing quarterly people analytic reporting.</p>
                    <p>We discovered that Fei Fei often had to rely on spreadsheets and manual data cleaning processes to align the company's data with the platform.</p>                    
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#F0FAFD'}}>
                    <img className={styles.image} src={om12.src} alt="" height="480"/>
                </div>
            </section>
        
          
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Recommendations</h4>
                    <p>
                    To improve operational efficiency and deliver a more user-friendly experience, the team ask this question:
                    </p>
                    <p>The following recommendations were proposed:</p>
                    <ol className={styles.list}>
                        <li>Automated error detection: To address the finding that users spend significant time troubleshooting data discrepancies, the implementation of an automated error detection feature, could assist the company to enhance operational efficiency by reducing resource-intensive manual processing.
                        </li>
                        <li>Automated job matching: The validation process takes a long time due to manual processing, by introducing automated job matching through machine learning algorithms, the company could improve operational efficiency and reduce the clients time-to-value.
                        </li>
                        <li>Data change controls: As unexpected data changes can negatively impact platform readiness, by enforcing data change controls, the company aims to mitigate the issue and enhance data management capabilities.
                        </li>
                        <li>Accessible ontology framework: As users have difficulty understanding the ontology framework, by providing comprehensive documentation the company can enable users to efficiently interpret and navigate the ontology framework, while enhancing the efficiency of the customer support team.
                        </li>
                    </ol>
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
                    The ontology mapping product was designed to directly address the challenges and pain points identified through research insights. Our solution focuses on streamlining the data onboarding process, minimising manual work, enhancing data accuracy, and empowering users with comprehensive resources.
</p><p>Key features that define the solution are as follows:
                    </p>
                    <ol className={styles.list}>
                        <li>Mapping validation: To address the issue of users spending excessive time manually matching job roles and troubleshooting data discrepancies, we have introduced the the edit role recommendations feature. This empowers users to review and edit job-match recommendations, enhancing data accuracy and relevance. Discrepancies in job roles can now be quickly identified and rectified within the platform, significantly reducing manual work.
                        </li>
                        <li>Automated job mapping: Acknowledging the prolonged validation process due to manual job matching, we have implemented an automated mapping system. This feature employs machine learning algorithms to automatically match job roles from the clients data to the ontology, reducing validation time and improving efficiency. This leads to faster onboarding and reduced time-to-value.
                        </li>
                        <li>Data change controls: To prevent changes to critical data fields and maintain data integrity, we have introduced robust data controls. These controls restrict user access to fields that should not be modified, ensuring data stability and platform reliability.
                        </li>
                        <li>Self-serve ontology framework: Recognising that some users find it challenging to understand the ontology framework, we have created a resources area on the platform where users can explore and comprehend the standardised occupation ontology through detailed explanations of the ontology classifications. This feature facilitates informed decision-making and empowers users with better understanding.
                        </li>
                        <li>Self-serve client resources: In line with the recommendation to improve user training and documentation, we have introduced documentation on the resources section of the platform where users have access to comprehensive documentation and FAQs, reducing the learning curve and enabling them to maximise the platform's value independently.
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
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Summary</h4>
                    <p>
                    By addressing the challenges of data onboarding, Faethm by Pearson's Ontology Mapping revolutionises how organisations leverage skills and jobs data, providing users with a seamless and efficient experience.</p>
                    <p>For instance, HR Managers can now onboard their data in as little as a few minutes to a few hours (depending on dataset size), a substantial improvement from the previous average of 90 business days, thanks to the implementation of the automated validation processes. </p>
                    <p>This remarkable reduction in onboarding time empowers organisations to access their workforce data in a more timely manner, enabling them to make faster, data-driven decisions and enhance their overall operational agility.</p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={classNames(styles.text, styles.highlight, styles.hero)} style={{background: '#F9F9F9'}}>
                    <h4 className={styles.title} style={{color: '#004E66'}}>The results of this project:</h4>
                    <p>
                        Client data onboarding time drastically reduced from an average of <strong>90 business days to just a few hours.</strong>
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Project Learnings</h4>
                    <p>
                        Project learnings have been instrumental in shaping our journey, underlining the significance of
                        key practices to achieving product success. These practices included:
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
  
        </ProjectLayout>
    );
}


