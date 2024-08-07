import React from 'react';
import { useEffect } from "react";
import '../../css/background.css';

function Background({background})
{
    useEffect(() => 
    {
        /* Removes any background color if there is no text */
        let background = document.getElementById("background");
        let diamonds = document.querySelectorAll(".ul.li");
        for(let i = 0; i < diamonds.length; i++)
        {
            if(diamonds[i].firstChild.firstChild.innerHTML === "")
            {
                diamonds[i].firstChild.firstChild.style.backgroundColor = "transparent";
            }
        }
            
        for(let i = 0; i < diamonds.length; i++)
        {
            let dia = diamonds[i];
            //Child elements to identify empty diamond| takes the image for the background
            let child = dia.firstElementChild.firstElementChild;
            let child_image = dia.firstElementChild.style.backgroundImage;
            diamonds[i].onmouseover = function(event)
            {
                if(dia.onmouseover && child.innerHTML !== "")
                {
                //Background + text changes 
                background.style.backgroundImage = child_image;
                background.style.zIndex = "1";
                dia.style.border = "2px solid rgb(22 21 21)";

                //hide all other elements besides this one
                for(let z = 0; z < diamonds.length; z++)
                {
                    //fadeout other containers besides this one
                    dia.style.animation = "none";
                    dia.style.opacity = "1";
                    diamonds[z].style.animation = "Fadeout ease-in-out 0.7s";
                    diamonds[z].style.opacity = "0";
                }
                }
                dia.onmouseleave = function(event)
                {
                dia.style.borderStyle = "";
                dia.style.border = "2px solid rgb(51, 48, 48)";
                background.style.zIndex = "";

                //show all diamonds
                for(let z = 0; z < diamonds.length; z++)
                {
                    dia.style.animation = "none";
                    diamonds[z].style.display = "block";
                    diamonds[z].style.animation = "FadeIn ease-in 0.7s";
                    diamonds[z].style.opacity = "1";
                }
                }
            }
        }
    }, []);

    return (
        <>
            <div className = "background" id = "background" style = {{backgroundImage: `url(${background})`}}></div>
        </>
    );
}
export default Background;