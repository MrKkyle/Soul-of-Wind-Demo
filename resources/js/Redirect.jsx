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

        /* Javascript to fade-In the elements when the page loads */

        /* Javascript for the changing of the elements */
        let sow = document.querySelector(".sow");
        let wsm = document.querySelector(".wsm");

        sow.addEventListener('mouseover', () =>
        {
            /* Change the background */
            let background = document.querySelector(".background"); let title = document.querySelector(".title-sow");
            let hidden_sow = document.querySelector(".hidden-sow");
            mask.style.mask = "radial-gradient( circle at var(--mouse-x) var(--mouse-y), transparent 40px,black 700px)";
            hidden_sow.style.animation = "FadeIn ease-in 0.5s"; background.style.filter = "blur(4px)";
            background.style.animation = "FadeIn ease-in 0.5s"; title.style.animation = "FadeOut ease-out 0.5s";
            background.style.backgroundImage = `url(${sow_image})`; 

            setTimeout(() => { title.style.display = "none"; hidden_sow.style.display = "block"; }, 500);

            sow.addEventListener('mouseout', () =>
            {
                /* Change the background */
                background.style.animation = "FadeOut ease-in 0.5s"; background.style.filter = "blur(0px)";
                background.style.backgroundImage = "none"; hidden_sow.style.animation = "FadeOut ease-out 0.5s";
                title.style.animation = "FadeIn ease-in 0.5s";

                setTimeout(() => { title.style.display = "block"; hidden_sow.style.display = "none"; }, 500);
            });


        });

        sow.addEventListener('click', () =>
        {
            window.location.href = '/soul-of-wind'; 
        });

        wsm.addEventListener('mouseover', () =>
        {
            /* Change the background */
            let background = document.querySelector(".background"); let title = document.querySelector(".title-wsm");
            let hidden_sow = document.querySelector(".hidden-wsm");
            mask.style.mask = "radial-gradient( circle at var(--mouse-x) var(--mouse-y), transparent 40px,black 700px)";
            hidden_sow.style.animation = "FadeIn ease-in 0.5s"; background.style.filter = "blur(4px)";
            background.style.animation = "FadeIn ease-in 0.5s"; title.style.animation = "FadeOut ease-out 0.5s";
            background.style.backgroundImage = `url(${wsm_image})`; 

            setTimeout(() => { title.style.display = "none"; hidden_sow.style.display = "block"; }, 500);

            wsm.addEventListener('mouseout', () =>
            {
                /* Change the background */
                background.style.animation = "FadeOut ease-in 0.5s"; background.style.filter = "blur(0px)";
                background.style.backgroundImage = "none"; hidden_sow.style.animation = "FadeOut ease-out 0.5s";
                title.style.animation = "FadeIn ease-in 0.5s";

                setTimeout(() => { title.style.display = "block"; hidden_sow.style.display = "none"; }, 500);
            });
        });

        wsm.addEventListener('click', () =>
        {
            window.location.href = '/wind-soul-melody'; 
        });        

    }, []);

    return (
        <div className = "redirect">
            <Background />
            <div className = "mask" />
            <div className = "main-containers sow">
                <div className = "title-sow">Soul of Wind</div>
                <div className = "hidden-sow">
                    <div className = "hidden-title">Soul of Wind</div>
                    <div className = "hidden-description">This is the description</div>
                    <button className = "hidden-links" href = "" target = "_blank">Youtube</button>
                </div>
            </div>
            <div className = "main-containers wsm">
                <div className = "title-wsm">Winds Soul Melody</div>
                <div className = "hidden-wsm">
                    <div className = "hidden-title">Winds Soul Meledy</div>
                    <div className = "hidden-description">This is the description</div>
                    <button className = "hidden-links" href = "" target = "_blank">Youtube</button>
                </div>
            </div>
        </div>
    );

}

export default Redirect; 