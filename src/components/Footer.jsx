import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../styles.css/Footer.css';

function Footer() {
    return(
        <section className="container-footer">
            <div className="contact-info">
                <div><span><FaEnvelope /></span> guivoleckk@hotmail.com</div>
                <div><span><FaPhone /></span> +55 18 99728-3191</div>
                <div><span><FaMapMarkerAlt /></span> Quatá-SP</div>
            </div>
            <div className="social-media">
                <a href="https://github.com/guivoleckk" target="_blank" rel="noreferrer">
                    <FaGithub className="fa-github"/>
                </a>
                <a href="https://www.linkedin.com/in/guilherme-voleck-3b3287220/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="fa-linkedin"/>
                </a>
                <a href="https://www.youtube.com/channel/UCjgitOA-LJXudrirYCuxPcA" target="_blank" rel="noreferrer">
                    <FaYoutube className="fa-youtube"/>
                </a>
            </div>
            <h4 className="assignature">Made By Guilherme</h4>
        </section>
    );
}

export default Footer;
