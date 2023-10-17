"use client"
import Image from 'next/image'
import styles from './page.module.css'
import "./Page.css";
import {AiFillHtml5} from "react-icons/ai";
import {BiLogoCss3} from "react-icons/bi"
import {SiJavascript} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {FaBootstrap} from "react-icons/fa";
import {BiLogoTypescript} from "react-icons/bi"
import {BsGit ,BsGithub} from "react-icons/bs"
import {FaNodeJs} from "react-icons/fa"
import todo from "./images/Screenshot (14).png"
import Link from 'next/link';
import imageGame from "./images/Screenshot (16).png"
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

export default function Home() {
  return (
    <main>
        <header className="header">
          <p className="headingH2">Haddad's Protfolio</p>
        </header>
        <div className="wholeBody">
          <div className="intro">
          <h1 style={{fontFamily: "arial"}}>I 'm Jafaar Haddad <br/> React Web Developer</h1>
          <p>A passionate guy who loves discovering<br/> and learning new stuff.</p>
          <AiFillHtml5 className="html" />
          <BiLogoCss3 className="css" />
          <SiJavascript className="JS" />
          <FaReact className="React" />
          <FaBootstrap className="bootStrap" />
          <BiLogoTypescript className="typeScript" />
          </div>
          <div className="about">
            <h3 style={{color: "rgb(1, 189, 252)"}}>
              Who Am I ?
            </h3>
            <div className="aboutContainer">
            <p>My name is Jafaar Haddad, lives in Iraq. I'm a passionate junior front-end developer who has strong knowlage in HTML, CSS, JavaScript, React(TypeScript) and Bootstrap. I enjoy writing clean code that makes the website interactive, responsivness and smooth to enhance the user experience. In every project I made, I found that I have huge problem solving skills and creative thinking that made the user satisfies when uses the website. I love to explore new frameworks, learning new skills to enhance my character. I thrive in collaborative enviroments and enjoy working closely with designers and back-end developers to produce beautiful websites.</p>
            </div>
          </div>
          <div className="skills">
            <Skills />
          </div>
          <div className="projects">
            <Projects />
          </div>
          <div className="contact">
            <Contact />
          </div>
        </div>
    </main>
  )
}
