import React from 'react'
import "./Experience.css";
import BootstrapModal from '../BootstrapModal/BootstrapModal';
import experienceData from './ExperienceData.json'

function Experience(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [certificateImage, setCertificateImage] = React.useState(['']);

    return (
        <div>
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id={props.id}>
                <div className="my-auto">
                    <h2 className="mb-5" data-aos="fade-down">
                        <span className="section-heading">Experience</span>
                    </h2>
                    <BootstrapModal
                        show={modalShow}
                        imgSrc={certificateImage}
                        onHide={() => setModalShow(false)}
                    />
                    {experienceData.experiences.map((item, index) => {
                        if (item.isHiddden === true) {
                            return <div key={index} hidden></div>
                        }
                        return <div key={index}>
                            <div className="resume-item d-flex flex-column flex-md-row mb-5" data-aos="fade-right">
                                <div className="resume-content me-auto">
                                    <a href={item.companyUrl}
                                    data-event="company"
                                    data-label={item.companyUrl}
                                    target="_blank" rel="noreferrer">
                                        <img src={process.env.PUBLIC_URL + item.companyLogo} alt="Company Logo" style={{ maxWidth: "8rem", marginBottom: "0.5rem" }} />
                                    </a>
                                    <h3 className="mb-0">{item.jobTitle}</h3>
                                    {item.awards.map((award, index) => {
                                        return <span key={index} className="spot-award" title={award.title} data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-toggle="tooltip"
                                            data-event="award"
                                            data-label={award.title}
                                        onClick={() => {
                                                setModalShow(true);
                                                setCertificateImage([award.img]);
                                            }}>
                                            <img alt="Spot Award" src={process.env.PUBLIC_URL + "/assets/icons/certificate/certificate-(4).svg"} />
                                        </span>
                                    })}


                                    <p>
                                        <ul>
                                            {item.description.map((line, index1) => {
                                                return <li key={index1}><div dangerouslySetInnerHTML={{ __html: line }}></div> </li>
                                            })}
                                        </ul>
                                    </p>
                                </div>
                                <div className="resume-date text-md-end" data-aos="fade-up">
                                    <span className="resume-date-box text-primary">{item.startDate} - {item.endDate}</span>
                                </div>
                            </div>
                            {index !== experienceData.experiences.length - 1 &&
                                <hr />
                            }

                        </div>
                    })}
                </div>
            </section>
        </div>
    )
}

export default Experience