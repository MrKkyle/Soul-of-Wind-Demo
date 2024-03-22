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
        let navbar_top = document.querySelectorAll(".nav-top"); let navbar_bottom = document.querySelectorAll(".nav-bottom");
        let prev = document.getElementById("prev"); let next = document.getElementById("next");
        prev.addEventListener("click", () => 
        { 
            slide('prev'); 
            navbar_top[1].style.animation = "none"; navbar_bottom[1].style.animation = "none";
            navbar_top[0].style.animation = "Slide_down ease-in 1s"; navbar_bottom[0].style.animation = "Slide_up ease-in 1s";
        })

        next.addEventListener("click", () => 
        { 
            slide('next'); 
            navbar_top[0].style.animation = "none"; navbar_bottom[0].style.animation = "none";
            navbar_top[1].style.animation = "Slide_down ease-in 1s"; navbar_bottom[1].style.animation = "Slide_up ease-in 1s";
        })

      

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
                        <div className = "nav-bottom"></div>
                        <div className = "redirect-body" />
                        <div className = "redirect-title">PAGE 1</div>
                        <button className = "hidden-links" id = "next">Next</button>

                    </div>
                    <div className="page two">
                        <FallingLeaves />
                        <div className = "nav-top"></div>
                        <div className = "nav-bottom"></div>
                        <div className = "redirect-body"></div>
                        <div className = "redirect-title">PAGE 2</div>
                        <button className = "hidden-links" id = "prev">Previous</button>

                    </div>
                </div>
            </div>

            
        </div>
    );

}

export default Redirect; 

