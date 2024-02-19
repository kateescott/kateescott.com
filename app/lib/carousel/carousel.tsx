"use client"

import {StaticImageData} from "next/image";
import styles from './carousel.module.css';
import Image from "next/image";
import React, {useEffect, useRef} from "react";
import classNames from "classnames";


export function Carousel({backgroundColor, items}: {
    backgroundColor?: string,
    items: {
        src: StaticImageData,
        alt: string,
        backgroundColor?: string,
        caption?: string,
        linkSrc?: StaticImageData
    }[],
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

    const currentItem = items[scrollPos]

    return (
        <div className={styles.carousel} style={{backgroundColor: currentItem?.backgroundColor ?? backgroundColor}}>
            <div className={styles.items} ref={scrollRef}>
                {items.map((item, i) =>
                    <CarouselItem key={i} src={item.src} alt={item.alt} caption={item.caption} linkSrc={item.linkSrc}/>)}
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

export function TextCarousel({backgroundColor, items}: {
    backgroundColor?: string,
    items: { text: string, cite: string }[],
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

    const currentItem = items[scrollPos]

    return (
        <div className={styles.carousel} style={{backgroundColor}}>
            <div className={styles.items} ref={scrollRef}>
                {items.map((item, i) =>
                    <TextCarouselItem key={i} text={item.text} cite={item.cite}/>)}
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

export function CarouselItem({alt, src, caption, linkSrc}: {
    alt: string,
    src: StaticImageData,
    caption: string | undefined,
    linkSrc: StaticImageData | undefined
}) {
    return (
        <div className={styles.item}>
            <div className={styles.itemImgContainer}>
                <a href={linkSrc?.src ?? src.src} target="_blank">
                    <Image className={styles.image} alt={alt} src={src} placeholder="blur"/>
                </a>
            </div>
            {caption && <div className={styles.caption}>{caption}</div>}
        </div>
    )
}

export function TextCarouselItem({text, cite}: { text: string, cite: string }) {
    return (
        <div className={classNames(styles.item, styles.textItem)}>
            <blockquote>{text}</blockquote>
            <cite>{cite}</cite>
        </div>
    )
}
