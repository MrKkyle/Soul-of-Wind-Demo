import React from 'react';
import { useEffect } from "react";
import Background from "./components/Background";
import Fireflies from './components/Fireflies';
import FallingLeaves from './components/FallingLeaves';
import sow_image from '../media/backgrounds/SoulofWind.jpg';
import wsm_image from '../media/backgrounds/Screenshot4.png';

import '../css/main.css';

function Redirect() 
{

    useEffect(() => 
    {
        const mask = document.querySelector('.mask'); let redirect_title = document.querySelector(".redirect-title");
        let sow = document.querySelector(".sow"); let wsm = document.querySelector(".wsm");
        let title_sow = document.querySelector(".title-sow"); let title_wsm = document.querySelector(".title-wsm");

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
        let prev = document.getElementById("prev"); let next = document.getElementById("next");
        prev.addEventListener("click", () => { slide('prev'); })
        next.addEventListener("click", () => { slide('next'); })
      

    }, []);

    return (
        <div className = "redirect">
            <Background display1 = "block" display2 = "block" display3 = "block" display4 = "block" text1 = "here am i"/>
            <div className = "mask" />


            <div className ="container_alpha">
                <div className ="pages">
                    <div className="page one">
                        <Fireflies />
                        <div className = "redirect-title">PAGE 1</div>
                        <div>
                            <button className = "hidden-links" id = "next">Next</button>
                        </div>
                    </div>
                    <div className="page two">
                        <FallingLeaves />
                        <div className = "redirect-title">PAGE 2</div>
                        <div>
                            <button className = "hidden-links" id = "prev">Previous</button>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );

}

export default Redirect; 

