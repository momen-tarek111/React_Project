import React from 'react';
import Slider from 'react-slick';
import { Element } from 'react-scroll';
import SkillProgress from './SkillProgress'
import '../styles/Skills.css'
const settings = {
    dots: false,               // Show dots at the bottom
    infinite: false,           // Infinite loop
    speed: 500,               // Transition speed
    slidesToShow: 3,          // Number of slides to show at once
    slidesToScroll: 1,        // Number of slides to scroll at once
    autoplay: false,           // Autoplay
    autoplaySpeed: 3000,      // Autoplay speed (in ms)
    arrows: true,        // Show arrows for navigation
    responsive: [
    {
        breakpoint: 1024, // Adjust for screens smaller than 1024px
        settings: {
        slidesToShow: 2,  // Show 2 slides
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        }
    },
    {
        breakpoint: 600,  // Adjust for screens smaller than 600px
        settings: {
        slidesToShow: 1,  // Show 1 slide
        slidesToScroll: 1
        }
    },
    
    ]
};
function Skills(){
    return(
        <Element name="Skills">
            <div className="skills_container py-5">
            <div className="container">
                <div className="row">
                    <div className="section-title-box">
                        <h2>Skills</h2>
                        <p>you can see my skills here</p>
                    </div>
                </div>
                <div className='slider_parent'>
                    <Slider {...settings}>
                        <SkillProgress value="95" text="Front End Developer"/>
                        <SkillProgress value="90" text="Back End Developer"/>
                        <SkillProgress value="70" text="Cyber security"/>
                        <SkillProgress value="80" text="Data Science"/>
                    </Slider>
                    
                </div>
                
            </div>
            </div>
        </Element>
    );
};
export default Skills