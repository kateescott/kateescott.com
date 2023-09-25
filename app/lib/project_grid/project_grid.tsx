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


export function ProjectCard({title, subtitle, url, thumbnail, cardStyle}: {
    title: string,
    subtitle: string,
    url: string,
    thumbnail: StaticImageData | string,
    cardStyle: CSSProperties | undefined
}) {
    return <a href={url} className={styles.gridItem}>
        <div className={styles.thumbnailContainer} style={cardStyle}>
            <Image className={styles.thumbnailImg} src={thumbnail} alt=""/>
        </div>
        <div className={styles.info}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
        </div>
    </a>
}
