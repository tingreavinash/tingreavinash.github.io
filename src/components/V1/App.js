import './App.css';
import AboutMe from './AboutMe/AboutMe';
import Experience from './Experience/Experience';
import Sidebar from './Sidebar/Sidebar';
import Skills from './Skills/Skills';
import Summary from './Summary/Summary';
import Certificates from './Certificates/Certificates'
import Projects from './Projects/Projects';
import Education from './Education/Education';
import Resources from './Resources/Resources';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl, {
        boundary: 'window'
      });
    });

    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  })

  // Flashing window title
  // let alertShow = false;
  // setInterval(() => {
  //   document.title = alertShow ? "Avinash Tingre": "Digital Resume!";
  //   alertShow = !alertShow;
  // }, 2000);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out-back',
      once: true
    });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);

  }, []);



  return (
    <div>
      {loading &&
        <div className='loader-mask'>
          <div className='loader'>
            <HashLoader color="#36d7b7" />

          </div>
        </div>
      }

      {!loading &&
        <div className="App">
          <Sidebar id="sideNav" />
          <div className="container-fluid p-0">
            <Summary id="summary" />
            <hr className="m-0" />
            <AboutMe id="about-me" />
            <hr className="m-0" />
            <Experience id="experience" />
            <hr className="m-0" />
            <Skills id="skills" />
            <hr className="m-0" />
            <Certificates id="certificates" />
            <hr className="m-0" />
            <Projects id="projects" />
            <hr className="m-0" />
            <Education id="education" />
            <hr className="m-0" />
            <Resources id="resources" />
          </div>
        </div>
      }


    </div>

  );
}

export default App;
