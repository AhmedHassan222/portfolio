import style from "./Footer.module.css"
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Darkmode } from "../../Contexts/Darkmode";
export default function Footer() {
    let { darkMode } = useContext(Darkmode)
    return <>
        <footer style={darkMode == false ? { background: 'linear-gradient(whitesmoke, white)', color: 'black' } : { backgroundColor: 'black', color: 'white' }} className={`pt-5 ${style.footerStyle} fw-bold `} >
            <div className="container ">
                <div className="row justify-content-center ">
                    <div className="col-sm-12 col-md-6 col-lg-4 py-4 text-center  ">
                        <div>
                            <h3>ADDRESS</h3>
                            <p>17 Gamal Abdel Naser street,</p>
                            <p>Sidi Bishr,</p>
                            <p>Alexandria, Egypt</p>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 py-4 text-center  ">
                        <div>
                            <h3>A.</h3>
                            <div>
                                <Link to={''} className={` ${style.linkStyle} ${darkMode ?"text-white":"text-black"}`}>Home</Link>

                            </div>
                            <div>
                                <Link to={'about'} className={` ${style.linkStyle} ${darkMode ?"text-white":"text-black"}`}>AboutMe</Link>

                            </div>
                            <div>
                                <Link to={'project'} className={` ${style.linkStyle} ${darkMode ?"text-white":"text-black"}`}>projects</Link>

                            </div>
                            <div>
                                <Link to={'contact'} className={` ${style.linkStyle} ${darkMode ?"text-white":"text-black"}`}>contact</Link>

                            </div>

                        </div>
                    </div>


                    <div className="col-sm-12 col-md-6 col-lg-4 py-4 text-center  ">
                        <div>
                            <h3 className="text-center">FOLLOW ME</h3>
                            <div className="d-flex fs-3 mt-4 justify-content-center bg-white w-25 mx-auto text-center">
                                <a target="_blank" className={`${style.github}`} href="https://github.com/ahmedhassan222">
                                    <i className="fa-brands fa-github  me-3"></i>
                                </a>
                                <a target="_blank" className={`${style.linkin}`} href="https://www.linkedin.com/in/ahmed-hassan-27a371245/">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="text-center  p-3  " >

                <p >© 2024 Copyright</p>
            </div>
        </footer>

    </>
}

