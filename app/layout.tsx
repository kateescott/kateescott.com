import './legacy/reset.css';
import './legacy/site.css';
import './legacy/vendor/icomoon/style.css';

import type {Metadata} from 'next'
import {DM_Sans} from 'next/font/google'
import {Nav} from "@/app/lib/header/nav";
import {Footer} from "@/app/lib/footer/footer";
import {Container} from "@/app/lib/container/container";

const dmSans = DM_Sans({weight: ['400', '500', '700'], subsets: ['latin']})

export const metadata: Metadata = {
    metadataBase: new URL('https://portfolio.kateescott.com'),
    title: 'Kate Scott | UX/UI Designer',
    description: 'Designing innovative solutions that are delightful, inspiring and intuitive ✨',
    verification: {google: "bb2q1CzZpW4fJosteb18nss_Pw2q2hDD3KwRdiXtJpE"},
    viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={dmSans.className}>
        <Nav/>
        <Container>
            {children}
        </Container>
        <Footer/>
        </body>
        </html>
    )
}
