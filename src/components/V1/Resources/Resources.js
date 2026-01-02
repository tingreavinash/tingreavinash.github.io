import React from 'react'
import { BiLinkExternal } from "react-icons/bi";
import resourceData from './ResourceData.json';

function Resources(props) {
    return (
        <div>
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id={props.id}>
                <div className="my-auto">
                    <h2 className="mb-5 " data-aos="fade-down">
                        <span className="section-heading">Resources</span>
                    </h2>
                    <table className="table table-sm" data-aos="fade-right">
                        <tbody>
                            {resourceData.resources.map((resource, index) => {
                                return <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        {resource.name} {resource.tags?.length > 0 &&
                                            resource.tags.map((tag, index) => {
                                                return <span key={index} className="badge rounded-pill bg-secondary">{tag}</span>
                                            })
                                        }</td>
                                    <td>
                                        <a href={ resource.resourceType === "file" ? process.env.PUBLIC_URL + resource.url : resource.url} target="_blank" rel="noreferrer"
                                        data-event="references"
                                        data-label={resource.url}
                                        >
                                            <BiLinkExternal />
                                        </a>
                                    </td>
                                </tr>
                            })}

                            
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Resources