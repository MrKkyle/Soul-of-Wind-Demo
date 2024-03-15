import React from 'react';
import '../../css/background.css';

/* Must start with a Caps letter */
function Background(props)
{
    return (
        <>
            <div className = "background" style = {{backgroundImage: `url(${props.image})`}} />
        </>
    );
}

Background.defaultProps = 
{
    image: ""
};
export default Background;