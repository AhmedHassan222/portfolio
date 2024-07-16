import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import About from './Components/About/About';
import Project from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import DarkmodeProvide from './Contexts/Darkmode';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'project', element: <Project /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <Notfound /> }
      ]
    }
  ])
  return <>
    {loading ? <div className='d-flex w-100 vh-100 d-flex justify-content-center align-items-center '>
      <div className="lds-ellipsis text-danger"><div></div><div></div><div></div><div></div></div>
    </div> : <>
      <DarkmodeProvide>
        <RouterProvider router={routers} />
      </DarkmodeProvide>
    </>}
  </>
}

export default App;
