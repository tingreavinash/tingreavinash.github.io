import React from 'react'
import "./Certificates.css";
import BootstrapModal from '../BootstrapModal/BootstrapModal';
import certificateData from './CertificateData.json';

function Certificates(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [certificateImage, setCertificateImage] = React.useState(['']);
    const [certificateUrl, setCertificateUrl] = React.useState("");

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return (
        <div>
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id={props.id}>
                <div className="w-100">
                    <h2 className="mb-5 " data-aos="fade-down">
                        <span className="section-heading">Certificates</span>
                    </h2>
                    <BootstrapModal
                        show={modalShow}
                        imgSrc={certificateImage}
                        certUrl={certificateUrl}
                        onHide={() => setModalShow(false)}
                    />
                    <div className="row justify-content-center">
                        {certificateData.certificates.sort((a, b) => {
                            return new Date(b.completionDate) - new Date(a.completionDate)
                        })
                            .map((item, index) => {
                                return <div key={index} className="col-sm-3">
                                    <div className="custom-card-style card mobile-fit-cert"
                                    data-event="certificate"
                                    data-label={item.name}
                                    data-aos="fade-right"
                                        onClick={() => {
                                            setModalShow(true);
                                            setCertificateImage(item.imgSrc);
                                            setCertificateUrl(item.url);
                                        }}>
                                        <div className="cert-img-box card-header bg-transparent ">
                                            <img alt={item.logoAltText} className="cert-img cert-img-mobile mobile-fit-docker" src={process.env.PUBLIC_URL + item.logoSrc} />
                                        </div>
                                        <div className="card-body d-flex flex-column ">
                                            <p>{item.name}</p>
                                            <span className="badge bg-dark cert-date">{monthNames[new Date(item.completionDate).getMonth()]} {new Date(item.completionDate).getFullYear()}</span>
                                            <img alt="Certificate Badge" className="cert-icon" src={process.env.PUBLIC_URL + '/assets/icons/certificate/certificate-(4).svg'} />
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

export default Certificates