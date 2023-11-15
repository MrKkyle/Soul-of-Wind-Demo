import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation_Bar from './components/Navigation-bar';
import Background from './components/Background';
import '../css/background.CSS';

export default function Main()
{
    return ( 
        <div>
            
            <Navigation_Bar Display = "block"/>
            
        </div>
    );
}

/* ReactDOM enables us to render this element inside the real DOM*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

