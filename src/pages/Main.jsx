import React from 'react';
import AboutMe from '../components/AboutMe';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Formation from '../components/Formation';
import Footer from '../components/Footer';

function Main() {
    return(
        <main>
            <Header />
            <AboutMe />
            <Skills />
            <Formation />
            <Footer />
        </main>
    );
}

export default Main;
