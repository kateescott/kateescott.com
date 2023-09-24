import styles from './project_grid.module.css';
import Image, {StaticImageData} from "next/image";
import {CSSProperties} from "react";

export function ProjectsGrid({children}: { children: React.ReactNode }) {
    return (
        <div className={styles.projectsGrid}>
            {children}
        </div>
    )
}


export function ProjectCard({title, url, thumbnail, cardStyle}: {
    title: string,
    url: string,
    thumbnail: StaticImageData | string,
    cardStyle: CSSProperties | undefined
}) {
    return <a href={url} className={styles.card}>
        <div className={styles.cardThumbnailContainer} style={cardStyle}>
            {/*<img src={thumbnailSrc} alt="" />*/}
            <Image className={styles.cardThumbnail} src={thumbnail} alt=""/>
        </div>
        <div className={styles.cardTitle}>
            <span>{title}</span>
        </div>
    </a>
}
