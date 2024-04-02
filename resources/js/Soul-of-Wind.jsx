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
            <SnowEffect />       
            <Background5 background={image} title1="Instruments Ssed" title2="Videos Available" title3="Artists"
            description1="Instruments used by this artists inclde, and are not limited to:"
            />    
            
            <button id = "return">Return</button>
            
        </>
    );
}

export default SoulOfWind;

/*
            <a href = "https://www.youtube.com/channel/UCUZNK80DemBN3kyxusDLwrA" target = "_blank" className = "youtube"><i className = "icon yt"></i><div className = "txt">Youtube</div></a>
            <a href = "https://open.spotify.com/artist/7r0YQP2my9HQPBOx1Gnn6X" target = "_blank" className = "spotify"><i className = "icon sp"></i><div className = "txt">Spotify</div></a>
            <a href = "https://soundcloud.com/thesoulofwind1" target = "_blank" className = "sound-cloud"><i className = "icon sc"></i><div className = "txt">Sound Cloud</div></a>
*/
