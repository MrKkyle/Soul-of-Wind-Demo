// Imports Below 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useEffect} from 'react';

/* Import links below ↓ */
import Home from '../JS/Login';
import Main from '../JS/Home';
import NoPage from '../JS/NoPage';

// Import Style sheet below
import '../CSS/navigation-bar.css'
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
                        <Route index element = {<Home />}></Route>
                        <Route path = "main" element = {<Main />}></Route>
                        <Route path = "*" element = {<NoPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Navigation_Bar;
