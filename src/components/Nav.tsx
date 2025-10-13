import { useEffect, useState } from "react";

export default function Nav(){
    const [scrolled, setScrolled] = useState(false);
    useEffect(()=>{
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[]);
    return (
        <nav
            className="container"
            style={{
                position:"sticky", top:0, zIndex:50,
                paddingBlock: "14px",
                backdropFilter: scrolled ? "saturate(120%) blur(6px)" : undefined,
                background: scrolled ? "color-mix(in oklab, var(--bg-0), transparent 60%)" : "transparent",
                borderBottom: scrolled ? "1px solid var(--edge)" : "1px solid transparent",
            }}
            aria-label="Primary"
        >
            <div className="cluster" style={{justifyContent:"space-between"}}>
                <a href="#hero" style={{textDecoration:"none", color:"var(--fg-0)", fontWeight:700, letterSpacing:".3px"}}>
                    Flutterra Games
                </a>
                <div className="cluster">
                    <a className="link" href="#about">About</a>
                    <a className="link" href="#windfall">Windfall</a>
                    <a className="link" href="#devlog">Devlog</a>
                    <a className="link" href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}