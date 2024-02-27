import style from './Projects.module.css'
import reactMovieAppImage from "../../assets/react-movie-app.png"
import noxe from "../../assets/noxe.png"
import backery from "../../assets/Backery.png"
import fokir from "../../assets/Fokir.png"
import simone from "../../assets/simone.png"
import xo from "../../assets/xo.png"
import crud from "../../assets/cruds.png"
import calculator from "../../assets/calculator.png"
import AProfile from "../../assets/A..png"
import { Helmet } from 'react-helmet'
import educavo from '../../assets/educavo.png'
import eMarket from "../../assets/eMarket.png"
import ApAr from "../../assets/Annotation 2023-11-03 221617.png"
import { useEffect, useState } from 'react'
import sakan from "../../assets/sakan.png"
export default function Project() {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const [mode, setMode] = useState('all')
    return <>
        <Helmet>
            <title>My Projects - A.</title>
        </Helmet>
        <div className={`${style.projects}`}>
            <div className="container  pt-5 text-center">
                <div className="position-relative">
                    <h3 className={`${style.bigTitle}`}>PROJECTS</h3>
                    <p className={`position-absolute ${style.positonStyle} ${style.smallTitle}`}>PROJECTS</p>
                </div>
                <ul className="nav justify-content-center mt-5 ">
                    <li className="nav-item">
                        <span onClick={() => { setMode('all') }}  className={`nav-link ${style.tabItem} ${mode == 'all' ? 'text-primary':""}`} >All Projects</span>
                    </li>
                    <li className="nav-item">
                        <span onClick={() => { setMode('react') }} className={`nav-link ${style.tabItem} ${mode == 'react' ? 'text-primary':""}`} >ReactJS</span>
                    </li>
                    <li className="nav-item">
                        <span onClick={() => { setMode('angular') }} className={`nav-link ${style.tabItem} ${mode == 'angular' ? 'text-primary':""}`} >AngularJS</span>
                    </li>
                    <li className="nav-item">
                        <span onClick={() => { setMode("vanilla") }} className={`nav-link ${style.tabItem} ${mode == 'vanilla' ? 'text-primary':""}`} >Vanilla JS</span>
                    </li>
                </ul>
                <div className="row py-5 g-4">
                    {mode == 'all' || mode == 'react' ? <div className={`col-sm-12 col-md-4 col-lg-4 ${style.box} `} >
                        <div className="position-relative">
                            <img className={`w-100 ${style.imgStyle}`} src={sakan} alt="" />
                            <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                                <a target='_blank' href="https://github.com/AhmedHassan222/GraduationProject">
                                    <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                                <a target='_blank' href="https://ahmedhassan222.github.io/GraduationProject/">
                                    <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                            </div>
                        </div>

                    </div> : ""}
                    {mode == 'all' || mode == 'vanilla' ?
                        <div className={`col-sm-12 col-md-4 col-lg-4 ${style.box} `} >
                            <div className="position-relative">
                                <img className={`w-100 ${style.imgStyle}`} src={ApAr} alt="" />
                                <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                                    <a target='_blank' href="https://github.com/AhmedHassan222/AP.AR-Books">
                                        <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                    </a>
                                    <a target='_blank' href="https://ahmedhassan222.github.io/AP.AR-Books/">
                                        <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                    </a>
                                </div>
                            </div>

                        </div> : ""}
                    {mode == 'all' || mode == 'react' ?
                        <div className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box} `} >
                            <img className={`w-100 ${style.imgStyle}`} src={eMarket} alt="" />
                            <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                                <a target='_blank' href="https://github.com/AhmedHassan222/Ecommerece-React-App">
                                    <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                                <a target='_blank' href="https://ahmedhassan222.github.io/Ecommerece-React-App/">
                                    <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                            </div>
                        </div> : ""}
                    {mode == 'all' || mode == 'react' ?
                        <div className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box} `} >
                            <img className={`w-100 ${style.imgStyle}`} src={reactMovieAppImage} alt="" />
                            <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                                <a target='_blank' href="https://github.com/AhmedHassan222/reactJS-movie-app">
                                    <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                                <a target='_blank' href="https://ahmedhassan222.github.io/reactJS-movie-app/">
                                    <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                            </div>
                        </div> : ""}
                    {mode == 'all' || mode == 'vanilla' ?
                        <div className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box}  `} >
                            <img className={`w-100 ${style.imgStyle}`} src={educavo} alt="" />
                            <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                                <a target='_blank' href="https://github.com/AhmedHassan222/Educavo">
                                    <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                                <a target='_blank' href="https://ahmedhassan222.github.io/Educavo/">
                                    <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                            </div>
                        </div> : ""}
                    {mode == 'all' || mode == 'angular' ?
                        <div className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box}  `} >
                            <img className={`w-100 ${style.imgStyle}`} src={noxe} alt="" />
                            <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                                <a target='_blank' href="https://github.com/AhmedHassan222/noxe/tree/master">
                                    <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                                <a target='_blank' href="https://ahmedhassan222.github.io/noxe/">
                                    <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                            </div>
                        </div> : ""}
                    {mode == 'all' || mode == 'vanilla' ?
                        <div className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box}  `} >
                            <img className={`w-100 ${style.imgStyle}`} src={backery} alt="" />
                            <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                                <a target='_blank' href="https://github.com/AhmedHassan222/Backery">
                                    <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                                <a target='_blank' href="https://ahmedhassan222.github.io/Backery/">
                                    <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                            </div>
                        </div> : ""}
                    {mode == 'all' || mode == 'react' ?
                        <div className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box}  `} >
                            <img className={`w-100 ${style.imgStyle}`} src={AProfile} alt="" />
                            <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                                <a target='_blank' href="https://github.com/AhmedHassan222/myProfile/tree/master">
                                    <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                                <a target='_blank' href="https://ahmedhassan222.github.io/myProfile/">
                                    <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                            </div>
                        </div> : ""}
                    {mode == 'all' || mode == 'vanilla' ?
                        <div className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box} `} >
                            <img className={`w-100 ${style.imgStyle}`} src={fokir} alt="" />
                            <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                                <a target='_blank' href="https://github.com/AhmedHassan222/Fokir">
                                    <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                                <a target='_blank' href="https://ahmedhassan222.github.io/fokir/">
                                    <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                            </div>
                        </div> : ""}
                    {mode == 'all' || mode == 'vanilla' ?
                        <div className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box} `} >
                            <img className={`w-100 ${style.imgStyle}`} src={simone} alt="" />
                            <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                                <a target='_blank' href="https://github.com/AhmedHassan222/simonee">
                                    <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                                <a target='_blank' href="https://ahmedhassan222.github.io/simonee/">
                                    <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                            </div>
                        </div> : ""}
                    {mode == 'all' || mode == 'vanilla' ?
                        <div className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box} `} >
                            <img className={`w-100 ${style.imgStyle}`} src={xo} alt="" />
                            <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                                <a target='_blank' href="https://github.com/AhmedHassan222/X-O_Game">
                                    <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                                <a target='_blank' href="https://ahmedhassan222.github.io/X-O_Game/">
                                    <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                            </div>
                        </div> : ""}
                    {mode == 'all' || mode == 'vanilla' ?
                        <div className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box} `} >
                            <img className={`w-100 ${style.imgStyle}`} src={calculator} alt="" />
                            <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                                <a target='_blank' href="https://github.com/AhmedHassan222/Calculator">
                                    <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                                <a target='_blank' href="https://ahmedhassan222.github.io/Calculator/">
                                    <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                            </div>
                        </div> : ""}
                    {mode == 'all' || mode == 'vanilla' ?
                        <div className={`col-sm-12 col-md-4 col-lg-4 position-relative ${style.box}  `} >
                            <img className={`w-100 ${style.imgStyle}`} src={crud} alt="" />
                            <div className={` ${style.positionStyle} position-absolute d-flex justify-content-center align-items-center`}>
                                <a target='_blank' href="https://github.com/AhmedHassan222/CRUD-system">
                                    <i class={`fa-solid fa-code fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                                <a target='_blank' href="https://ahmedhassan222.github.io/CRUD-System/">
                                    <i class={`fa-solid fa-display fs-5 mx-1  ${style.bgStyle} rounded-circle p-3 text-white`}></i>
                                </a>
                            </div>
                        </div> : ""}

                </div>
            </div>
        </div>
    </>
}

