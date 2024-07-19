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
import { useContext, useEffect, useState } from 'react'
import sakan from "../../assets/sakan.png"
import OMN from "../../assets/OMN.png"
import Architect from "../../assets/Landingpage.png"
import { Darkmode } from '../../Contexts/Darkmode'
import { Link } from 'react-router-dom'
import WOW from 'wowjs';
export default function Project() {
    const { darkMode } = useContext(Darkmode)
    const projects = [
        { img: eMarket, link: `https://github.com/AhmedHassan222/Ecommerece-React-App`, demo: `https://AhmedHassan222.github.io/Ecommerece-React-App`, mode: "react" },
        { img: reactMovieAppImage, link: `https://github.com/AhmedHassan222/reactJS-movie-app`, demo: `https://ahmedhassan222.github.io/reactJS-movie-app/`, mode: "react" },
        { img: sakan, link: `https://github.com/AhmedHassan222/Sakan`, demo: `https://ahmedhassan222.github.io/Sakan`, mode: "react" },
        { img: ApAr, link: `https://github.com/AhmedHassan222/AP.AR-Books`, demo: `https://AhmedHassan222.github.io/AP.AR-Books`, mode: "landingPage" },
        { img: AProfile, link: `https://github.com/AhmedHassan222/Portfolio`, demo: `https://ahmedhassan222.github.io/portfolio/`, mode: "react" },
        { img: educavo, link: `https://github.com/AhmedHassan222/educavo`, demo: `https://ahmedhassan222.github.io/Educavo/`, mode: "landingPage" },
        { img: OMN, link: `https://github.com/AhmedHassan222/OMN`, demo: `https://AhmedHassan222.github.io/OMN`, mode: "landingPage" },
        { img: Architect, link: `https://github.com/AhmedHassan222/Architect-Website`, demo: `https://AhmedHassan222.github.io/Architect-Website`, mode: "landingPage" },
        { img: backery, link: `https://github.com/AhmedHassan222/Backery`, demo: `https://AhmedHassan222.github.io/Backery`, mode: "landingPage" },
        { img: fokir, link: `https://github.com/AhmedHassan222/fokir`, demo: `https://AhmedHassan222.github.io/fokir`, mode: "landingPage" },
        { img: simone, link: `https://github.com/AhmedHassan222/simonee`, demo: `https://AhmedHassan222.github.io/simonee`, mode: "landingPage" },
        { img: noxe, link: `https://github.com/AhmedHassan222/noxe/tree/master`, demo: `https://ahmedhassan222.github.io/noxe`, mode: "angular" }
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
                    <title>My Projects - A.</title>                </Helmet>
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
                                <div key={index} className={`col-sm-12 col-md-6 col-lg-6 position-relative wow bounceInUp ${style.box} `} >
                                    <img className={`w-100 ${style.imgStyle}`} src={item.img} alt="" />
                                    <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                                        <Link target='_blank' to={item.link}>
                                            <i className={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                        </Link>
                                        <Link target='_blank' to={item.demo}>
                                            <i className={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                        </Link>
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

