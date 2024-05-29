import React from 'react';
import './Intro.css';
import profilepic from '../../assets/profile_remove_bg.png';
import { Link } from 'react-scroll';

function Intro(){
    return(
        <section id="intro">
            <div className="intro-content">
                <span className='hey'>Hey There!</span>
                <span className='into-text'>I'm <span className='intro-name'>Venkatesh Alampally</span></span>
                <p className="intro-para">Software Developer</p>
            </div>
            <img src={profilepic} alt="profile-pic" className='bg'/>
        </section>
    )
}

export default Intro;

