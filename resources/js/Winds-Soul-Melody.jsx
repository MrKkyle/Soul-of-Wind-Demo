import React from 'react';
import {useEffect} from 'react';
import Overlay_Navigation from './components/overlay-navigation';
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
            
            <button id = "return" className = "hidden-links">Return</button>
        </>
    );

}

export default WindsSoulMelody; 