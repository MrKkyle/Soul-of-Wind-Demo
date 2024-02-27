// Imports Below 
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useEffect} from 'react';

/* Import links below ↓ */
import Login from '../Login';
import WindsSoulMelody from '../Winds-Soul-Melody';
import SoulOfWind from '../Soul-of-Wind';
import Redirect from '../Redirect';
import NoPage from '../NoPage';

// Import Style sheet below
import '../../css/navigation-bar.css';
function Navigation_Bar(props)
{
    useEffect(()=> 
    {

    }, []);

    return (
        <div id = "navigation" style = {{display: props.Display}}>
            <BrowserRouter>
                <Routes>
                    <Route path = "/">
                        <Route index element = {<Login />}></Route>
                        <Route path = "redirect" element = {<Redirect />}></Route>
                        <Route path = "wind-soul-melody" element = {<WindsSoulMelody />}></Route>
                        <Route path = "soul-of-wind" element = {<SoulOfWind />}></Route>
                        <Route path = "*" element = {<NoPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Navigation_Bar;
