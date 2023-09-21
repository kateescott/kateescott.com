import profileImg from './profile.jpg';
import Image from 'next/image';

export default function About() {
    return (
        <main className="pageContent">
            <div className="aboutPage__flex">
                <div className="aboutPage__image">
                    <Image src={profileImg} alt="" fill={true} objectFit="contain"/>
                </div>
                <div className="aboutPage__content">
                    <h2 className="aboutPage__heading">Hi, I’m Kate 👋</h2>
                    <p>I have a passion for communicating fun, quirky and innovative solutions to challenges in
                        simple yet memorable ways.</p>
                    <p>In 2018 I graduated from the University of Wollongong with a Bachelor of Creative Arts and
                        a Bachelor of Communication and Media studies majoring in Graphic Design and Marketing
                        Communications and Advertising.</p>
                    <p>I’m a huge advocate for learning and am always looking to expand my creative and technical
                        skills. In in my spare time you can find me learning to code, learning photography, sewing and
                        cross-stitching.
                    </p>
                    <p>
                        You can get in touch by emailing me at <a
                        href="mailto:kate@kateescott.com">kate@kateescott.com</a>
                    </p>
                </div>
            </div>
        </main>
    )
}
