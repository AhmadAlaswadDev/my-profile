import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Ahmad, and I'm based in Dubai, United Arab Emirates. <br />

                            Experienced Full-Stack Web Developer, I specialize in advanced web development across all stages,
                            with a strong proficiency in a variety of technologies.<br /><br /> 
                            I have a solid background in user interface design, 
                             testing, and debugging processes. My ability to manage independently on projects,
                              coupled with my collaborative skills, makes me a valuable asset to any team. <br /><br /> 
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>Laravel Framework</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>TypeScript</li>
                            <li>VueJS</li>
                            <li>React</li>
                            <li>Mysql</li>
                            <li>MongoDB</li>
                            <li>Bootstrap</li>

                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About