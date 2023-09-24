"use client"

import {StaticImageData} from "next/image";
import styles from './carousel.module.css';
import Image from "next/image";
import React, {useEffect, useRef} from "react";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import classNames from "classnames";


export function Carousel({backgroundColor, items}: {
    backgroundColor?: string,
    items: { src: StaticImageData, alt: string }[],
}) {

    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollPos, setScrollPos] = React.useState(0);

    const onPrev = React.useCallback(() => {
        const {width} = scrollRef.current!.getBoundingClientRect();
        scrollRef.current!.scrollBy({left: -width, behavior: 'smooth'})
        setScrollPos(scrollPos - 1);
    }, [scrollPos]);
    const onNext = React.useCallback(() => {
        const {width} = scrollRef.current!.getBoundingClientRect();
        scrollRef.current!.scrollBy({left: width, behavior: 'smooth'})
        setScrollPos(scrollPos + 1);
    }, [scrollPos]);
    const onDotClick = (idx: number) => {
        const {width} = scrollRef.current!.getBoundingClientRect();
        const curr = scrollRef.current!.scrollLeft;
        const expected = idx * width;
        scrollRef.current!.scrollBy({left: expected - curr, behavior: 'smooth'})
        setScrollPos(idx);
    }
    useEffect(() => {
        if (!scrollRef.current) {
            return
        }
        scrollRef.current.addEventListener('scrollend', (e) => {
            const {width} = scrollRef.current!.getBoundingClientRect();
            setScrollPos(scrollRef.current!.scrollLeft / width)
        })
    }, [scrollRef]);


    return (
        <div className={styles.carousel} style={{backgroundColor}}>
            <div className={styles.items} ref={scrollRef}>
                {items.map((item, i) =>
                    <CarouselItem key={i} src={item.src} alt={item.alt}/>)}
            </div>
            <div className={styles.controlsLayer}>
                {scrollPos > 0 && <button onClick={onPrev} className={styles.prev}>&larr;</button>}
                {scrollPos < items.length - 1 && <button onClick={onNext} className={styles.next}>&rarr;</button>}
            </div>
            <div className={styles.status}>
                {items.map((item, i) =>
                    <button onClick={() => onDotClick(i)} key={i} className={classNames(styles.statusDot, {
                        [styles.active]: scrollPos === i,
                    })}><span/></button>
                )}
            </div>
        </div>
    )
}

export function CarouselItem({alt, src}: { alt: string, src: StaticImageData }) {
    return (
        <div className={styles.item}>
            <div className={styles.itemImgContainer}>
                <a href={src.src} target="_blank"><Image fill={true} alt={alt} src={src} objectFit="contain"/></a>
            </div>
        </div>
    )
}

export function Lightbox({src, alt}: { src: string | StaticImport, alt: string }) {
    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'auto';
        }
    })
    return (
        <div className={styles.lightbox} onClick={() => console.log("CLOSe")}>
            <div className={styles.lightboxInner}>
                <Image alt={alt} objectFit="contain" src={src}/>
            </div>
        </div>
    )
}
