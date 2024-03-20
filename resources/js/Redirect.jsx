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
            

            sow.addEventListener('mouseout', () =>
            {
                //title_sow.style.background = "linear-gradient( to bottom, rgba(128, 128, 128, 0.554), rgba(0, 0, 0, 0.261))";
                //title_sow.style.animation = "maximise ease-in 1s";
                //setTimeout(() => { title_sow.style.width = "100%"; title_sow.style.eight = "100%"; title_sow.style.transform = "translate(-50%, -50%)"; }, 1000); 
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
            

            wsm.addEventListener('mouseout', () =>
            {

            });
        });

        wsm.addEventListener('click', () => 
        { 
            let background = document.querySelector(".background"); let hidden_wsm = document.querySelector(".hidden-wsm");
            background.style.backgroundImage = `url(${wsm_image})`; 
            sow.style.animation = "FadeOut ease-out 1s"; wsm.style.animation = "FadeOut ease-out 1s";
            wsm.style.pointerEvents = "none";
            setTimeout(() =>
            {
                sow.style.display = "none"; wsm.style.display = "none";
                background.style.filter = "blur(0.5px)"; hidden_wsm.style.display = "block";
            }, 1000);


            //setTimeout(() => { wsm.style.display = "none"; window.location.href = '/wind-soul-melody'; }, 3000);
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

            <div className = "hidden-wsm">
                <div className = "hidden-description">abc123isdjnsdocusodcbsjcb</div>
                <button className = "hidden-links sound-cloud">sound cloud</button>
                <button className = "hidden-links spotify">spotify</button>
                <button className = "hidden-links youtube">youtube</button>
                <button className = "hidden-redirect">redirect me</button>
            </div>
        </div>
    );

}

export default Redirect; 