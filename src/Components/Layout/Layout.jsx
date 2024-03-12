
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { useContext } from 'react';
import { Darkmode } from '../../Contexts/Darkmode';

export default function Layout() {
    let { darkmode } = useContext(Darkmode)

    return <>
        <Nav />
        <div className="mt-4">
            <Outlet></Outlet>
        </div>
        <Footer />


    </>
}