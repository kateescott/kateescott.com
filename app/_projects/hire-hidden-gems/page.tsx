import {ProjectInfo} from "@/app/lib/project_info/project_info";
import {ProjectLayout} from "@/app/lib/project/project";
import hireHiddenGemImg1 from './assets/hhg1.png';
import hireHiddenGemImg2 from './assets/hhg2.png';
import hireHiddenGemImg3 from './assets/hhg3.png';
import hireHiddenGemImg4 from './assets/hhg4.png';
import hireHiddenGemImg5 from './assets/hhg5.png';

import Image from 'next/image'
import styles from './hire_hidden_gems.module.css';
import classNames from "classnames";
import React from "react";
import {Carousel, TextCarousel} from "@/app/lib/carousel/carousel";

export default function OntologyMappingProject() {
    return (
        <ProjectLayout>
            <section className={styles.section}>
                <ProjectInfo
                    title="Hire Hidden Gems 💎"
                    subtitle="Helping companies hire on merit, not background."
                    description={
                        <>
                            <p>Beneath all those resumés is a diamond mine of untapped potential. Vervoe is on a mission to help you see the person behind the resumé. With customisable skills-testing to give candidates the chance to show you what they’re really made of.</p>
                        </>
                    }
                    organization="Vervoe"
                    role="Marketing Designer"
                    date="2021"
                />
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#1B4C40'}}>
                    <a href={hireHiddenGemImg5.src}>
                    <Image src={hireHiddenGemImg1} className={styles.image} alt="" placeholder="blur"/>
                    </a>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Overview</h4>
                    <p>
                    Vervoe is an innovative platform revolutionising the recruitment process by leveraging customisable skills tests to help companies identify top talent efficiently. By replacing traditional resumes with practical assessments, Vervoe enables organisations to make data-driven hiring decisions and uncover hidden gems among job applicants.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#EBF2F1'}}>
                    <Image src={hireHiddenGemImg2} className={styles.image} alt="" placeholder="blur"/>
                </div>
            </section>
            
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Objective</h4>
                    <p>
                    The project aimed to showcase the platform&apos;s ability to uncover exceptional talent often overlooked in the traditional hiring process. Through compelling messaging and visuals, the campaign aimed to highlight Vervoe&apos;s unique value proposition and position it as the go-to solution for companies seeking top performers.
                    </p>
                </div>
            </section>
           
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#EBF2F1'}}>
                    <Image src={hireHiddenGemImg3} className={styles.image} alt="" placeholder="blur"/>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Outcome</h4>
                    <p>
                    The campaign exceeded expectations as companies and HR professionals embraced Vervoe&apos;s mission to prioritise merit in hiring. The message, paired with captivating visuals and clear messaging, significantly increased understanding and interest among our target audience.
                    </p>
                    <p>
                    Additionally, the campaign effectively communicated Vervoe&apos;s unique value proposition, driving heightened awareness of its ability to unearth hidden talent through practical skills assessments. This clarity resulted in a substantial uptick in marketing-led inquiries and platform usage, validating the campaign&apos;s success in delivering tangible outcomes.
                    </p>
                </div>
            </section>


            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#EBF2F1'}}>
                    <Image src={hireHiddenGemImg4} className={styles.image} alt="" placeholder="blur"/>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Conclusion</h4>
                    <p>
                    In conclusion, the campaign achieved its objective of positioning Vervoe as a leader in revolutionising the recruitment process. By emphasising merit-based hiring and leveraging compelling visuals, the campaign effectively differentiated Vervoe from traditional methods, driving increased awareness and engagement. The positive response from companies and HR professionals, coupled with the measurable increase in platform adoption, underscores the campaign&apos;s success in driving tangible outcomes.
                    </p>
                    <p>
                    Looking forward, Vervoe is well-positioned to further disrupt the recruitment landscape, empowering companies to make more informed hiring decisions and unlock the full potential of their workforce. With a strong foundation established through this campaign, Vervoe is poised for continued growth and success in reshaping the future of talent acquisition.
                    </p>
                </div>
            </section>
        </ProjectLayout>
    );
}


