import React from 'react'
import "./Skills.css";
import skillsData from './SkillsData.json';

function Skills(props) {
    return (
        <div>
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id={props.id}>
                <div className="w-100">
                    <h2 className="mb-5 " data-aos="fade-down">
                        <span className="section-heading">Skills & Expertise</span>
                    </h2>
                    {/* <div className="subheading mb-3" data-aos="fade-down">Programming Languages &amp; Tools</div> */}
                    <div className="container">
                        <div className='row skill-icons mb-5'>
                            {skillsData.featuredSkills.map((skill, index) => {
                                return <div key={index} className='col-2 align-content-center justify-content-center'>
                                    <img src={process.env.PUBLIC_URL + skill.icon} alt={skill.title} data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" title={skill.title} data-bs-toggle="tooltip" data-aos="fade-right" />
                                </div>
                            })}
                        </div>

                    </div>
                    {/* <div className="subheading mb-3" data-aos="fade-down">Skills & Expertise</div> */}
                    <table className="table" data-aos="fade-right">
                        <tbody>
                            {skillsData.techStack.map((stack, index) => {
                                return <tr key={index}>
                                    <th scope="row">{stack.category}</th>
                                    <td>
                                        {stack.skills.length > 0 &&
                                            stack.skills.map((skill, i1) => {
                                                return <div className="chip chip-border-primary">{skill}</div>;
                                            })
                                        }
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

export default Skills