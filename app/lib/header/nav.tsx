"use client"

import styles from './nav.module.css';
import classNames from "classnames";
import {Container} from "@/app/lib/container/container";
import Link from "next/link";
import React from "react";
import {usePathname, useRouter} from "next/navigation";

export function Nav() {


    return (
        <Container>
            <nav className={styles.menubar}>
                <div className={styles.menubar__items}>
                    <a href="/" className={classNames(styles.menubar__item, styles.menubar__itemBrand)}>kateescott.</a>
                </div>
                <div className={styles.menubar__items}>
                    <MenuItem href="/">Projects</MenuItem>
                    <MenuItem href="https://www.linkedin.com/in/kateescott/" target="_blank">LinkedIn</MenuItem>
                </div>
            </nav>
        </Container>
    )
}

function isActive(href: string, path: string | undefined) {
    if (!path) {
        return
    }
    return href === '/' ? href === path : path.startsWith(href);
}

function MenuItem({href, children, ...props}: {
    href: string,
    children: React.ReactNode
} & Partial<React.ComponentProps<typeof Link>>) {
    const path = usePathname();

    return (
        <Link href={href} className={classNames(styles.menubar__item, {
            [styles.menubar__itemActive]: isActive(href, path)
        })} {...props}>{children}</Link>
    )
}
