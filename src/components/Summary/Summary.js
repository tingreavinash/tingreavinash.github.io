import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsMedium, BsGithub, BsStackOverflow } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import "./Summary.css";
import moment from "moment";
import Person from "../Person/Person";

function Summary(props) {
  function calculateTotalExperience() {
    const today = moment();
    const diff = today.diff(moment("2017-10-03"));

    // Calculate years and months separately
    const years = Math.floor(diff / 31536000000); // 31536000000 milliseconds in a year
    const months = Math.floor((diff % 31536000000) / 2628000000); // 2628000000 milliseconds in a month

    // Create the formatted date difference string
    let dateDifference = years + " " + (years === 1 ? "year" : "years");

    if (months > 0) {
      dateDifference +=
        " and " + months + " " + (months === 1 ? "month" : "months");
    }
    return dateDifference;
  }

  return (
    <div>
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id={props.id}
      >
        <div className="w-100">
          <div className="mobile-center-parent">
            <div className="mobile-image" data-event="profile_photo"
                data-label="/assets/images/profile.jpeg" data-aos="fade-up">
              <img
                alt="Avinash Tingre"
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src={process.env.PUBLIC_URL + "/assets/images/profile.jpeg"}
              />
            </div>

            <h1 className="mb-0" data-aos="fade-down">
              Avinash
              <span className="text-primary"> Tingre</span>
            </h1>
            <br />
            <br />
            <ul
              className="lead mb-5"
              style={{ textAlign: "left" }}
              data-aos="fade-right"
            >
              <li><span style={{fontWeight: 'bold'}}>Experienced Software Engineer:</span> With {" "} <mark>{calculateTotalExperience()}</mark> of experience, I specialize in building and improving backend systems that can handle large-scale demands.</li>
              <li><span style={{fontWeight: 'bold'}}>Creative Problem Solver:</span> I love finding new ways to improve systems, making them more efficient, and automating tasks to enhance overall performance.</li>
              <li><span style={{fontWeight: 'bold'}}>Proven Results:</span> Recognized for my contributions with multiple Spot Awards, highlighting my dedication and impact.</li>
              <li><span style={{fontWeight: 'bold'}}>Skilled in Java & Spring:</span> Strong expertise in Java, Spring Boot, and Spring Cloud, focusing on designing solid, reliable systems that meet critical business needs.</li>
              <li><span style={{fontWeight: 'bold'}}>Team-Oriented:</span> Successfully worked with teams to integrate multiple microservices in <mark><a href="https://developer.mastercard.com/product/click-to-pay" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: 'inherit'}}>MasterCard Checkout Solutions (MACS)</a></mark>, helping improve the overall product.</li>
              <li><span style={{fontWeight: 'bold'}}>Efficiency-Focused:</span> Created tools like the Audit Logging Framework and a WireMock Cleanup tool that made the development process faster and more efficient.</li>
              <li><span style={{fontWeight: 'bold'}}>Wide Range of Skills:</span> Comfortable working with various technologies, including ReactJS, AWS, Docker, and Kubernetes, to develop and maintain high-quality applications.</li>
              
            </ul>
            <div className="social-icons" data-aos="fade-right">
              <a
                data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-toggle="tooltip"
                href="https://www.linkedin.com/in/tingreavinash/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                data-event="social_icon"
                data-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-toggle="tooltip"
                href="https://tingreavinash.medium.com/"
                target="_blank"
                rel="noreferrer"
                title="Medium"
                data-event="social_icon"
                data-label="Medium"
              >
                <BsMedium />
              </a>
              <a
                data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-toggle="tooltip"
                href="https://github.com/tingreavinash"
                target="_blank"
                rel="noreferrer"
                title="Github"
                data-event="social_icon"
                data-label="Github"
              >
                <BsGithub />
              </a>
              <a
                data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-toggle="tooltip"
                href="https://stackoverflow.com/u/12715840"
                target="_blank"
                rel="noreferrer"
                title="StackOverflow"
                data-event="social_icon"
                data-label="StackOverflow"
              >
                <BsStackOverflow />
              </a>
            </div>
            <div className="contact-icons" data-aos="fade-right">
              <a
                data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip"
                data-bs-toggle="tooltip"
                href="mailto:tingre.avinash@gmail.com"
                target="_blank"
                rel="noreferrer"
                title="Email"
                data-event="contact_icon"
                data-label="Email"
              >
                <IoMail /> Drop a Mail
              </a>
              {/* <a data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-toggle="tooltip" href="https://t.me/avinash4848" target="_blank" rel="noreferrer" title="Telegram">
                                <FaTelegramPlane /> Say Hello
                            </a> */}
            </div>
          </div>
        </div>
        <Person />
      </section>
    </div>
  );
}

export default Summary;
