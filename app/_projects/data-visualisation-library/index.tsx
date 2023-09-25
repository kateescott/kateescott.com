import type {Project} from "@/app/_projects/project";
import styles from "@/app/_projects/ontology-mapping/ontology_mapping.module.css";
import {ProjectInfo} from "@/app/lib/project_info/project_info";
import React from "react";
import {ProjectLayout} from "@/app/lib/project/project";
import coverImg from './assets/cover.png';
import persona1 from './assets/persona1.png';
import persona2 from './assets/persona2.png';
import persona3 from './assets/persona3.png';
import principles1 from './assets/principles1.png';
import principles2 from './assets/principles2.png';
import types1 from './assets/types1.png';
import types2 from './assets/types2.png';
import colours1 from './assets/colours1.png';
import colours2 from './assets/colours2.png';
import colours3 from './assets/colours3.png';
import colours4 from './assets/colours4.png';
import colours5 from './assets/colours5.png';
import solution1 from './assets/solution1.png';
import solution2 from './assets/solution2.png';
import solution3 from './assets/solution3.png';
import solution4 from './assets/solution4.png';
import classNames from "classnames";
import {Carousel} from "@/app/lib/carousel/carousel";
import workforceMappingImg from "@/app/_projects/ontology-mapping/assets/workforce_mapping.png";


function Page() {
    return (
        <ProjectLayout>
            <section className={styles.section}>
                <ProjectInfo
                    title={dataVisualisationLibrary.title}
                    subtitle={dataVisualisationLibrary.subtitle}
                    description={
                        <p>The development of a data visualisation library creates a comprehensive tool for analysing
                            and interpreting complex data. Adhering to data visualisation principles and design maxims,
                            the project ensures accuracy, helpfulness, and scalability in visualisations, providing a
                            user-friendly and intuitive experience.</p>
                    }
                    organization="Faethm by Pearson"
                    role="UX/UI Designer"
                    date="2022"
                />
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#008079'}}>
                    <img className={styles.image} src={coverImg.src} alt="" height="480"/>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>The Problem</h4>
                    <p>
                        Data analysts and researchers struggle with existing tools due to limited functionality and a
                        steep learning curve, hindering their ability to efficiently analyse and interpret complex
                        datasets.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Research Findings</h4>
                    <ol className={styles.list}>
                        <li>User frustration: Through user surveys and interviews, it was discovered that many of our
                            users, including data analysts and researchers, struggle with our understanding our data
                            visualisations due to their limited functionality and steep learning curve of oru product.
                        </li>
                        <li>Inefficient analysis: Users reported spending significant time and effort manipulating and
                            transforming data before visualising it, which hindered their ability to gain insights
                            quickly.
                        </li>
                        <li>Lack of consistency: Users expressed frustration with inconsistent visual representation
                            across the platform, resulting in difficulties in comparing and interpreting data
                            accurately.
                        </li>
                        <li>Limited scalability: Existing tools often lacked the ability to handle large datasets
                            efficiently, leading to slow rendering and performance issues.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <div className={classNames(styles.text, styles.highlight)} style={{background: '#F5FCFC'}}>
                    <p>
                        “Extracting valuable insights from our data has proven to be a challenge. The sheer complexity
                        of the data visualisations we encounter often leaves us feeling overwhelmed and unsure of where
                        to start.”
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Research Insights</h4>
                    <ol className={styles.list}>
                        <li>The library should prioritise simplicity and intuitiveness to minimise the learning curve
                            and enable users to quickly create meaningful visualisations.
                        </li>
                        <li>Consistency in visual design across different visualisations and platforms is crucial for
                            accurate interpretation and comparison of data.
                        </li>
                        <li>The library should be optimised for scalability, ensuring smooth performance even with large
                            datasets.
                        </li>
                        <li>Providing a streamlined configuration process and offering intelligent defaults will make
                            customisation easier for users.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>User Profile</h4>
                    <p>
                        To gain a deeper understanding of our target audience, we've created three distinct user
                        personas. First, there's Robert, a seasoned Chief Human Resource Officer (CHRO) tasked with
                        making strategic decisions for the organisation based on complex HR data. Then, meet Fei Fei,
                        the Generalist HR Manager, who juggles a wide range of HR functions and seeks efficient
                        data-driven solutions for HR processes. Finally, there's Daniela, the skilled Data Analyst, who
                        specialises in handling intricate datasets and extracting valuable insights.
                    </p>
                    <p>
                        Each persona encounters challenges with existing tools, be it limited functionality or steep
                        learning curves, in their pursuit of efficient data analysis and decision-making for their
                        respective organisations.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <Carousel backgroundColor="rgba(255, 238, 204, 0.5)" items={[
                    {src: persona1, alt: '', backgroundColor: 'rgba(255, 238, 204, 0.5)'},
                    {src: persona2, alt: '', backgroundColor: 'rgba(255, 228, 233, 0.5)'},
                    {src: persona3, alt: '', backgroundColor: 'rgba(227, 240, 252, 0.5)'},
                ]}/>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Generating Possible Solutions</h4>
                    <ol className={styles.list}>
                        <li>Develop a library of diverse and comprehensive visualisations, including bar charts, line
                            charts, scatter plots, heatmaps, and geographic maps.
                        </li>
                        <li>Implement consistent design elements and visual cues to ensure visualisations are easily
                            interpretable and comparable.
                        </li>
                        <li>Optimise the library's performance to handle large datasets efficiently and provide
                            real-time rendering.
                        </li>
                        <li>Simplify the configuration process by offering intuitive controls and providing smart
                            defaults, while still allowing advanced customisation options.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Setting Design Principles</h4>
                    <p>
                        Setting design principles were the foundation of this project. These principles form the guiding
                        philosophy that ensures our data visualisations effectively communicate complex information, and
                        ultimately enhance data comprehension for our users.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <Carousel backgroundColor="#F5FCFC" items={[
                    {src: principles1, alt: ''},
                    {src: principles2, alt: ''},
                ]}/>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Choosing the right chart</h4>
                    <p>
                        Selecting the right chart type is paramount to our approach to data visualisation. We recognise
                        that humans comprehend visual information better than text, and our goal is to simplify data
                        interpretation. By offering a diverse range of chart options tailored to different scenarios, we
                        are enabled to present data effectively and intuitively to our users.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <Carousel backgroundColor="#F5FCFC" items={[
                    {src: types1, alt: ''},
                    {src: types2, alt: ''},
                ]}/>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Color, Layout & Styling</h4>
                    <p>
                        Colours, layout and styling play a crucial role in data visualisation, their significance is due
                        their ability to:
                    </p>
                    <ol className={styles.list}>
                        <li>Convey information: colours simplify complex data and make it memorable.</li>
                        <li>Highlight patterns: thoughtful layout design guides viewers to discern patterns
                            effortlessly, ensuring critical insights aren't missed.
                        </li>
                        <li>Differentiate data points: Styling choices like fonts and shapes help users distinguish data
                            categories, making information interpretation more intuitive.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <Carousel backgroundColor="#F5FCFC" items={[
                    {src: colours1, alt: ''},
                    {src: colours2, alt: ''},
                    {src: colours3, alt: ''},
                    {src: colours4, alt: ''},
                    {src: colours5, alt: ''},
                ]}/>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>The Solution</h4>
                    <p>
                        Our data visualisation library offers a holistic solution to the challenges faced by data
                        analysts and researchers. It's designed to provide an accurate, helpful, and scalable
                        visualisation tool that empowers users.
                    </p>
                    <ol className={styles.list}>
                        <li>Wide range of visualisations: The library has a comprehensive collection of visualisations,
                            both static and interactive, allowing users to interpret their data accurately.
                        </li>
                        <li>User-friendly interface: We've crafted an intuitive interface that guides users through the
                            visualisation process while offering customisation options.
                        </li>
                        <li>Consistency and performance: Ensuring that design elements are consistent across different
                            visualisations and platforms guarantees accurate interpretation and scalability.
                        </li>
                        <li>Documentation and support: We'll provide extensive documentation and support resources to
                            help the team make the most of the library.
                        </li>
                    </ol>
                </div>
            </section>
            <section className={styles.section}>
                <Carousel backgroundColor="#F5FCFC" items={[
                    {src: solution1, alt: ''},
                    {src: solution2, alt: ''},
                    {src: solution3, alt: ''},
                    {src: solution4, alt: ''},
                ]}/>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Summary</h4>
                    <p>
                        In summary, our data visualisation library addresses the challenges faced by data analysts and
                        researchers, offering a user-friendly tool that adheres to data visualisation principles and
                        design maxims. With its intuitive interface, diverse visualisation options, and emphasis on
                        consistency, performance, and accessibility, it becomes an indispensable resource for data
                        professionals.
                    </p>
                </div>
            </section>
        </ProjectLayout>
    )
}

export const dataVisualisationLibrary: Project = {
    Page: Page,
    title: "Data Visualisation Library",
    subtitle: "Empowering insights through dynamic data visualisations.",
    thumbnail: coverImg,
    cardBackground: '#008079',
}
