import Typed from 'react-typed';
import style from "./Header.module.css"
import profilePic from "../../assets/profilePic.jfif"
import WOW from 'wowjs';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Darkmode } from '../../Contexts/Darkmode';

export default function Header() {
    let { darkMode } = useContext(Darkmode)
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    return <>



        <header style={darkMode === false ? { backgroundColor: 'whitesmoke', color: 'black' } : { backgroundColor: 'black', color: 'white' }} className={`w-100 d-flex justify-content-center align-items-center  pt-5`}>
            <div className="container">
                <div className={`row ${style.content}`}>
                    <div className={`col-sm-12 col-md-6 col-lg-6 wow bounceInRight ${style.right}`}>
                        <div className='d-flex justify-content-center '>
                            <img src={profilePic} alt="" className={` mx-auto  rounded-circle ${style.imgStyle}  `} />
                        </div>
                    </div>
                    <div className={`col-sm-12  col-md-6 col-lg-6  align-self-center  ${style.left}   `}>
                        <h3 className={`${style.heading3} wow bounceInLeft`}>Hello,</h3>
                        <h1 className={`${style.mainHeading} wow my-3`}>I'm Ahmed Hassan</h1>
                        <h3> <span >|</span>


                            <Typed
                                strings={[
                                    'Front End Developer',
                                    'ReactJS',
                                    'Angular'
                                ]}
                                showCursor={false}
                                typeSpeed={80}
                                backSpeed={50}

                                loop >
                                <span className={`mt-3 wow bounceInLeft`}></span>
                            </Typed>
                        </h3>
                        <Link className={`text-white nav-link wow bounceInLeft ${style.linkStyle}  position-relative my-4`} to={'contact'} >
                            <button className={`py-3 btn btn-danger  wow bounceInLeft text-white  ${style.mainButton}`}> Contact Me</button>

                        </Link>



                    </div>

                </div>
            </div>
        </header>

    </>
}