import React from 'react';
import {useEffect} from 'react';
import image from '../media/backgrounds/Screenshot5.png';
import SnowEffect from './components/Snow-effect';
import Overlay_Navigation from './components/overlay-navigation';
import Background5 from './components/Background5';
import $ from "jquery";




/* Must start with a Caps letter */
function SoulOfWind()
{

    useEffect(()=> 
    {
        /*
        $.ajaxSetup({ xhrFields: { withCredentials: true }, headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
        $.post( "http://localhost:8000/worker",[],[], 'json')
        .done(function( _data) 
        {
            console.log(_data);

        })
        .fail( function(xhr) 
        { 
            alert(xhr.responseText)
        });
        */

        let overlay_open = document.getElementById("open"); let overlay_close = document.getElementById("close");
        let open = document.getElementById("open"); let _return = document.getElementById("return");
        let holder = document.querySelector(".holders");

        overlay_open.addEventListener("click", () => { open.style.display = "none"; _return.style.display = "none"; holder.style.display = "none";});

        overlay_close.addEventListener("click", () =>
        {
            setTimeout(() => { open.style.display = "block"; _return.style.display = "block"; holder.style.display = "block";}, 500)
        });

        _return.addEventListener("click", () =>
        {
            window.location.href = "/redirect";
        });

    }, []);

    return (
        <>
            <Overlay_Navigation />  
            <SnowEffect />       
            <Background5 background={image} title1="Instruments Used" title2="Videos Available" title3="Artists"
            description1="Instruments used by this artists inclde, and are not limited to:"
            />    
            
            <button id = "return">Return</button>
            
        </>
    );
}

export default SoulOfWind;
