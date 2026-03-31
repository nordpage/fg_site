import { useState, useEffect } from 'react';
import Break from '../assets/break.svg';
import Navigation from './windfall/Navigation';
import Hero from './windfall/Hero';
import Features from './windfall/Features';
import GameInfo from './windfall/GameInfo';
import Devlog from './windfall/Devlog';
import Contact from './windfall/Contact';

export default function DarkShatteredSite() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    );

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // SVG settings based on screen width
    const isMobile = windowWidth <= 767;
    const svgStyles = isMobile ? {
        position: 'fixed' as const,
        inset: 0,
        transform: 'none',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden' as const,
        opacity: 0.25,
        filter: 'blur(2px)',
        pointerEvents: 'none' as const,
        zIndex: 0
    } : {
        position: 'absolute' as const,
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '897px',
        height: '1687px',
        opacity: 0.25,
        filter: 'blur(2px)',
        pointerEvents: 'none' as const,
        zIndex: 0
    };

    const breakImgStyles = isMobile ? {
        position: 'absolute' as const,
        top: '-22vh',
        left: 0,
        width: '100%',
        height: '150vh',
        objectFit: 'cover' as const,
        objectPosition: 'top center' as const
    } : {
        width: '100%',
        height: '100%',
        objectFit: 'contain' as const
    };

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;500;600&family=Crimson+Text:wght@400;600&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div style={{
                background: '#000',
                color: '#9ba3b0',
                minHeight: '100vh',
                fontFamily: "'Crimson Text', Georgia, serif",
                position: 'relative',
                overflow: 'hidden'
            }}>

                {/* Subtle fragments - static */}
                <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 4 }}>
                    {[
                        {x:15,y:28,c:'#9a7b9a',s:2},
                        {x:72,y:38,c:'#b06080',s:3},
                        {x:38,y:55,c:'#8b6b9a',s:2},
                        {x:85,y:72,c:'#9a7b9a',s:2},
                        {x:25,y:85,c:'#b06080',s:3}
                    ].map((f,i) => (
                        <div
                            key={i}
                            style={{
                                position:'absolute',
                                left:`${f.x}%`,
                                top:`${f.y}%`,
                                width:`${f.s}px`,
                                height:`${f.s}px`,
                                background:f.c,
                                borderRadius:'50%',
                                boxShadow:`0 0 12px ${f.c}`,
                                opacity:0.4
                            }}
                        />
                    ))}
                </div>

                {/* Mouse cursor glow */}
                <div style={{
                    position: 'fixed',
                    left: mousePos.x,
                    top: mousePos.y,
                    width: '600px',
                    height: '600px',
                    transform: 'translate(-50%,-50%)',
                    background: 'radial-gradient(circle, rgba(80,50,90,0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 2,
                    transition: 'opacity 0.3s'
                }} />

                {/* Background break image */}
                <div style={svgStyles}>
                    <img
                        src={Break}
                        alt=""
                        aria-hidden="true"
                        style={breakImgStyles}
                    />
                </div>

                {/* Main content */}
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <Navigation />
                    <Hero />
                    <Features />
                    <GameInfo />
                    <Devlog />
                    <Contact />
                </div>

                {/* Scrollbar styling */}
                <style>{`
          * {
            scrollbar-width: thin;
            scrollbar-color: rgba(139,107,154,0.4) rgba(0,0,0,0.3);
          }
          *::-webkit-scrollbar {
            width: 8px;
          }
          *::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.3);
          }
          *::-webkit-scrollbar-thumb {
            background: rgba(139,107,154,0.4);
            border-radius: 4px;
          }
          
          body {
            overflow-x: hidden;
          }
        `}</style>
            </div>
        </>
    );
}