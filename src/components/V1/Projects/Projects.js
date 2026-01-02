import React from 'react'
import "./Projects.css";
import projectData from './ProjectsData.json';
import { GoLinkExternal } from "react-icons/go";

function Projects(props) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return (
        <div>
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id={props.id}>
                <div className="my-auto">
                    <h2 className="mb-5 " data-aos="fade-down">
                        <span className="section-heading">Projects</span>
                    </h2>

                    <div className="row justify-content-center">
                        {projectData.projects.sort((a, b) => {
                            return new Date(b.date) - new Date(a.date)
                        })
                            .map((item, index) => {
                                if (item.isHiddden === true) {
                                    return <div key={index} hidden></div>
                                }
                                return <div key={index} className="col-sm-6"  data-aos="fade-right">
                                    <div className="custom-card-style card mobile-fit-cert"
                                    data-event="project"
                                    data-label={item.name}
                                    >
                                        <div className="card-header bg-light">
                                            <div className="row align-items-center">
                                                <div className="col-8">
                                                    <h4 className="card-title mb-0">{item.name}
                                                        {(item.url !== undefined && item.url !== null) &&
                                                            <a href={item.url} 
                                                            data-event="references"
                                                            data-label={item.url}
                                                            className="badge badge-light " target="_blank" rel="noreferrer">
                                                                <span style={{color: 'black'}}> <GoLinkExternal /> </span>
                                                            </a>
                                                        }
                                                    </h4>
                                                </div>
                                                <div className="col-4" style={{ textAlign: "end" }}>
                                                    <div1 className="resume-date text-md-right">
                                                        <span className="resume-date-box text-primary">{monthNames[new Date(item.date).getMonth()]} {new Date(item.date).getFullYear()}</span>
                                                    </div1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex flex-column">
                                            <div className="resume-content me-auto">
                                                <ul>
                                                    {item.description.map((line, index) => {
                                                        return <li key={index}><div dangerouslySetInnerHTML={{ __html: line }}></div> </li>
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-footer bg-transparent">
                                            <div className="project-tech-stack">
                                                <span className="badge bg-light text-dark">Stack:</span>
                                                {item.skills.map((skill, index) => {
                                                    return <span key={index} className="chip chip-border-primary">{skill}</span>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>;
                            })}
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Projects