
import { Link } from "react-router-dom"
import style from "./Nav.module.css"
import { useContext, useState } from "react"
import { Darkmode } from "../../Contexts/Darkmode"

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    let { darkMode, setDarkMode } = useContext(Darkmode)
    function toggleMenu() {

        if (isOpen === false) {
            setIsOpen(true)
            document.querySelector('aside').classList.replace('d-none', 'd-block')
            document.querySelector('body').classList.remove('overflow-auto')
            document.querySelector('body').classList.add('overflow-hidden')
        } else {
            document.querySelector('body').classList.remove('overflow-hidden')
            document.querySelector('body').classList.add('overflow-auto')
            setIsOpen(false)
            document.querySelector('aside').classList.replace('d-block', 'd-none')
        }
    }
    function menuClick(state) {
        setDarkMode(state)
        setIsOpen(false)
        document.querySelector('body').classList.remove('overflow-hidden')
        document.querySelector('body').classList.add('overflow-auto')
    }

    function goTo() {
        setIsOpen(false)
        document.querySelector('aside').classList.replace('d-block', 'd-none')
        document.querySelector('body').classList.remove('overflow-hidden')
        document.querySelector('body').classList.add('overflow-auto')
    }

    return <>


        <div className="">
            <nav className={`navbar navbar-expand-lg  ${darkMode === true ? "bg-black text-white" : "bg-white text-black"}  py-1  px-2`}>
                <div className="container">
                    <Link to={'/'} className={`navbar-brand fs-1 h1 ${darkMode === true ? "bg-black text-white" : "bg-white text-black"}`}>A.</Link>
                    <div className={`d-flex  ${style.w10} align-items-center justify-content-around`}>

                        <div className={` fs-6 nav-link ${style.linkStyle} `}>
                            {darkMode ? <i onClick={() => menuClick(false)} className="fa-solid bg-black fa-sun border-white border border-1 rounded-circle p-2"></i> : <i onClick={() => menuClick(true)} className="fa-solid fa-moon border-black bg-white border border-1 rounded-circle p-2"></i>}
                        </div>

                        <div onClick={toggleMenu}>
                            {isOpen ? <i className={`fa-solid fa-xmark fs-2 ${style.linkStyle}`}></i> : <div className={`d-flex  align-items-center ${style.linkStyle}`}>
                                <i className={`fa-solid fa-bars fs-3  `}></i>
                            </div>}
                        </div>

                    </div>
                </div>

                <aside className={`d-none ${darkMode === true ? "bg-black text-white" : "bg-white text-black"}`}>
                    <Link onClick={goTo} className={`nav-link p-4 ${style.linkStyle} ${darkMode === true ? "bg-black text-white" : "bg-white text-black"}`} to='' >HOME</Link>
                    <Link onClick={goTo} className={`nav-link p-4 ${style.linkStyle} ${darkMode === true ? "bg-black text-white" : "bg-white text-black"}`} to='about'>ABOUT</Link>
                    <Link onClick={goTo} className={`nav-link p-4 ${style.linkStyle} ${darkMode === true ? "bg-black text-white" : "bg-white text-black"}`} to='project'>PROJECTS</Link>
                    <Link onClick={goTo} className={`nav-link p-4 ${style.linkStyle} ${darkMode === true ? "bg-black text-white" : "bg-white text-black"}`} to="contact">CONTACT</Link>
                </aside>
            </nav>

        </div>


    </>
}
