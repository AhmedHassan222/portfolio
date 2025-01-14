import style from './Projects.module.css'
import reactMovieAppImage from "../../assets/react-movie-app.png"
import noxe from "../../assets/noxe.png"
import backery from "../../assets/Backery.png"
import fokir from "../../assets/Fokir.png"
import simone from "../../assets/simone.png"
import AProfile from "../../assets/A..png"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import educavo from '../../assets/educavo.png'
import eMarket from "../../assets/eMarket.png"
import ApAr from "../../assets/Annotation 2023-11-03 221617.png"
import angualarEcommerece from "../../assets/angular-ecommerece.png"
import { useContext, useEffect, useState } from 'react'
import sakan from "../../assets/sakan.png"
import OMN from "../../assets/OMN.png"
import Architect from "../../assets/Landingpage.png"
import { Darkmode } from '../../Contexts/Darkmode'
import { Link } from 'react-router-dom'
import educationalPlatform from "../../assets/eductaional platform.png"
import WOW from 'wowjs';
export default function Project() {
    const { darkMode } = useContext(Darkmode)
    const projects = [
        { tools: ["Angular", "TypeScript", "Bootstrap", "CSS", "Git & GitHub", "more"], title: `Ecommerece web application.`, img: angualarEcommerece, link: `https://github.com/AhmedHassan222/Angular_Ecommerece`, demo: `https://angular-ecommerece.vercel.app/`, mode: 'angular' },
        { tools: ["React", "JavaScript", "Bootstrap", "CSS", "Git & GitHub", "more"], title: `Educational Platform application with admin, teacher dashboards and student interface.`, img: educationalPlatform, link: `https://github.com/AhmedHassan222/Educational_Platform`, demo: `https://ahmedhassan222.github.io/Educational_Platform/`, mode: 'react' },
        { tools: ["React", "JavaScript", "Bootstrap", "CSS", "Git & GitHub", "more"], title: "Ecommerece web application.", img: eMarket, link: `https://github.com/AhmedHassan222/Ecommerece-React-App`, demo: `https://AhmedHassan222.github.io/Ecommerece-React-App`, mode: "react" },
        { tools: ["React", "JavaScript", "Bootstrap", "CSS", "Git & GitHub", "more"], title: "Movies website.", img: reactMovieAppImage, link: `https://github.com/AhmedHassan222/reactJS-movie-app`, demo: `https://ahmedhassan222.github.io/reactJS-movie-app/`, mode: "react" },
        { tools: ["React", "JavaScript", "Bootstrap", "CSS", "Git & GitHub", "more"], title: "Real Estate web application With user and admin roles.", img: sakan, link: `https://github.com/AhmedHassan222/Sakan`, demo: `https://ahmedhassan222.github.io/Sakan`, mode: "react" },
        { tools: ["React", "JavaScript", "Bootstrap", "CSS", "Git & GitHub", "more"], title: "Freelance Project.", img: ApAr, link: `https://github.com/AhmedHassan222/AP.AR-Books`, demo: `https://AhmedHassan222.github.io/AP.AR-Books`, mode: "landingPage" },
        { tools: ["React", "JavaScript", "Bootstrap", "CSS", "Git & GitHub", "more"], title: "My Portfolio.", img: AProfile, link: `https://github.com/AhmedHassan222/Portfolio`, demo: `https://ahmedhassan222.github.io/portfolio/`, mode: "react" },
        { tools: ["React", "JavaScript", "Bootstrap", "CSS", "Git & GitHub", "more"], title: "GYM Landing Page.", img: educavo, link: `https://github.com/AhmedHassan222/educavo`, demo: `https://ahmedhassan222.github.io/Educavo/`, mode: "landingPage" },
        { tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"], title: "Landing Page.", img: OMN, link: `https://github.com/AhmedHassan222/OMN`, demo: `https://AhmedHassan222.github.io/OMN`, mode: "landingPage" },
        { tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"], title: "Landing Page.", img: Architect, link: `https://github.com/AhmedHassan222/Architect-Website`, demo: `https://AhmedHassan222.github.io/Architect-Website`, mode: "landingPage" },
        { tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"], title: "Landing Page.", img: backery, link: `https://github.com/AhmedHassan222/Backery`, demo: `https://AhmedHassan222.github.io/Backery`, mode: "landingPage" },
        { tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"], title: "Landing Page.", img: fokir, link: `https://github.com/AhmedHassan222/fokir`, demo: `https://AhmedHassan222.github.io/fokir`, mode: "landingPage" },
        { tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"], title: "Landing Page.", img: simone, link: `https://github.com/AhmedHassan222/simonee`, demo: `https://AhmedHassan222.github.io/simonee`, mode: "landingPage" },
        { tools: ["Angular", "TypeScript", "HTML", "Bootstrap", "CSS", "Git & GitHub", "more"], title: "Movies website.", img: noxe, link: `https://github.com/AhmedHassan222/noxe/tree/master`, demo: `https://ahmedhassan222.github.io/noxe`, mode: "angular" }
    ]
    const modes = ['all', 'react', 'angular', 'landingPage']
    const [mode, setMode] = useState('all')
    useEffect(() => {
        window.scroll(0, 0);
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return <>
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>My Projects - A.</title>
                </Helmet>
                <div style={darkMode === false ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' }} className={`${style.projects}`}>
                    <div className="container  pt-5 text-center">
                        <div className={`position-relative ${darkMode ? "py-4" : ""}`}>
                            {darkMode === false ? <h3 className={`${style.bigTitle}`}>PROJECTS</h3> : ""}
                            <p className={`position-absolute ${style.positonStyle} ${style.smallTitle}`}>PROJECTS</p>
                        </div>
                        <ul className="nav justify-content-center mt-5 ">
                            {modes.map((item, index) =>
                                <li key={index} className="nav-item">
                                    <span style={darkMode === false ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' }} onClick={() => { setMode(item) }} className={`nav-link ${style.tabItem} ${mode === item ? 'text-primary' : ""}`} >{item}</span>
                                </li>
                            )}
                        </ul>
                        <div className="row py-5 g-4">
                            {projects.map((item, index) => mode === 'all' || mode === item.mode ?
                                <div key={index} className={`col-6 col-md-6 col-lg-4 wow bounceInUp ${style.box} `} >
                                    <img className={`w-100 ${style.imgStyle}`} src={item.img} alt="" />
                                    <div className="d-flex justify-content-center my-3">
                                        <Link target='_blank' to={item.link} className="mx-2 small fs-6 nav-link text-black bg-light p-2" > <i className='fa-solid fa-code'></i> SourceCode</Link>
                                        <Link target='_blank' to={item.demo} className="mx-2 small fs-6 nav-link text-black bg-light p-2"> <i className='fa-solid fa-display'></i> LiveDemo</Link>
                                    </div>

                                </div>
                                : ""
                            )}
                        </div>
                    </div>
                </div>            </div>
        </HelmetProvider>

    </>
}

