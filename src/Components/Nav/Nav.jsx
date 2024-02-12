
import { Link } from "react-router-dom"
import style from "./Nav.module.css"
import { useState } from "react"

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    function toggleMenu() {
        if (isOpen == false) {
            
            setIsOpen(true)
            document.querySelector('aside').setAttribute('class', 'Nav_aside__phuHu')
            document.querySelector('body').classList.remove('overflow-auto')
            document.querySelector('body').classList.add('overflow-hidden')

        } else {
            document.querySelector('body').classList.remove('overflow-hidden')
            document.querySelector('body').classList.add('overflow-auto')

            setIsOpen(false)
            document.querySelector('aside').removeAttribute('class')

        }
    }
function goTo(){
    setIsOpen(false)
    document.querySelector('aside').removeAttribute('class')
    document.querySelector('body').classList.remove('overflow-hidden')
    document.querySelector('body').classList.add('overflow-auto')
}
    return <>
        

        <nav className="navbar navbar-expand-lg bg-white  py-1 fixed-top px-5">
            <div className="container">
                <Link to={'/'} className="navbar-brand fs-1 h1">A.</Link>
                <div onClick={toggleMenu}>
                    {isOpen ? <i className={`fa-solid fa-xmark fs-3 ${style.linkStyle}`}></i> : <i className={`fa-solid fa-bars fs-3 ${style.linkStyle}`}></i>}
                </div>
            </div>
            <aside >
                <Link onClick={goTo} className={`nav-link p-4 ${style.linkStyle}`} to='' >HOME</Link>
                <Link onClick={goTo} className={`nav-link p-4 ${style.linkStyle}`} to='about'>ABOUT</Link>
                <Link onClick={goTo} className={`nav-link p-4 ${style.linkStyle}`} to='project'>PROJECTS</Link>
                <Link onClick={goTo} className={`nav-link p-4 ${style.linkStyle}`} to="contact">CONTACT</Link>
            </aside>
        </nav>


</>
}
