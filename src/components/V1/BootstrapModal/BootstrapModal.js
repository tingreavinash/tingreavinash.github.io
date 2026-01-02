import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BiLinkExternal } from "react-icons/bi";
import Carousel from 'react-bootstrap/Carousel';
import "./BootstrapModal.css"

function BootstrapModal(props) {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        CERTIFICATE
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.imgSrc.length > 1 ? (
                        <Carousel>
                            {props.imgSrc.map((element) => {
                                return <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + element}
                                        alt="First slide"
                                    />
                                    {(props.certUrl !== undefined && props.certUrl !== null) &&
                                        <Carousel.Caption>
                                            <a className="btn btn-sm btn-success verify-btn" href={props.certUrl} id="cert_url_field" target="_blank" rel="noreferrer" type="button">
                                                <span className="hidden-text">Verify</span>
                                                <BiLinkExternal />
                                            </a>
                                        </Carousel.Caption>
                                    }
                                </Carousel.Item>
                            })}
                        </Carousel>


                    ) : (
                        <div>
                            <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + props.imgSrc[0]}
                                alt="First slide"
                            />
                            {(props.certUrl !== undefined && props.certUrl !== null) &&
                                <a className="btn btn-sm btn-success verify-btn" href={props.certUrl} id="cert_url_field" target="_blank" rel="noreferrer" type="button">
                                    <span className="hidden-text">Verify</span>
                                    <BiLinkExternal />
                                </a>
                            }
                        </div>

                    )}



                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-sm btn-dark' onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div >
    )
}

export default BootstrapModal