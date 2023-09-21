import React from "react";
import styles from './project.module.css';

export function Project({children}: {children: React.ReactNode}) {
    return <main className={styles.project}>{children}</main>
}
