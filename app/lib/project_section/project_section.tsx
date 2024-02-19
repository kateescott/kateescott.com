import React from "react";
import styles from './project_section.module.css';

export function ProjectSection({title, children}: { title: React.ReactNode, children: React.ReactNode }) {
    return (
        <div className={styles.projectSection}>
            <h4 className={styles.title}>{title}</h4>
            <div>
                {children}
            </div>
        </div>
    )

}
