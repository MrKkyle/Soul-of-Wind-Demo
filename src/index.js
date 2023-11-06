import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation_Bar from './components/Navigation-bar';
import Background from './components/Background';
import Auto_Slideshow from './components/Auto-slideshow';
import './CSS/index.css';

export default function Main()
{
    return ( 
        <div>
            
            <Navigation_Bar Display = "block"/>
            <Auto_Slideshow Display = "none" />
            <Background />
            
        </div>
    );
}

/* ReactDOM enables us to render this element inside the real DOM*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

