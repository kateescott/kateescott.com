import {ProjectInfo} from "@/app/lib/project_info/project_info";
import {ProjectLayout} from "@/app/lib/project/project";
import co1 from './assets/co1.png';
import co2 from './assets/co2.png';
import co3 from './assets/co3.png';

import Image from 'next/image'
import styles from './hot_stuff_chilli_oil.module.css';
import classNames from "classnames";
import React from "react";
import {Carousel, TextCarousel} from "@/app/lib/carousel/carousel";

export default function hotStuffChilliOil() {
    return (
        <ProjectLayout>
            <section className={styles.section}>
                <ProjectInfo
                    title="Hot Stuff Chilli Oil 🌶️"
                    subtitle="Homemade chilli oil branding and label design."
                    description={
                        <>
                            <p>Prepare for a flavour revolution as Keiran unleashes her homemade chilli oil, boasting a bold colour palette, daring typography, and an attention-grabbing label. Witness the fusion of creativity and culinary excellence in the branding and label packaging, ready to set the shelves on fire!</p>
                        </>
                    }
                    organization="Freelance"
                    role="Graphic Designer"
                    date="2022"
                />
            </section>
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#FDE8ED'}}>
                    <Image src={co1} className={styles.image} alt="" placeholder="blur"/>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Overview</h4>
                    <p>
                    “Hey There, Hot Stuff” presents a unique challenge in the realm of graphic design branding and label packaging. With a focus on homemade chilli oil, this project aims to develop a visually striking identity that captures the essence of the product while standing out on the shelves. Emphasising bold colours, daring typography, and innovative design elements, the goal is to create packaging that sizzles with personality and commands attention.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#D92028'}}>
                    <Image src={co2} className={styles.image} alt="" placeholder="blur"/>
                </div>
            </section>
           
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Objective</h4>
                    <p>
                    The primary objective of this case study is to develop a compelling brand identity and label packaging for “Hey There, Hot Stuff” that resonates with consumers and differentiates the product in a competitive market. By leveraging bold colours such as pink and red, along with ‘out there’ typography, we aim to create packaging that not only communicates the product&apos;s fiery flavour but also captures the imagination of our target audience.
                    </p>
                </div>
            </section>
            
            <section className={styles.section}>
                <div className={styles.imageCard} style={{background: '#D92028'}}>
                    <Image src={co3} className={styles.image} alt="" placeholder="blur"/>
                </div>
            </section>
            
            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Outcome</h4>
                    <p>
                    Through iterative design iterations and feedback loops, we refine our concepts to perfection. The final outcome is a series of captivating label designs that embody the spirit of “Hey There, Hot Stuff.” Vibrant colours and bold typography are seamlessly integrated to create packaging that demands attention on the shelves. The playful imagery and daring design elements convey a sense of excitement and adventure, inviting consumers to experience the thrill of homemade chilli oil.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.text}>
                    <h4 className={styles.title}>Conclusion</h4>
                    <p>
                    In conclusion, our case study demonstrates the power of graphic design in shaping consumer perceptions and driving product success. By embracing bold colours, daring typography, and innovative design concepts, we&apos;ve succeeded in crafting packaging that not only communicates the essence of “Hey There, Hot Stuff” but also leaves a lasting impression on consumers. As the product prepares to make its debut on the market, we are confident that our visually striking branding and label packaging will help “Hey There, Hot Stuff” stand out and capture the hearts of spicy food enthusiasts everywhere.
                    </p>
                </div>
            </section>

        </ProjectLayout>
    );
}


