import React from 'react';
import { useEffect } from "react";
import Background from "./components/Background";
import image from '../media/backgrounds/Screenshot1.png';

import '../css/main.css';

function Redirect() 
{

    useEffect(() => 
    {
        // Get a reference to the .mask element.
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

        /* Javascript to fade-In the elements when the page loads */

        /* Javascript for the changing of the background when hovering */
        let sow = document.querySelector(".sow");
        let wsm = document.querySelector(".wsm");

        sow.addEventListener('click', () =>
        {
            //let background = document.get
        });

        wsm.addEventListener('click', () =>
        {

        });
        
    }, []);

    return (
        <div className = "redirect">
            <Background image = {image}/>
            <div className = "mask" />
            <div className = "main-containers sow">
                <h2>Soul of Wind below</h2>
            </div>
            <div className = "main-containers wsm">
                <h2>Wind Soul Melodies below</h2>
            </div>
        </div>
    );

}

export default Redirect; 