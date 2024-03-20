import React from 'react';
import { useEffect } from "react";
import Background from "./components/Background";
import sow_image from '../media/backgrounds/SoulofWind.jpg';
import wsm_image from '../media/backgrounds/WindSoulMelody.jpg';

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


        /* Javascript for the changing of the elements */
        let sow = document.querySelector(".sow");
        let wsm = document.querySelector(".wsm");
        let title_sow = document.querySelector(".title-sow");
        let title_wsm = document.querySelector(".title-wsm");

        sow.addEventListener('mouseover', () =>
        {
            
            /* Change the background */
            sow.style.animation = "blur-in ease-in 0.5s"; title_sow.style.animation = "width-out ease 0.5s";
            setTimeout(() => { sow.style.filter = "blur(0px)"; title_sow.style.width = "100%"; }, 500);

            sow.addEventListener('mouseout', () =>
            {
                sow.style.animation = "blur-out ease-out 0.5s"; title_sow.style.animation = "width-in ease 0.5s";
                setTimeout(() => { sow.style.filter = "blur(3px)"; title_sow.style.width = "fit-content"; }, 500); 
            });
        });

        sow.addEventListener('click', () => 
        { 
            let background = document.querySelector(".background"); 
            background.style.backgroundImage = `url(${sow_image})`; sow.style.pointerEvents = "none";
            wsm.style.animation = "FadeOut ease-out 1s"; sow.style.animation = "slide_left_center ease-in 1s";
            
            setTimeout(() =>
            {
                sow.style.animation = "maximize ease-in 2.3s"; wsm.style.display = "none";
                background.style.filter = "blur(2px)";
            }, 1000);

            setTimeout(() => { sow.style.display = "none"; window.location.href = '/soul-of-wind'; }, 3000);
        });

        wsm.addEventListener('mouseover', () =>
        {
            
            /* Change the background */
            wsm.style.animation = "blur-in ease-in 0.5s"; title_wsm.style.animation = "width-out ease 0.5s";
            setTimeout(() => { wsm.style.filter = "blur(0px)"; title_wsm.style.width = "100%"; }, 500);

            wsm.addEventListener('mouseout', () =>
            {
                wsm.style.animation = "blur-out ease-out 0.5s"; title_wsm.style.animation = "width-in ease 0.5s";
                setTimeout(() => { wsm.style.filter = "blur(3px)"; title_wsm.style.width = "fit-content"; }, 500); 
            });
        });

        wsm.addEventListener('click', () => 
        { 
            let background = document.querySelector(".background"); 
            background.style.backgroundImage = `url(${wsm_image})`; 
            sow.style.animation = "FadeOut ease-out 1s"; wsm.style.animation = "slide_right_center ease-in 1s";
            wsm.style.pointerEvents = "none";
            setTimeout(() =>
            {
                wsm.style.animation = "maximize ease-in 2.3s"; sow.style.display = "none";
                background.style.filter = "blur(1px)";
            }, 1000);

            setTimeout(() => { wsm.style.display = "none"; window.location.href = '/wind-soul-melody'; }, 3000);
        });        

    }, []);

    return (
        <div className = "redirect">
            <Background />
            <div className = "mask" />
            <div className = "main-containers sow">
                <div className = "title-sow">Soul of Wind</div>
            </div>
            <div className = "main-containers wsm">
                <div className = "title-wsm">Winds Soul Melody</div>
            </div>
        </div>
    );

}

export default Redirect; 