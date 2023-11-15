import React from 'react';
import '../../css/background.css';

/* Must start with a Caps letter */
function Background(props)
{
    return (
        <>
            <div className = "background" style = {{backgroundImage: `url(${props.image})`, background: props.background}}></div>
        </>
    );
}

Background.defaultProps = 
{
    image: "",
    background: "linear-gradient(to bottom, #202020, #111119)"
};
export default Background;