import React from 'react';
import {useEffect} from 'react';
import '../../css/background5.css';

function Background5({background, title1, title2, title3, description1, description2, description3}) 
{

    useEffect(() => 
    {

    }, []);

    return (
        <>
            <div className = "holders">
                <div className = "image-banner" style = {{backgroundImage: `url(${background})`}}/>
                <div className = "page-window">
                    <div className = "information-block">
                        <div className = "title-info ">{title1}</div>
                        <div className = "text-description">{description1}</div>
                        
                    </div>

                    <div className = "information-block">
                        <div className = "title-info ">{title2}</div>
                        <div className = "text-description">{description2}</div>
                    </div>

                    <div className = "information-block">
                        <div className = "title-info ">{title3}</div>
                        <div className = "text-description">{description3}</div>
                    </div>
                    
                </div>
            </div>
        </>
    );

}

export default Background5; 