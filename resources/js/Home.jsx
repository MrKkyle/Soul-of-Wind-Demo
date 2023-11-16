import React from 'react';
import {useEffect} from 'react';
import Slideshow2 from './components/Slideshow2';
import SnowEffect from './components/Snow-effect';
import $ from "jquery";

import image1 from '../media/Slideshow/image_part_011.png'; import image2 from '../media/Slideshow/image_part_012.png';
import image3 from '../media/Slideshow/image_part_021.png'; import image4 from '../media/Slideshow/image_part_022.png';
import image5 from '../media/Slideshow/image_part_031.png'; import image6 from '../media/Slideshow/image_part_032.png';
import image7 from '../media/Slideshow/image_part_041.png'; import image8 from '../media/Slideshow/image_part_042.png';
import image9 from '../media/Slideshow/image_part_051.png'; import image10 from '../media/Slideshow/image_part_052.png';
import image11 from '../media/Slideshow/image_part_061.png'; import image12 from '../media/Slideshow/image_part_062.png';
import image13 from '../media/Slideshow/image_part_071.png'; import image14 from '../media/Slideshow/image_part_072.png';
import image15 from '../media/Slideshow/image_part_081.png'; import image16 from '../media/Slideshow/image_part_082.png';
import image17 from '../media/Slideshow/image_part_091.png'; import image18 from '../media/Slideshow/image_part_092.png';



/* Must start with a Caps letter */
function Home()
{

    useEffect(()=> 
    {
        
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

    }, []);

    return (
        <>
            <SnowEffect />
            <Slideshow2 Image1_left = {image1} Image1_right = {image2} Image2_left = {image3} Image2_right = {image4} Image3_left = {image5} Image3_right = {image6}
            Image4_left = {image7} Image4_right = {image8} Image5_left = {image9} Image5_right = {image10} Image6_left = {image11} Image6_right = {image12} 
            Image7_left = {image13} Image7_right = {image14} Image8_left = {image15} Image8_right = {image16} Image9_left = {image17} Image9_right = {image18}
            Text1 = "Relaxing Piano" Text2 = "Rain Sounds" Text3 = "Cures Anxiety" Text4 = "Peaceful Music" Text5 = "Insomnia Relief" Text6 = "Thunder Sounds" 
            Text7 = "Stress Relief" Text8 = "Fantasy Tavern Music" Text9 = "Soul of Wind"/>

            <a href = "https://www.youtube.com/channel/UCUZNK80DemBN3kyxusDLwrA" target = "_blank" className = "youtube"><i className = "icon yt"></i><div className = "txt">Youtube</div></a>
            <a href = "https://open.spotify.com/artist/7r0YQP2my9HQPBOx1Gnn6X" target = "_blank" className = "spotify"><i className = "icon sp"></i><div className = "txt">Spotify</div></a>
            <a href = "https://soundcloud.com/thesoulofwind1" target = "_blank" className = "sound-cloud"><i className = "icon sc"></i><div className = "txt">Sound Cloud</div></a>
            
        </>
    );
}

export default Home;
