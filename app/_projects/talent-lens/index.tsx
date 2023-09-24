import type {Project} from "@/app/_projects/project";
import styles from "@/app/_projects/ontology-mapping/ontology_mapping.module.css";
import {ProjectInfo} from "@/app/lib/project_info/project_info";
import React from "react";
import {ProjectLayout} from "@/app/lib/project/project";
import workforceSummaryImg from "@/app/_projects/ontology-mapping/assets/workforce_summary.png";
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import carousel1 from './assets/carousel1.png';
import carousel2 from './assets/carousel2.png';
import carousel3 from './assets/carousel3.png';
import carousel4 from './assets/carousel4.png';
import {Carousel} from "@/app/lib/carousel/carousel";
import workforceMappingImg from "@/app/_projects/ontology-mapping/assets/workforce_mapping.png";

function Page() {
    return (
        <ProjectLayout>
            <section className={styles.section}>
                <ProjectInfo
                    title={talentLens.title}
                    subtitle="Enhancing the potential of Pearson's TalentLens assessment solutions."
                    description={
                        <p>Pearson's TalentLens is a comprehensive portfolio of psychometrics assessment solutions
                            designed to help organisations identify, develop, and retain top talent. The project aims to
                            enhances the user interface of Pearson's TalentLens portfolio to improve user engagement and
                            maximise the effectiveness of talent assessment tools.</p>
                    }
                    organization="Pearson"
                    role="UX/UI Designer"
                    date="2023"
                />
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#005850'}}>
                    <img className={styles.image} src={img1.src} alt="" height="480"/>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>The Problem</h4>
                    <p>
                        The current UI of the TalentLens testing product lacks user-friendliness and fails to provide an
                        intuitive and seamless experience for users. This issue negatively impacts user engagement,
                        undermines the effectiveness of the assessment tools, and diminishes the overall user
                        experience.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>The Process</h4>
                    <p>
                        In order to gain a deep understanding of the existing pain points and user needs, thorough
                        research was conducted. This included:
                    </p>
                    <ol className={styles.list}>
                        <li>Ideation: Brainstormed ideas based on existing pain points and limited user information to
                            enhance the user experience.
                        </li>
                        <li>Wireframing: Created low-fidelity wireframes to map out the proposed UI design and
                            interaction flow.
                        </li>
                        <li>Prototyping: Developed interactive prototypes to visualise the proposed solution concept.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>User Profile</h4>
                    <p>
                        Through research, a persona was developed to gain deep insights into the needs, preferences, and
                        behaviours of our target audience. This persona represents typical users of TalentLens, allowing
                        for effective customisation of the product to meet their specific requirements.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#BCDCD6'}}>
                    <img className={styles.image} src={img2.src} alt="" height="480"/>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Recommendations</h4>
                    <p>
                        The recommendations focus on the following key features:
                    </p>
                    <ol className={styles.list}>
                        <li>Streamlined dashboard: An intuitive dashboard providing easy access to assessment management
                            and reporting functionalities.
                        </li>
                        <li>Clear instructions: Clear and concise instructions presented at each step to guide users
                            through the assessment process accurately.
                        </li>
                        <li>Responsive design: A responsive UI design ensuring a seamless experience across different
                            devices, including desktop and mobile.
                        </li>
                        <li>Data analysis and reporting: Enhanced reporting features to interpret and present assessment
                            results effectively, providing actionable insights.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Design Iterations</h4>
                    <p>
                        Due to limited research, design iterations were made based on internal feedback and assumptions.
                        Iterations focused on refining the visual layout, improving clarity of instructions, and
                        enhancing the accessibility of features.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Evaluation and Results</h4>
                    <p>
                        Although user testing was limited, internal feedback highlighted improved user-friendliness and
                        streamlined workflows. The redesigned UI positively impacted user engagement and satisfaction,
                        allowing for more efficient administration of assessments and better interpretation of results.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <Carousel backgroundColor="#005850" items={[
                    {src: carousel1, alt: ''},
                    {src: carousel2, alt: ''},
                    {src: carousel3, alt: ''},
                    {src: carousel4, alt: ''},
                ]}/>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Challenges and Learnings</h4>
                    <ol className={styles.list}>
                        <li>Limited research: The challenge of limited research required making design decisions based
                            on assumptions and internal feedback.
                        </li>
                        <li>Iterative improvement: Regular internal feedback sessions helped refine the design and
                            validate assumptions made during the process.
                        </li>
                        <li>Importance of collaboration: Collaborating with team members and stakeholders provided
                            valuable insights and perspectives.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Takeaways</h4>
                    <ol className={styles.list}>
                        <li>Even with limited research, a user-centred design approach can improve user experience.</li>
                        <li>Regular feedback sessions and collaboration help in refining the design and validating
                            assumptions.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Summary</h4>
                    <p>
                        By addressing the existing UI issues and focusing on user-centric design principles, the
                        TalentLens product now provides a more user-friendly and intuitive experience. The enhanced UI
                        has improved user engagement, increased user satisfaction, and maximised the effectiveness of
                        the assessment tools, ultimately benefiting organisations in their talent acquisition,
                        development, and succession planning efforts.
                    </p>
                </div>
            </section>
        </ProjectLayout>
    )
}

export const talentLens: Project = {
    Page: Page,
    title: "TalentLens",
    thumbnail: img1,
    cardStyle: {background: '#005850'},
}
