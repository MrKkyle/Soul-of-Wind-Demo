import React from 'react';
import { useEffect } from "react";
import Background from "./components/Background";

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
    }, []);

    return (
        <>
            <Background />
            <div className="mask"></div>
            <div className = "sow">
                <h2>Soul of Wind below</h2>
            </div>
            <div className = "wsm">
                <h2>Wind Soul Melodies below</h2>
            </div>
        </>
    );

}

export default Redirect; 