import React from 'react';
import {useEffect} from 'react';
import '../../css/snow-effect.css';

/* Must start with a Caps letter */
function SnowEffect()
{

    useEffect(()=> 
    {
        function randomBetween(min, max, floor) 
        {
            const random = Math.random() * (max - min + 1) + min;
            if (floor) 
            {
                return Math.floor(random);
            }
            return random;
        }

        class Flake 
        {
            constructor(x, y, maxRadius, maxSpeed) 
            {
                this.x = x || 0;
                this.y = y || 0;
                this.maxRadius = maxRadius || 4;
                this.maxSpeed = maxSpeed || 9;
                this.radius = Math.min(randomBetween(1, this.maxRadius), randomBetween(1, this.maxRadius));
                this.seed = Math.random();
                this.amplitude = randomBetween(0, Math.PI);
                this.amplitudeStep = 0.02;
                this.alpha = 1 - this.radius / this.maxRadius / 2;
                this.speed = this.radius / this.maxRadius * this.maxSpeed;
            }
            update() 
            {
                this.x += Math.cos(this.amplitude) / 2 * randomBetween(0, 0.5);
                this.y += this.speed;
                this.amplitude += this.amplitudeStep;
            }
        }
        class Snow 
        {
            constructor(canvas, countFlakes) 
            {
                this.canvas = canvas;
                this.ctx = this.canvas.getContext('2d');
                this.countFlakes = countFlakes || 60;
                this.reset();
                this.scale();
                this.generate();
                this.update();
            }
            generate() 
            {
                for (let i = 0; i < this.countFlakes; i++) 
                {
                    let x = randomBetween(0, this.windowW, true);
                    let y = randomBetween(0, this.windowH, true);
                    let flake = new Flake(x, y);
                    this.flakes.push(flake);
                }
            }
            reset() 
            {
                this.flakes = [];
            }
            resize() 
            {
                this.reset();
                this.scale();
                this.generate();
            }
            scale() 
            {
                this.windowW = window.innerWidth;
                this.windowH = window.innerHeight;
                this.canvas.width = this.windowW;
                this.canvas.height = this.windowH;
            }
            update(timeCurrent) 
            {
                this.ctx.save();
                this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.restore();
                for (let i = 0; i < this.flakes.length; i++) 
                {
                    const flake = this.flakes[i];
                    const rotation = flake.radius * Math.abs(Math.sin(timeCurrent * flake.seed * 0.001));
                    const now = performance.now();
                    if (flake.y >= this.windowH) 
                    {
                        flake.y = -5; // Because of the rotation, otherwise 0.
                    }

                    flake.update();
                    this.ctx.beginPath();
                    this.ctx.ellipse(flake.x, flake.y, flake.radius, rotation, rotation, 0, 2 * Math.PI);
                    this.ctx.fillStyle = '#cfd5e2';
                    this.ctx.globalAlpha = flake.alpha;
                    this.ctx.fill();
                }
            }
        }
        const snow = new Snow(document.querySelector('.snow'), 500);
        window.addEventListener('resize', () => 
        {
        snow.resize();
        });
        let timePrevious = null;
        const intervalUpdate = 1000 / 60; // 60 updates per second.

        const animate = timeCurrent => 
        {
        requestAnimationFrame(animate);
        const intervalElapsed = timeCurrent - timePrevious;
        if (intervalElapsed > intervalUpdate) 
        {
            timePrevious = timeCurrent - intervalElapsed % intervalUpdate;
            snow.update(timePrevious);
        }
        };
        requestAnimationFrame(animate);
    }, []);

    return (
        <>
            <canvas className = "snow"></canvas>
        </>
    );
}

export default SnowEffect;