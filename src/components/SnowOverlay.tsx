import { CSSProperties } from "react";

/**
 * Лёгкий “снег” без библиотек.
 * Уважает prefers-reduced-motion: уменьшает интенсивность.
 */
export default function SnowOverlay(){
    const motionOK = window.matchMedia?.("(prefers-reduced-motion: no-preference)").matches ?? true;
    const density = motionOK ? 140 : 50;

    const style: CSSProperties = {
        position:"absolute", inset:0, pointerEvents:"none", zIndex:0,
        backgroundImage: `radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,.35) 50%, transparent 51%),
                      radial-gradient(2px 2px at 80px 70px, rgba(255,255,255,.25) 50%, transparent 51%),
                      radial-gradient(2px 2px at 140px 110px, rgba(255,255,255,.3) 50%, transparent 51%)`,
        backgroundSize: "200px 200px, 300px 300px, 400px 400px",
        animation: "snowMove 18s linear infinite",
        opacity:.35
    };

    return (
        <>
            <style>{`
        @keyframes snowMove {
          0%   { background-position: 0px 0px, 0px 0px, 0px 0px; }
          100% { background-position: 0px ${density}px, 0px ${density}px, 0px ${density}px; }
        }
      `}</style>
            <div style={style} aria-hidden />
        </>
    );
}