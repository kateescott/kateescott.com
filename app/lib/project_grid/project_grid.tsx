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

declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number
    }
}

export function ProjectCard({title, subtitle, url, thumbnail, backgroundColor}: {
    title: string,
    subtitle: string,
    url: string,
    thumbnail: StaticImageData | string,
    backgroundColor: `#${string}`
}) {
    return <a href={url} className={styles.gridItem}>
        <div className={styles.thumbnailContainer} style={{
            '--pgitem-background': backgroundColor,
            '--pgitem-background-hover': darken(backgroundColor, 20),
        }}>
            <Image className={styles.thumbnailImg} src={thumbnail} alt="" placeholder="blur"/>
        </div>
        <div className={styles.info}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
        </div>
    </a>
}

function darken(hex: `#${string}`, by: number): `#${string}` {
    const r = Math.max(parseInt(hex.slice(1, 3), 16) - by, 0);
    const g = Math.max(parseInt(hex.slice(3, 5), 16) - by, 0);
    const b = Math.max(parseInt(hex.slice(5, 7), 16) - by, 0);
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
}

function componentToHex(c: number) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
