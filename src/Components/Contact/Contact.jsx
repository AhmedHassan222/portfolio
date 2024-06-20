import style from "./Contact.module.css"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect, useState } from "react";

import $ from 'jquery';
import { useContext } from "react";
import { Darkmode } from "../../Contexts/Darkmode";
export default function Contact() {
    let { darkMode } = useContext(Darkmode)
    const [character, setCharacter] = useState(500)
    const [value, setValue] = useState('')
    const [buttonPress, setButtonPress] = useState('')
    function knowLetter(e) {
        if (e.key === 'Control') {
            e.preventDefault()
        } else {
            setButtonPress(e.key)
            console.log(buttonPress)
        }

    }
    useEffect(() => {
        window.scroll(0, 0)

    }, [])
    function review(e) {
        $('textarea').on("cut copy paste", function (e) {
            e.preventDefault();
        });


        if (character >= 1) {
            setCharacter(500 - e.target.value.length)
            setValue(e.target.value.slice(0, 500))
        } else {
            if (buttonPress === 'Backspace') {
                setValue(e.target.value)
                setCharacter(500 - e.target.value.length)

            }
        }


    }

    function noneContext(e) {
        e.preventDefault()

    }


    return <>
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Contact Me - A.</title>
                </Helmet>

                <div style={darkMode === false ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' }}>
                    <div className="container  pt-5 ">
                        <div className={`position-relative text-center ${darkMode ? 'py-5' : ''}`}>
                            {darkMode === false ? <h3 className={`${style.bigTitle}`}>CONTACT</h3> : ""}
                            <p className={`position-absolute ${style.positonStyle} ${style.smallTitle}`}>CONTACT</p>
                        </div>
                    </div>
                    <div className="container">


                        <form className={` mx-auto py-3  `} action="https://formspree.io/f/xoqokzjr" method="POST" >
                            <div className={`${style.bigScreen} my-3`}>
                                <div className={`${style.inputSpecial} w-sm-100 me-4 `}>
                                    <input required type="text" name="Name" placeholder="Full Name*" />
                                </div>
                                <div className={` ${style.inputSpecial} w-sm-100 `}>
                                    <input required type="email" name="Email" placeholder="E-mail*" />
                                </div>
                            </div>

                            <div className="my-3">
                                <input required type="text" name="Subject" placeholder="Subject*" />
                            </div>
                            <div className="my-3">
                                <textarea onChange={review} onContextMenu={noneContext} onKeyDownCapture={knowLetter} rows={10} value={value} placeholder="Message*"></textarea>
                            </div>
                            <p className={`text-end ${style.character} `}>{character} character</p>
                            <div className={`position-relative ${style.linkStyle} my-5`}>
                                <button type="submit" className={`py-3 btn btn-danger  text-white ${style.mainButton}`}>Send Message</button>
                            </div>                </form>
                    </div>
                </div>
            </div>
        </HelmetProvider>






    </>
}