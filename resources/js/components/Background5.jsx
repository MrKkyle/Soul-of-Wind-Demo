import React from 'react';
import {useEffect} from 'react';
import '../../css/background5.css';

function Background5(props) 
{

    useEffect(() => 
    {

    }, []);

    return (
        <>
            <div className = "holders">
                <div className = "image-banner" style = {{backgroundImage: `url(${props.background})`}}/>
                <div className = "page-window">
                    <div className = "information-block">
                        <div className = "title-info ">{props.title1}</div>
                        <div className = "text-description">{props.description1}</div>
                        
                    </div>

                    <div className = "information-block">
                        <div className = "title-info ">{props.title2}</div>
                        <div className = "text-description">{props.description2}</div>
                    </div>

                    <div className = "information-block">
                        <div className = "title-info ">{props.title3}</div>
                        <div className = "text-description">{props.description3}</div>
                    </div>
                    
                </div>
            </div>
        </>
    );

}
Background5.defaultProps = {
    background: '',
}
export default Background5; 