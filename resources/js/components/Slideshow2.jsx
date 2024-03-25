import React from 'react';
import {useEffect} from 'react';
import $ from "jquery";
import '../../css/slideshow2.css';


function Slideshow2(props)
{
    useEffect(()=> 
    {
        let $slides, interval, $selectors, $btns, currentIndex, nextIndex;
        let cycle = index => 
        {
            let $currentSlide, $nextSlide, $currentSelector, $nextSelector;
            nextIndex = index !== undefined ? index : nextIndex;
            $currentSlide = $($slides.get(currentIndex));
            $currentSelector = $($selectors.get(currentIndex));
            $nextSlide = $($slides.get(nextIndex));
            $nextSelector = $($selectors.get(nextIndex));
            $currentSlide.removeClass("active").css("z-index", "0");
            $nextSlide.addClass("active").css("z-index", "1");
            $currentSelector.removeClass("current");
            $nextSelector.addClass("current");
            currentIndex = index !== undefined ? nextIndex : currentIndex < $slides.length - 1 ? currentIndex + 1 : 0;
            nextIndex = currentIndex + 1 < $slides.length ? currentIndex + 1 : 0;
        };
        $(() => 
        {
            currentIndex = 0;
            nextIndex = 1;
            $slides = $(".slide");
            $selectors = $(".selector");
            $btns = $(".btn");
            $slides.first().addClass("active");
            $selectors.first().addClass("current");
            interval = window.setInterval(cycle, 6000);
            $selectors.on("click", e => 
            {
                let target = $selectors.index(e.target);
                if (target !== currentIndex) 
                {
                    window.clearInterval(interval);
                    cycle(target);
                    interval = window.setInterval(cycle, 6000);
                }
            });
            $btns.on("click", e => 
            {
                window.clearInterval(interval);
                if ($(e.target).hasClass("prev")) 
                {
                    let target = currentIndex > 0 ? currentIndex - 1 : $slides.length - 1;
                    cycle(target);
                } 
                else if ($(e.target).hasClass("next")) 
                {
                    cycle();
                }
                interval = window.setInterval(cycle, 6000);
            });
        });
    }, []);

    return (
    <>
        <div id="container" style = {{position: props.container_style}}>
            <ul id="slides">
                <li className="slide">
                    <div className="slide-partial slide-left"><img src={props.Image1_left}/></div>
                    <div className="slide-partial slide-right"><img src={props.Image1_right}/></div>
                    <h1 className="title"><span className="title-text">{props.Text1}</span></h1>
                </li>
                    <li className="slide">
                    <div className="slide-partial slide-left"><img src={props.Image2_left}/></div>
                    <div className="slide-partial slide-right"><img src={props.Image2_right}/></div>
                    <h1 className="title"><span className="title-text">{props.Text2}</span></h1>
                </li>
                <li className="slide">
                    <div className="slide-partial slide-left"><img src={props.Image3_left}/></div>
                    <div className="slide-partial slide-right"><img src={props.Image3_right}/></div>
                    <h1 className="title"><span className="title-text">{props.Text3}</span></h1>
                </li>
                <li className="slide">
                    <div className="slide-partial slide-left"><img src={props.Image4_left}/></div>
                    <div className="slide-partial slide-right"><img src={props.Image4_right}/></div>
                    <h1 className="title"><span className="title-text">{props.Text4}</span></h1>
                </li>
                <li className="slide">
                    <div className="slide-partial slide-left"><img src={props.Image5_left}/></div>
                    <div className="slide-partial slide-right"><img src={props.Image5_right}/></div>
                    <h1 className="title"><span className="title-text">{props.Text5}</span></h1>
                </li>
            </ul>
            <ul id="slide-select">
                <li className="selector"></li>
                <li className="selector"></li>
                <li className="selector"></li>
                <li className="selector"></li>
                <li className="selector"></li>
            </ul>
        </div>
    </>
    );
  
};

Slideshow2.defaultProps = 
{ 
    container_style: 'absolute',
    Image1_left: "",
    Image1_right: "",
    Image2_left: "",
    Image2_right: "",
    Image3_left: "",
    Image3_right: "",
    Image4_left: "",
    Image4_right: "",
    Image5_left: "",
    Image5_right: "",
    Text1: "Add text here", 
    Text2: "Add text here", 
    Text3: "Add text here",
    Text4: "Add text here", 
    Text5: "Add text here",

}
export default Slideshow2;