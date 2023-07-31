import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Cv from './pages/Cv';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <Main /> } />
                <Route path='/projects' element={ <Projects />} />
                <Route path='/contacts' element={ <Contacts />} />
                <Route path='/cv' element={ <Cv />} />
            </Routes>
        </Router>
    );
}

export default App;
