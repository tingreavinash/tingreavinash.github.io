import { useEffect, useState } from 'react'
import "./Sidebar.css"
import moment from 'moment';
import { Link, animateScroll as scroll } from "react-scroll";
import { BiLinkExternal } from "react-icons/bi";
import DarkModeToggle from "react-dark-mode-toggle";

function Sidebar(props) {

    const [lastUpdatedTime, setLastUpdatedTime] = useState("");
    const resumeData = {
        "name": "Resume",
        "resourceType": "file",
        "url": "/assets/resume/Avinash_Tingre_Resume.pdf"
    };

    const getTheme = () => {
        const theme = localStorage.getItem("theme");
        if (!theme) {
            localStorage.setItem("theme", "light-theme");
            return "light-theme";
        } else {
            return theme;
        }
    };

    const toggleTheme = () => {
        if (theme === 'dark-theme') {
            setTheme('light-theme');
            toggleChecked();
        } else {
            setTheme('dark-theme');
            toggleChecked();
        }
    }
    const toggleChecked = () => {
        if (checked === true) {
            setIsChecked(false);
        } else {
            setIsChecked(true);
        }
    }
    const [theme, setTheme] = useState(getTheme());
    const [checked, setIsChecked] = useState(() => {
        if (getTheme() === 'dark-theme') {
            return true;
        } else {
            return false;
        }
    });


    useEffect(() => {
        document.body.className = theme + ' custom-scrollbar-css';
        const refreshTheme = () => {
            localStorage.setItem("theme", theme);
        };

        refreshTheme();
    }, [theme]);


    useEffect(() => {

        // fetch data
        const dataFetch = async () => {
            const data = await (
                await fetch('https://api.github.com/repos/tingreavinash/tingreavinash.github.io/commits?per_page=1')
            ).json();

            // Add delay for testing
            //await new Promise( res => setTimeout(res, 2000) );

            // set state when the data received
            if (data.length > 0) {
                var time = moment(data[0].commit.committer.date).fromNow();
                setLastUpdatedTime(time);
            }
        };

        dataFetch();
    }, []);

    return (
        <div>
            <nav className="navbar custom-navbar navbar-expand-lg navbar-dark bg-primary fixed-top custom-scrollbar-css" id="sideNav">

                <a type="button" className="navbar-brand js-scroll-trigger" href="#root"
                data-event="profile_photo"
                data-label="/assets/images/profile.jpeg"
                onClick={scroll.scrollToTop()}>
                    <span className="d-block d-lg-none" data-aos="fade-right">Avinash Tingre</span>
                    <span className="d-none d-lg-block" data-aos="fade-down">
                        <img alt="Avinash Tingre" className="img-fluid img-profile rounded-circle mx-auto mb-2" src={process.env.PUBLIC_URL + '/assets/images/profile.jpeg'} />
                    </span>
                </a>
                <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                    <ul className="navbar-nav" data-aos="fade-up">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="summary"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            data-event="nav_section"
                            data-label="Summary">
                            Summary
                        </Link>
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="about-me"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            data-event="nav_section"
                            data-label="About Me">
                            About Me
                        </Link>
                        <Link

                            className="nav-link"
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            data-event="nav_section"
                            data-label="Experience">
                            Experience
                        </Link>
                        <Link

                            className="nav-link"
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            data-event="nav_section"
                            data-label="Skills">
                            Skills
                        </Link>
                        <Link

                            className="nav-link"
                            activeClass="active"
                            to="certificates"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            data-event="nav_section"
                            data-label="Certificates">
                            Certificates
                        </Link>
                        <Link

                            className="nav-link"
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            data-event="nav_section"
                            data-label="Projects">
                            Projects
                        </Link>
                        <Link

                            className="nav-link"
                            activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            data-event="nav_section"
                            data-label="Education">
                            Education
                        </Link>
                        <Link

                            className="nav-link"
                            activeClass="active"
                            to="resources"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            data-event="nav_section"
                            data-label="Resources">
                            Resources
                        </Link>
                        {/* <a className='nav-link'
                        data-event="resume"
                        data-label={resumeData.url}
                        href={resumeData.resourceType === "file" ? process.env.PUBLIC_URL + resumeData.url : resumeData.url} target="_blank" rel="noreferrer">
                            Resume <BiLinkExternal />
                        </a> */}

                        <div style={{ color: "white" }}>
                            <span id="last-update-time" className="badge rounded-pill bg-warning text-dark">
                                Updated {lastUpdatedTime}
                            </span>
                        </div>
                        <div>
                            <DarkModeToggle
                                onChange={(toggleTheme)}
                                checked={checked}
                                size={70}
                                speed={1.3}
                                data-event="toggle_dark_mode"
                                data-label={checked ? `light` : `dark`}
                            />
                        </div>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar