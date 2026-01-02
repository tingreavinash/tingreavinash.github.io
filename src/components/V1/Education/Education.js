import React from 'react'

function Education(props) {
  return (
    <div>
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id={props.id}>
            <div className="my-auto">
                <h2 className="mb-5 " data-aos="fade-down">
                    <span className="section-heading">Education</span>
                </h2>
                <div className="resume-item d-flex flex-column flex-md-row" data-aos="fade-right">
                    <div className="resume-content me-auto">
                        <h3 className="mb-0">Bachelor of Engineering</h3>
                        <p>Smt. Kashibai Navale College of Engineering, Pune, MH, India.</p>
                        <p><b>Stream:</b> Computer Science<br/></p>
                    </div>
                    <div className="resume-date text-md-end" data-aos="fade-up">
                        <span className="resume-date-box text-primary">May 2017</span>
                    </div>
                </div>
                <hr/>
                <div className="resume-item d-flex flex-column flex-md-row" data-aos="fade-right">
                    <div className="resume-content me-auto">
                        <h3 className="mb-0">HSC</h3>
                        <p>Yeshwant Mahavidyalaya, Nanded, MH, India.</p>
                    </div>
                    <div className="resume-date text-md-end" data-aos="fade-up">
                        <span className="resume-date-box text-primary">Feb 2013</span>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Education