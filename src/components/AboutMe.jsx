import React from 'react';
import guilhermePhoto from '../assets/images/guilherme-photo.jpeg';
import '../styles.css/AboutMe.css';

function AboutMe() {

    return(
        <main className="main-about-me">
            <div className="img-container">
                <img 
                    className="hero-photo"
                    src={guilhermePhoto}
                    alt="Foto do Guilherme"
                />
            </div>
            <section className="section-about-me">
                <h1 className="name-about">Guilherme Voleck</h1>
                <p className="about-p">Hello! My name is Guilherme Voleck and Im 23 years old. Im currently in the last semester of Analysis and Systems Development and Im also doing Trybes bootcamp in parallel, where Im taking the Backend module and recently finished the Front-end module. Im looking to improve my skills and knowledge in the technology field, aiming to become a Full Stack developer. Im passionate about programming and always looking to learn new things and face challenges. I hope my portfolio can give you a good idea of my work and skills. Thank you for visiting it!</p>
            </section>
        </main>
    );
}

export default AboutMe;