import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { dataProjects } from '../services/dataProjects';
import '../styles.css/Projects.css';

function Projects() {
    const [searchValue, setSearchValue] = useState('');
    const [contentValue, setContent] = useState('');

    const handleSelectChange = ({target}) => {
        const { value } = target;
        setContent(value);
    };

    const filteredSelectProjects = dataProjects.filter((project) => {
        return project.content.includes(contentValue) && project.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    const handleSearchChange = ({target}) => {
        const { value } = target;
        setSearchValue(value);
    };

    const filteredProjects = dataProjects.filter((project) => {
        return project.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (
        <section>
            <Header />
            <form className="input-search">
                <label>
                    <input
                        className="input-name"
                        placeholder="Search for name"
                        value={searchValue}
                        onChange={handleSearchChange}
                    >
                    </input>
                </label>
                <select 
                    className="select-content"
                    onChange={ handleSelectChange }>
                    <option>Select content</option>
                    <option>React</option>
                    <option>Redux</option>
                    <option>API</option>
                    <option>DOM</option>
                    <option>Context API</option>
                </select>
            </form>
            <section className="section-project">
                {   filteredSelectProjects.length > 0 ? filteredSelectProjects.map((projects) => (
                    <div key={ projects.id }>
                        <img 
                            className="project-img"
                            src={ projects.img }
                            alt={ projects.name }
                        />
                        <div className="name-project">{projects.name}</div>
                        <Link to={ projects.deployLink  } target="_blank">
                            <button className="card-link">
                                <span>Deploy</span>
                            </button>
                        </Link>
                        <Link to={ projects.codeLink } target="_blank">
                            <button className="card-link">
                                <span>Code</span>
                            </button>
                        </Link>
                    </div>
                )) :
                    filteredProjects.length > 0 &&
                    filteredProjects.map((e) => (
                        <div key={ e.id }>
                            <img 
                                className="project-img"
                                src={ e.img }
                                alt={ e.name }
                            />
                            <div className="name-project">{e.name}</div>
                            <Link to={ e.deployLink  } target="_blank">
                                <button className="card-link">
                                    <span>Deploy</span>
                                </button>
                            </Link>
                            <Link to={ e.codeLink } target="_blank">
                                <button className="card-link">
                                    <span>Code</span>
                                </button>
                            </Link>
                        </div>
                    ))
                }
            </section>
            <Footer />
        </section>
    );
}

export default Projects;