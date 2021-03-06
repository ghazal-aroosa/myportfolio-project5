import React from 'react';
// import { Container } from '@material-ui/core';

import Header from "../components/header/Header"
import Home from "../components/home/Home"
import Skills from "../components/skillsection/Skills"
import Certifications from '../components/certification/Certification';
import Projects from '../components/projects/Project';
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/Contact';

function Main() {
  return (
    <div style={{margin: '0px 40px'}}>
    {/* <Container> */}
        <Header/>    
        <Home/>
        <Skills/>
        <Certifications/>
        <Projects />
        <Contact/>
        <Footer/>
    {/* </Container> */}
    </div>
  );
}

export default Main;