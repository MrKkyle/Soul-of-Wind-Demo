import React from 'react';
import { useEffect } from "react";
import Background from "./components/Background";
import Fireflies from './components/Fireflies';
import FallingLeaves from './components/FallingLeaves';

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
            redirect_title[0].style.display = "none";  
            navbar_bottom[1].style.display = "block"; navbar_top[1].style.display = "block";
            setTimeout(() => {redirect_title[1].style.display = "block";}, 1200);
            navbar_top[0].style.animation = "none"; navbar_bottom[0].style.animation = "none";
            navbar_top[1].style.animation = "Slide_down ease-in 1s"; navbar_bottom[1].style.animation = "Slide_up ease-in 1s";
        });
        prev2.addEventListener("click", () => 
        { 
            slide('prev'); 
            //Hide and show certain next/prev when navigating
            prev2.style.display = "none"; next.style.display = "block"; 
            next2.style.display = "block"; prev.style.display = "block"; 

            //configure the slide's fadeIn
            redirect_title[1].style.display = "none"; 
            setTimeout(() => {redirect_title[0].style.display = "block";}, 1200);
            navbar_top[1].style.animation = "none"; navbar_bottom[1].style.animation = "none";
            navbar_top[0].style.animation = "Slide_down ease-in 1s"; navbar_bottom[0].style.animation = "Slide_up ease-in 1s";
        });

    }, []);

    return (
        <div className = "redirect">
            <Background display1 = "block" display2 = "block" display3 = "block" display4 = "block" text1 = "here am i"/>
            <div className = "mask" />


            <div className ="container_alpha">
                <div className ="pages">
                    
                    <div className="page one">
                        <Fireflies />
                        <div className = "nav-top"></div>
                        <div className = "redirect-title">PAGE 1</div>
                        <div className = "nav-bottom"></div>
                        <button className = "next" style={{left: '45%'}} id = "next">❯</button>
                    </div>
                    <div className="page two">
                        <FallingLeaves /> 
                        <div className = "nav-top"></div>
                        <div className = "nav-bottom"></div>
                        <div className = "redirect-title">PAGE 2</div>
                        <button className = "next" style = {{right: '0px', top: '40%', position: 'absolute'}} id = "next2">❯</button>
                        <button className = "prev" style={{display: 'none', position: 'absolute', top: '40%', left: '0'}} id = "prev">❮</button>
                    </div>
                    <div className="page three">
                        <div className = "nav-top"></div>
                        <div className = "nav-bottom"></div>
                        <div className = "redirect-title">PAGE 3</div>
                        <button className = "prev" style={{left: '-45%'}} id = "prev2">❮</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Redirect; 

