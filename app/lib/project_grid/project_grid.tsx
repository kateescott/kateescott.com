import styles from './project_grid.module.css';
import Image, {StaticImageData} from "next/image";

export function ProjectsGrid({children}: { children: React.ReactNode }) {
    return (
        <div className={styles.projectsGrid}>
            {children}
        </div>
    )
}


export function ProjectCard({title, url, thumbnailSrc}: {
    title: string,
    url: string,
    thumbnailSrc: StaticImageData,
}) {
    return <a href={url} className={styles.card}>
        <div className={styles.cardThumbnailContainer}>
            {/*<img src={thumbnailSrc} alt="" />*/}
            <Image className={styles.cardThumbnail}  src={thumbnailSrc} alt=""/>
        </div>
        <div className={styles.cardTitle}>
            <span>{title}</span>
        </div>
    </a>
}
