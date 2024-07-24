import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './components/main';
import Projects from './components/Projets';
import CV from './components/pageCV';
import ErrorPage from './components/error';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/cv" element={<CV />} />
                <Route path='/about' element={<AboutMe/>} />
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;