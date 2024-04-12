
import About from './../About/About';
import Project from '../Projects/Projects';
import Contact from './../Contact/Contact';
import { Helmet } from 'react-helmet';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import style from "../Nav/Nav.module.css"

export default function Home() {
    useEffect(() => {
        window.scroll(0, 0)

    }, [])
    const [width, setWidth] = useState(0)

    window.addEventListener('scroll', function () {
        if (width <= 50)
            setWidth((this.window.scrollY / document.querySelector('body').scrollHeight) * 100)
        else
            setWidth((this.window.scrollY / document.querySelector('body').scrollHeight) * 100 + 13)

        console.log(width)
    })
    return <>
        <div className="fixed-bottom">
            <div className={`${style.line} `}>
                <div style={{ width: `${width}%` }} className={`${style.lineLoading}`}></div>
            </div>
        </div>
        <Header />
        <About />
        <Project />
        <Contact />
        <Helmet>
            <title>Home Page - A.</title>
        </Helmet>
    </>
}