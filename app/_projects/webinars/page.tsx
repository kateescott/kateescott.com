import {ProjectInfo} from "@/app/lib/project_info/project_info";
import {ProjectLayout} from "@/app/lib/project/project";
import w1 from './assets/w1.png';
import w2 from './assets/w2.png';
import w3 from './assets/w3.png';
import w4 from './assets/w4.png';
import w5 from './assets/w5.png';
import w6 from './assets/w6.png';
import w7 from './assets/w7.png';
import w8 from './assets/w8.png';
import w9 from './assets/w9.png';
import w10 from './assets/w10.png';
import w11 from './assets/w11.png';
import w12 from './assets/w12.png';
import w13 from './assets/w13.png';
import w14 from './assets/w14.png';


import Image from 'next/image'
import styles from './webinars.module.css';
import classNames from "classnames";
import React from "react";
import {Carousel, TextCarousel} from "@/app/lib/carousel/carousel";

export default function webinars() {
    return (
        <ProjectLayout>
            <section className={styles.section}>
                <ProjectInfo
                    title="Amplifying Vervoe’s Reach"
                    subtitle="Creating marketing materials to advertise Vervoe’s webinars."
                    description={
                        <>
                            <p>Vervoe empowers organisations to make informed hiring decisions based on candidates' actual capabilities rather than traditional resumes. To further solidify their position and expand its influence, Vervoe embarked on a mission to amplify its reach through engaging webinars.</p>
                        </>
                    }
                    organization="Vervoe"
                    role="Marketing Designer"
                    date="2021"
                />
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#FCCE6B'}}>
                    <Image src={w1} className={styles.image} alt="" placeholder="blur"/>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Objective</h4>
                    <p>
                    The primary objective of this project was to increase visibility and engagement for Vervoe's webinars, ultimately expanding the platform's reach and influence within the talent acquisition space. Through strategic graphic design solutions, we aimed to create marketing materials that would effectively communicate the value of Vervoe's webinars, attract the target audience, and encourage attendance and participation.
                    </p>
                </div>
            </section>
           
            <section className={styles.section}>
                <Carousel backgroundColor="#D8E5E3" items={[
                    {src: w2, alt: ''},
                    {src: w3, alt: ''},
                ]}/>
            </section>

            <section className={styles.section}>
                <Carousel backgroundColor="#D8E5E3" items={[
                    {src: w4, alt: ''},
                    {src: w5, alt: ''},
                ]}/>
            </section>
           
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Personality Assessment Webinar</h4>
                    <p>
                    The creative assets developed for Vervoe's personality assessments webinar aimed to captivate and intrigue the audience with thought-provoking questions and visually compelling graphics. These assets successfully garnered attention on social media platforms, driving users to explore further and register for the event. 
                    </p>
                    <p>
                    Additionally, catchy email subject lines drove engagement for the webinar, while a compelling landing page with dynamic visuals and clear messaging facilitated easy registration and participation.
                    </p>
                </div>
            </section>

           
            <section className={styles.section}>
                <Carousel backgroundColor="#E3EEF9" items={[
                    {src: w6, alt: ''},
                    {src: w7, alt: ''},
                ]}/>
            </section>

            <section className={styles.section}>
                <Carousel backgroundColor="#E3EEF9" items={[
                    {src: w8, alt: ''},
                    {src: w9, alt: ''},
                ]}/>
            </section>
           
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Building High Performing Sales Teams Webinar</h4>
                    <p>
                    For Vervoe's webinar on building high-performing sales teams, the creative solutions focused on highlighting strategies and secrets to success. Through visually striking graphics and powerful messaging, we communicated the webinar's value proposition across social platforms, enticing users to secure their spot.
                    </p>
                    <p>
                    Catchy subject lines and visually appealing templates in email campaigns sparked immediate interest. The dedicated landing page offered a comprehensive overview of the webinar's content, showcasing success stories and inviting registrations for insights into hiring top-performing sales professionals.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#0C58B6'}}>
                    <Image src={w10} className={styles.image} alt="" placeholder="blur"/>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Outcome</h4>
                    <p>
                    By leveraging strategic graphic design, Vervoe successfully achieved its objectives and expanded its influence through engaging webinars. The marketing materials crafted for the promotion of these webinars were visually appealing and effectively conveyed the benefits of Vervoe's platform. </p>
                    <p>As a result, registration and attendance rates for the webinars exceeded expectations, with a diverse audience of HR professionals, hiring managers, and business leaders present. The heightened brand visibility and positive feedback received from attendees further solidified Vervoe's position as a leader in transforming hiring practices.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Conclusion</h4>
                    <p>
                    Through innovative graphic design and compelling messaging, Vervoe effectively amplified its reach and solidified its position in the industry. The success of this initiative not only increased brand awareness but also showcased Vervoe's commitment to driving meaningful change in talent acquisition processes. Moving forward, Vervoe can continue to leverage engaging webinars and strategic design to foster thought leadership and drive continued growth in their market presence.
                    </p>
                </div>
            </section>
           

        </ProjectLayout>
    );
}


