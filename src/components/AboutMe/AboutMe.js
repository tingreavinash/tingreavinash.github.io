import React from 'react'
import "./AboutMe.css"

function AboutMe(props) {
    return (
        <div>
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id={props.id}>
                <div className="w-100">
                    <h2 className="mb-5 " data-aos="fade-down">
                        <span className="section-heading">About Me</span>
                    </h2>
                    <p className="lead text-justify" data-aos="fade-right">
                    I'm an experienced Software Engineer, but there's more to me than just writing code - here's a little about who I am.
                    </p>
                    <p className="lead text-justify" data-aos="fade-right">
                    Innovation has always been at the core of what I do. For me, coding isn't just a job; it's a way to bring ideas to life. I enjoy exploring new technologies and methods, and I see challenges as opportunities to improve and create something new.
                    </p>
                    <p className="lead text-justify" data-aos="fade-right">
                    I'm also active in tech meetups and conferences because I believe in the value of community and learning from others in the field. Let's connect and share ideas, because in the fast-paced tech world, collaboration makes a big difference.
                    </p>
                    <p className="lead text-justify" data-aos="fade-right">
                    While I work with algorithms and frameworks, I bring a well-rounded approach to solving problems, combining technical skills with creative thinking.
                    </p>
                    <div className="summary-skills" data-aos="fade-right">
                        <div className="chip chip-border-primary">Data Structures</div>
                        <div className="chip chip-border-primary">Algorithms</div>
                        <div className="chip chip-border-primary">Design Patterns</div>
                        <div className="chip chip-border-primary">Microservices</div>
                        <div className="chip chip-border-primary">DevOps & Cloud</div>
                        <div className="chip chip-border-primary">Problem Solving</div>
                    </div>
                    <br />
                    <div className="bd-callout" data-aos="fade-right">
                        <p className="lead text-justify">
                            <h3>Learn to fail, because fulfilling your potential must involve some failure!</h3>
                            <em>- From <a href="https://medium.com/@Pathfinder.fyi/what-does-a-director-of-engineering-do-73054ce8eb4b" rel='noreferrer'
                            data-event="references"
                            data-label="Medium article by Priyanka"
                            target='_blank'>an article</a> by Priyanka Shahheydari (What does a Director of Engineering do?)</em>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe