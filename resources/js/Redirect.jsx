import React from 'react';
import { useEffect } from "react";
import Background from "./components/Background";
import FallingLeaves from './components/FallingLeaves';
import SnowEffect from './components/Snow-effect';
import Slideshow2 from './components/Slideshow2';

import image1 from '../media/Slideshow/image_part_011.png'; import image2 from '../media/Slideshow/image_part_012.png';
import image3 from '../media/Slideshow/image_part_021.png'; import image4 from '../media/Slideshow/image_part_022.png';
import image5 from '../media/Slideshow/image_part_031.png'; import image6 from '../media/Slideshow/image_part_032.png';
import image7 from '../media/Slideshow/image_part_081.png'; import image8 from '../media/Slideshow/image_part_082.png';
import image9 from '../media/Slideshow/image_part_051.png'; import image10 from '../media/Slideshow/image_part_052.png';

import '../css/main.css';

function Redirect() 
{

    useEffect(() => 
    {
        /*
        const mask = document.querySelector('.mask');

        // Add an event to catch mouse movements.
        document.addEventListener('pointermove', (pos) => 
        {
            // Calculate mouse position in percentages.
            let x = parseInt( pos.clientX / window.innerWidth * 100 );
            let y = parseInt( pos.clientY / window.innerHeight * 100 );
        
            // Update the custom property values on the body.
            mask.style.setProperty('--mouse-x', x + '%');
            mask.style.setProperty('--mouse-y', y + '%'); 
        });
        */

        //Scripts for the redirect onclicks
        let sow = document.querySelector(".sow");
        let wsm = document.querySelector(".wsm");

        sow.addEventListener("click", () => { window.location.href = "/soul-of-wind" });
        wsm.addEventListener("click", () => { window.location.href = "/winds-soul-melody" });

        //Scripts for the Slide change effect 
        let pages = document.querySelectorAll(".page");
        const translateAmount = 100; 
        let translate = 0;
        function slide(direction)
        {
            direction === "next" ? translate -= translateAmount : translate += translateAmount;
            pages.forEach
            (
                pages => (pages.style.transform = `translateX(${translate}%)`)
            );
        }

        /* Onclicks for the pages buttons */
        let redirect_title = document.querySelectorAll(".redirect-title");
        setTimeout(() => {redirect_title[0].style.display = "block"; }, 1500);
        
        let navbar_top = document.querySelectorAll(".nav-top"); let navbar_bottom = document.querySelectorAll(".nav-bottom");
        let prev = document.getElementById("prev"); let next = document.getElementById("next");
        let prev2 = document.getElementById("prev2"); let next2 = document.getElementById("next2");

        //Configure the navbars initially
        navbar_bottom[1].style.animation = "none"; navbar_top[1].style.animation = "none";
        navbar_bottom[1].style.display = "none"; navbar_top[1].style.display = "none";
        navbar_bottom[2].style.animation = "none"; navbar_top[2].style.animation = "none";
        navbar_bottom[2].style.display = "none"; navbar_top[2].style.display = "none";

        //Page 1
        prev.addEventListener("click", () => 
        { 
            slide('prev'); 
            //Hide and show certain next/prev when navigating
            prev.style.display = "none"; next2.style.display = "none"; 
            next.style.display = "block"; prev2.style.display = "block";

            //configure the slide's fadeIn
            redirect_title[1].style.display = "none"; 
            setTimeout(() => {redirect_title[0].style.display = "block";}, 1200);
            navbar_top[1].style.animation = "none"; navbar_bottom[1].style.animation = "none";
            navbar_top[0].style.animation = "Slide_down ease-in 1s"; navbar_bottom[0].style.animation = "Slide_up ease-in 1s";
        });

        //Page2
        next.addEventListener("click", () => 
        { 
            slide('next');

            //Hide and show certain next/prev when navigating
            prev.style.display = "block"; next.style.display = "none";
            next2.style.display = "block"; prev2.style.display = "block";

            //configure the slide's fadeIn
            redirect_title[0].style.display = "none";  
            navbar_bottom[1].style.display = "block"; navbar_top[1].style.display = "block";
            setTimeout(() => {redirect_title[1].style.display = "block";}, 1200);
            navbar_top[0].style.animation = "none"; navbar_bottom[0].style.animation = "none";
            navbar_top[1].style.animation = "Slide_down ease-in 1s"; navbar_bottom[1].style.animation = "Slide_up ease-in 1s";
        });
        next2.addEventListener("click", () => 
        { 
            slide('next');
            //Hide and show certain next/prev when navigating
            prev.style.display = "none"; next2.style.display = "none";
            next.style.display = "block"; prev2.style.display = "block";

            //configure the slide's fadeIn
            redirect_title[1].style.display = "none";  
            navbar_bottom[2].style.display = "block"; navbar_top[2].style.display = "block";
            setTimeout(() => {redirect_title[2].style.display = "block";}, 1200);
            navbar_top[1].style.animation = "none"; navbar_bottom[1].style.animation = "none";
            navbar_top[2].style.animation = "Slide_down ease-in 1s"; navbar_bottom[2].style.animation = "Slide_up ease-in 1s";
        });
        prev2.addEventListener("click", () => 
        { 
            slide('prev'); 
            //Hide and show certain next/prev when navigating
            prev2.style.display = "none"; next.style.display = "block"; 
            next2.style.display = "block"; prev.style.display = "block"; 

            //configure the slide's fadeIn
            redirect_title[2].style.display = "none"; 
            setTimeout(() => {redirect_title[1].style.display = "block";}, 1200);
            navbar_top[2].style.animation = "none"; navbar_bottom[2].style.animation = "none";
            navbar_top[1].style.animation = "Slide_down ease-in 1s"; navbar_bottom[1].style.animation = "Slide_up ease-in 1s";
        });

    }, []);

    return (
        <div className = "redirect">
            <div className ="container_alpha">
                <div className ="pages">
                    
                    <div className="page one">
                        <Slideshow2 container_style = "fixed" Image1_left = {image1} Image1_right = {image2} Image2_left = {image3} Image2_right = {image4} Image3_left = {image5} Image3_right = {image6}
                        Image4_left = {image7} Image4_right = {image8} Image5_left = {image9} Image5_right = {image10}
                        Text1 = "Relaxing Piano" Text2 = "Rain Sounds" Text3 = "Cures Anxiety" Text4 = "Peaceful Music" Text5 = "Insomnia Relief"/> 
                        <div className = "nav-top"></div>
                        <div className = "redirect-title">HOMEPAGE</div>
                        <div className = "nav-bottom"></div>
                        <button className = "next" style={{left: '45%'}} id = "next">❯</button>
                    </div>
                    <div className="page two">
                        <FallingLeaves /> 
                        <div className = "nav-top"></div>
                        <div className = "nav-bottom"><button className = "hidden-links wsm" style ={{top: '8px', background: 'linear-gradient(to bottom, #5f1162, #171850)'}}>Go</button></div>
                        <div className = "redirect-title">Winds Soul Melody</div>
                        <button className = "next" style = {{right: '0px', top: '33%', position: 'absolute'}} id = "next2">❯</button>
                        <button className = "prev" style={{display: 'none', position: 'absolute', top: '33%', left: '0'}} id = "prev">❮</button>
                        
                    </div>
                    <div className="page three">
                        <SnowEffect />
                        <div className = "nav-top"></div>
                        <div className = "nav-bottom"><button className = "hidden-links sow" style ={{top: '8px', background: 'linear-gradient(to bottom, #132b29c9, #164458e3)'}}>Go</button></div>
                        <div className = "redirect-title">Soul of Wind</div>
                        <button className = "prev" style={{left: '-45%'}} id = "prev2">❮</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Redirect; 

