import React, {CSSProperties} from "react";
import styles from './project.module.css';
import Image, {StaticImageData} from "next/image";

export function ProjectLayout({children}: { children: React.ReactNode }) {
    return <main className={styles.project}>{children}</main>
}

export function SimpleProjectLayout({
                                  title,
                                  meta,
                                  cardStyle,
                                  gallery,
                              }: {
    title: string,
    meta: {
        description: string,
        categories: string[],
        client: React.ReactNode,
        date: string,
    },
    cardStyle: CSSProperties,
    gallery: {
        media: StaticImageData[],
    }
}) {
    return (
        <div className="pageContent pageContent--split">
            <div className="pageContent__left">
                <div className="pageContent__leftSticky">
                    <h2>{title}</h2>
                    <div className="pageContent__meta">
                        <div className="pageContent__metaItem pageContent__metaItem--description">
                            <h3>About The Project</h3>
                            <div>{meta.description}</div>
                        </div>
                        <div className="pageContent__metaItem">
                            <h3>Date</h3>
                            <p>{meta.date}</p>
                        </div>
                        <div className="pageContent__metaItem">
                            <h3>Client</h3>
                            <p>{meta.client}</p>
                        </div>
                        <div className="pageContent__metaItem">
                            <h3>Categories</h3>
                            <p>{meta.categories.join(', ')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pageContent__right">
                <div className="pageContent__assetList">
                    {gallery.media.map((media, i) => (
                        <div className="pageContent__asset" style={cardStyle} key={i}>
                            <Image className="pageContent__assetImage" src={media} alt=""/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
