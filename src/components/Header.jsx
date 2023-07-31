import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import '../styles.css/Header.css';


function Header() {

    return(
        <header className="header-container">
            <nav className="icons-container">
                <a href="https://github.com/guivoleckk" target="_blank" rel="noreferrer">
                    <FaGithub className="fa-github"/>
                </a>
                <a href="https://www.linkedin.com/in/guilherme-voleck-3b3287220/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="fa-linkedin"/>
                </a>
                <a href="https://www.youtube.com/channel/UCjgitOA-LJXudrirYCuxPcA" target="_blank" rel="noreferrer">
                    <FaYoutube className="fa-youtube"/>
                </a>
            </nav>
            <div className="container-links">
                <Link to="/" className="box">
                    <nav className="home-header">Home</nav>
                </Link>
                <Link to="/projects" className="box">
                    <nav className="projects-header">Projects</nav>
                </Link>
                <Link to="/cv" className="box">
                    <nav className="cv-header">CV</nav>
                </Link>
            </div>
        </header>
    );
}

export default Header;