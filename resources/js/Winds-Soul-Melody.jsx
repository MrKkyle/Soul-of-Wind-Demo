import React from 'react';
import {useEffect} from 'react';
import Overlay_Navigation from './components/overlay-navigation';
import Background5 from './components/Background5';
import image from '../media/backgrounds/Screenshot4.png';
import FallingLeaves from './components/FallingLeaves';
import $ from "jquery";

function WindsSoulMelody() 
{

    useEffect(() => 
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

        setTimeout(() => 
        {
            let leaf_scene = document.querySelector(".leaf-scene"); let falling_leaves = document.querySelector(".falling-leaves");

            //Setting leafs to blend into background 
            leaf_scene.style.zIndex = ""; falling_leaves.style.animation = "";
        }, 500);
        

        overlay_open.addEventListener("click", () => { open.style.display = "none"; _return.style.display = "none"; });
        overlay_close.addEventListener("click", () =>
        {
            setTimeout(() => { open.style.display = "block"; _return.style.display = "block"; }, 500)
        });

        _return.addEventListener("click", () =>
        {
            window.location.href = "/redirect";
        });
        
    }, []);

    return (
        <>
            <Overlay_Navigation /> 
            <FallingLeaves />   
            <Background5 background={image} title1="Instruments Ssed" title2="Videos Available" title3="Artists"
            description1="Instruments used by this artists inclde, and are not limited to:">
                
            </Background5>
              
            
            <button id = "return">Return</button>
        </>
    );

}

export default WindsSoulMelody; 