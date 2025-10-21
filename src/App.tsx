import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {ProjectCard} from './typescript/ProjectCard';
import background from './Background.svg';
import {MenuFunc} from './typescript/Menu';
import {HeroSection} from './typescript/HeroSection';
import { AboutSection } from "./typescript/AboutSection";
import { ProjectSection } from "./typescript/ProjectSection";
import {BackgroundStars} from "./typescript/BackgroundStars";
import { SkillsSection } from './typescript/SkillsSection';
import { ExperienceSection } from './typescript/ExperienceSection';
import { ContactSection } from './typescript/ContactSection';
import { Footer } from './typescript/Footer';
import { ProjectWindow } from './typescript/ProjectWindow';

function App() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  
  return (
    <div className="App">
      <div className="blob-wrapper">
        <svg className="blob blob-top-left" viewBox="0 0 270 270" xmlns="http://www.w3.org/2000/svg">
          <path className = "Paper" d="M270 0C265.7 28.8 261.4 57.5 249.2 81C237 104.4 216.8 122.6 202.3 146.9C187.7 171.3 178.8 202 158.7 218.4C138.6 234.9 107.4 237.2 79.1 243.5C50.8 249.7 25.4 259.9 0 270L0 0Z" fill="#8a3c4c"/>
        </svg>

        <svg className="blob blob-bottom-right" viewBox="0 0 270 270" xmlns="http://www.w3.org/2000/svg">
          <path className = "Paper" d="M270 0C265.7 28.8 261.4 57.5 249.2 81C237 104.4 216.8 122.6 202.3 146.9C187.7 171.3 178.8 202 158.7 218.4C138.6 234.9 107.4 237.2 79.1 243.5C50.8 249.7 25.4 259.9 0 270L0 0Z" fill="#8a3c4c"/>
        </svg>
      </div>
      <BackgroundStars/>
      <MenuFunc/>
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <ContactSection/>
        <Footer/>
    </div>
  );
}

export default App;
