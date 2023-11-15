import React from 'react';
import {useEffect} from 'react';
import Slideshow2 from './components/Slideshow2';
import SnowEffect from './components/Snow-effect';



/* Must start with a Caps letter */
function Home()
{

    useEffect(()=> 
    {

    }, []);

    return (
        <>
            <SnowEffect />
            <Slideshow2 />
            
        </>
    );
}

export default Home;