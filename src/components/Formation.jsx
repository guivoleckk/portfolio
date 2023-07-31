import React from 'react';
import '../styles.css/Formation.css';
import { GiGraduateCap } from 'react-icons/gi';
import { FaBriefcase } from 'react-icons/fa';

function Formation() {
    return (
        <section className="section-formation">
            <h1 className="title-education">Education</h1>
            <div className="card-education">
                <div className="card-education-date"><span ><GiGraduateCap /> 2021 - 2024</span></div>
                <div className="card-education-info">Analysis and systems development</div>
            </div>
            <div className="card-education">
                <div className="card-education-date"><span><GiGraduateCap /> 2022 - 2023</span></div>
                <div className="card-education-info">Web Full-stack Trybe</div>
            </div>
            <h1 className="title-experience">Experience</h1>
            <div className="card-experience">
                <div className="card-experience-date"><span><FaBriefcase /> 2019 - 2023</span></div>
                <div className="card-experience-info">Freelance photographer</div>
            </div>
        </section>
    );
}
export default Formation;

