
import About from './../About/About';
import Project from '../Projects/Projects';
import Contact from './../Contact/Contact';
import { Helmet } from 'react-helmet';
import Header from '../Header/Header';
import { useEffect } from 'react';
export default function Home() {
    useEffect(() => {
        window.scroll(0, 0)

    }, [])

    return <>
        <Header />
        <About />
        <Project />
        <Contact />
        <Helmet>
            <title>Home Page - A.</title>
        </Helmet>
    </>
}