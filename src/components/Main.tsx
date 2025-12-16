import { useState, useEffect } from 'react';
import { MapPin, Beaker, Sprout, Skull, Sparkles } from 'lucide-react';
import Break from '../assets/break.svg';

export default function DarkShatteredSite() {
    const [, setScrollY] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const styles = {
        body: {
            background: '#000',
            color: '#9ba3b0',
            minHeight: '100vh',
            fontFamily: "'Crimson Text', Georgia, serif",
            position: 'relative' as const,
            overflow: 'hidden' as const
        },
        gradient: {
            position: 'fixed' as const,
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 20%, rgba(40,20,50,0.3) 0%, transparent 60%)',
            pointerEvents: 'none' as const,
            zIndex: 0
        },
        crash: {
            backgroundImage: `url(${Break})`,
            position: 'fixed' as const,
            pointerEvents: 'none' as const,
            zIndex: 0
        },
        vignette: {
            position: 'fixed' as const,
            inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.7) 100%)',
            pointerEvents: 'none' as const,
            zIndex: 1
        },
        cursor: {
            position: 'fixed' as const,
            left: mousePos.x,
            top: mousePos.y,
            width: '600px',
            height: '600px',
            transform: 'translate(-50%,-50%)',
            background: 'radial-gradient(circle, rgba(80,50,90,0.08) 0%, transparent 70%)',
            pointerEvents: 'none' as const,
            zIndex: 2,
            transition: 'opacity 0.3s'
        },
        nav: {
            position: 'sticky' as const,
            top: 0,
            padding: '24px 0',
            backdropFilter: 'blur(20px)',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 100%)',
            borderBottom: '1px solid #8b6b9a40',
            zIndex: 50
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 40px'
        }
    };

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Crimson+Text:wght@400;600&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div style={styles.body}>

                {/* Subtle fragments - static */}
                <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 4 }}>
                    {[{x:15,y:28,c:'#9a7b9a',s:2},{x:72,y:38,c:'#b06080',s:3},{x:38,y:55,c:'#8b6b9a',s:2},{x:85,y:72,c:'#9a7b9a',s:2},{x:25,y:85,c:'#b06080',s:3}].map((f,i) => (
                        <div key={i} style={{ position:'absolute', left:`${f.x}%`, top:`${f.y}%`, width:`${f.s}px`, height:`${f.s}px`, background:f.c, borderRadius:'50%', boxShadow:`0 0 12px ${f.c}`, opacity:0.4 }} />
                    ))}
                </div>

                <div style={{ position: 'relative', zIndex: 10 }}>
                    <nav style={styles.nav}>
                        <div style={{ ...styles.container, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Skull size={18} style={{ color: '#8b6b9a', opacity: 0.8 }} />
                                <div style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '4px', color: '#a8adb8', textTransform: 'uppercase', fontFamily: "'Work Sans', sans-serif" }}>Flutterra</div>
                            </div>
                            <div style={{ display: 'flex', gap: '36px' }}>
                                {['Journey','Windfall','Log','Contact'].map(l => <a key={l} href={`#${l.toLowerCase()}`} style={{ color:'#7a8090', textDecoration:'none', fontSize:'12px', letterSpacing:'2px', textTransform:'uppercase', fontWeight:500, fontFamily:"'Work Sans', sans-serif" }}>{l}</a>)}
                            </div>
                        </div>
                    </nav>
                    <div style={{ position: 'relative' }}>

                        <div style={{
                            position: 'absolute',
                            top: '20%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '897px',
                            height: '1687px',
                            opacity: 0.25,
                            filter: 'blur(2px)',
                            pointerEvents: 'none',
                            zIndex: 0
                        }}>
                            <img
                                src={Break}
                                alt=""
                                aria-hidden="true"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 40px' }}>
                        <div style={{ maxWidth: '900px', textAlign: 'center', zIndex: 3 }}>
                            <div style={{ fontSize:'11px', letterSpacing:'5px', color:'#8b6b9a', marginBottom:'32px', textTransform:'uppercase', fontWeight:600, fontFamily:"'Work Sans', sans-serif" }}>Год нулевой · После разлома</div>
                            <h1 style={{ fontSize:'68px', fontWeight:400, marginBottom:'40px', lineHeight:1.15, color:'#b8bcc8', fontFamily:"'Cinzel Rus', serif" }}>
                                Магия умерла.<br/>
                                <span style={{ background:'linear-gradient(135deg, #b06080 0%, #8b6b9a 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', fontWeight:500 }}>Началось странствие.</span>
                            </h1>
                            <p style={{ fontSize:'17px', color:'#7a8090', lineHeight:1.9, marginBottom:'56px', maxWidth:'680px', margin:'0 auto 56px' }}>Хтоническая катастрофа разметала силы ведьм по миру. Осталась телега, осёл, и бесконечная дорога сквозь пепел того, что было.</p>
                            <div style={{ display:'inline-flex', alignItems:'center', gap:'12px', padding:'16px 36px', background:'rgba(139, 107, 154, 0.18)', border:'1px solid rgba(139, 107, 154, 0.4)', color:'#a8adb8', fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase', fontWeight:600, cursor:'pointer', fontFamily:"'Work Sans', sans-serif" }}>
                                <MapPin size={14} /> В путь
                            </div>
                        </div>
                    </section>

                    <section style={{ padding: '140px 40px', background: 'linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 100%)'}}>
                        <div style={styles.container}>
                            <div style={{ display:'inline-block', padding:'6px 14px', background:'rgba(20, 20, 25, 0.8)', border:'1px solid #8b6b9a59', fontSize:'10px', letterSpacing:'3px', color:'#8b6b9a', marginBottom:'48px', textTransform:'uppercase', fontWeight:600, fontFamily:"'Work Sans', sans-serif" }}>Что осталось</div>
                            <div style={{ display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:'80px' }}>
                                <div>
                                    <h2 style={{ fontSize:'38px', fontWeight:400, marginBottom:'36px', lineHeight:1.3, color:'#b8bcc8', fontFamily:"'Cinzel Rus', serif" }}>Когда враги забрали силу,<br/>остались только дороги</h2>
                                    <p style={{ fontSize:'16px', lineHeight:2, color:'#8a92a0', marginBottom:'28px' }}>Я создаю игры о потере и поиске. Windfall — история ведьмы, лишённой магии, которая странствует на телеге с ослом, собирая осколки того, кем она была.</p>
                                    <p style={{ fontSize:'15px', lineHeight:2, color:'#6a7280' }}>Здесь нет героизма. Только выживание, тяжёлая работа и долгий путь сквозь мёртвые земли.</p>
                                </div>
                                <div style={{ display:'grid', gap:'14px' }}>
                                    {[{i:<MapPin size={18}/>,l:'Бесконечная дорога',d:'Кочевой роуд-муви'},{i:<Beaker size={18}/>,l:'Алхимия выживания',d:'Зелья из того, что найдёшь'},{i:<Sprout size={18}/>,l:'Сад в телеге',d:'Травы растут медленно'},{i:<Sparkles size={18}/>,l:'Осколки силы',d:'Разбросаны по миру'}].map((it,idx) => (
                                        <div key={idx} style={{ padding:'20px', background:'linear-gradient(135deg, rgba(139, 107, 154, 0.12) 0%, #14141e99 100%)', border:'1px solid #8b6b9a40' }}>
                                            <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'8px', color:'#9a7b9a' }}>
                                                {it.i}
                                                <span style={{ fontSize:'13px', fontWeight:500, color:'#a8adb8', fontFamily:"'Work Sans', sans-serif" }}>{it.l}</span>
                                            </div>
                                            <div style={{ fontSize:'12px', color:'#6a7280', paddingLeft:'28px' }}>{it.d}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                        </div>
                    </div>
                    <section style={{ padding:'140px 40px', background:'linear-gradient(180deg, rgba(139,107,154,0.03) 0%, transparent 50%, rgba(139,107,154,0.03) 100%)' }}>
                        <div style={styles.container}>
                            <div style={{ textAlign:'center', marginBottom:'100px' }}>
                                <h2 style={{ fontSize:'64px', fontWeight:400, marginBottom:'16px', letterSpacing:'3px', color:'#b8bcc8', textTransform:'uppercase', fontFamily:"'Cinzel', serif" }}>Windfall</h2>
                                <div style={{ width:'160px', height:'2px', background:'linear-gradient(90deg, transparent, #8b6b9a, transparent)', margin:'0 auto 24px' }} />
                                <p style={{ fontSize:'12px', letterSpacing:'4px', color:'#7a8090', textTransform:'uppercase', fontWeight:500, fontFamily:"'Work Sans', sans-serif" }}>Хтонический роуд-муви</p>
                            </div>
                            <div style={{ padding:'70px', background:'#0f0f14d9', border:'1px solid rgba(176,96,128,0.53)', position:'relative' }}>
                                <div style={{ position:'absolute', top:'-1px', left:'-1px', width:'80px', height:'80px', borderTop:'3px solid #b0608099', borderLeft:'3px solid rgba(176,96,128,0.6)' }} />
                                <div style={{ position:'absolute', bottom:'-1px', right:'-1px', width:'80px', height:'80px', borderBottom:'3px solid rgba(176,96,128,0.6)', borderRight:'3px solid rgba(176,96,128,0.6)' }} />
                                <p style={{ fontSize:'21px', lineHeight:1.9, color:'#9ba3b0', marginBottom:'56px', textAlign:'center', maxWidth:'800px', margin:'0 auto 56px' }}>Деревня мертва. Магия разметана. Телега скрипит под весом того немногого, что осталось. Впереди — только дорога, осёл и ящик с травами.</p>
                                <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'16px', marginBottom:'56px' }}>
                                    {[{l:'Жанр',v:'Survival · Exploration'},{l:'Тон',v:'Dark · Melancholic'},{l:'Платформа',v:'Win · Mac'},{l:'Движок',v:'Unreal Engine'}].map((it,i) => (
                                        <div key={i} style={{ padding:'20px', background:'#8b6b9a1a', border:'1px solid #8b6b9a40', textAlign:'center' }}>
                                            <div style={{ fontSize:'9px', letterSpacing:'2.5px', color:'#7a8090', marginBottom:'10px', textTransform:'uppercase', fontWeight:600, fontFamily:"'Work Sans', sans-serif" }}>{it.l}</div>
                                            <div style={{ fontSize:'13px', color:'#a8adb8' }}>{it.v}</div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ padding:'36px', background:'rgba(10,10,15,0.7)', border:'1px solid rgba(139,107,154,0.3)', marginBottom:'40px' }}>
                                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'20px' }}>
                                        <span style={{ fontSize:'11px', letterSpacing:'3px', color:'#8b6b9a', textTransform:'uppercase', fontWeight:600, fontFamily:"'Work Sans', sans-serif" }}>Собрано осколков</span>
                                        <span style={{ fontSize:'11px', color:'#7a8090', fontFamily:'monospace' }}>3 / 8</span>
                                    </div>
                                    <div style={{ height:'6px', background:'rgba(139,107,154,0.2)', overflow:'hidden' }}>
                                        <div style={{ width:'37.5%', height:'100%', background:'linear-gradient(90deg, #8b6b9a 0%, #b06080 100%)', boxShadow:'0 0 20px rgba(139,107,154,0.7)' }} />
                                    </div>
                                </div>
                                <div style={{ height:'340px', background:'linear-gradient(135deg, rgba(139,107,154,0.12) 0%, rgba(10,10,15,0.8) 100%)', border:'1px solid rgba(139,107,154,0.3)', display:'flex', alignItems:'center', justifyContent:'center', color:'#6a7280', fontSize:'12px', letterSpacing:'2px', textTransform:'uppercase', fontFamily:"'Work Sans', sans-serif" }}>
                                    [ Телега · Осёл · Мёртвые земли · Осколки ]
                                </div>
                            </div>
                        </div>
                    </section>

                    <section style={{ padding:'140px 40px', borderTop:'1px solid #8b6b9a33' }}>
                        <div style={styles.container}>
                            <div style={{ display:'inline-block', padding:'6px 14px', background:'rgba(20,20,25,0.8)', border:'1px solid rgba(139,107,154,0.35)', fontSize:'10px', letterSpacing:'3px', color:'#8b6b9a', marginBottom:'56px', textTransform:'uppercase', fontWeight:600, fontFamily:"'Work Sans', sans-serif" }}>Дорожные записи</div>
                            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'20px' }}>
                                {[{d:'09.10.25',t:'Визуальные тесты: тени и пепел',tag:'Art'},{d:'03.10.25',t:'Первая сборка: телега и дорога',tag:'Build'},{d:'28.09.25',t:'Усталость, холод, отчаяние',tag:'Code'}].map((e,i) => (
                                    <a key={i} href="#" style={{ padding:'32px', background:'linear-gradient(135deg, rgba(139,107,154,0.10) 0%, rgba(10,10,15,0.8) 100%)', border:'1px solid rgba(139,107,154,0.25)', textDecoration:'none', display:'block', position:'relative' }}>
                                        <div style={{ position:'absolute', top:'16px', right:'16px', padding:'4px 8px', background:'rgba(139,107,154,0.35)', fontSize:'8px', letterSpacing:'1.5px', color:'#a8adb8', textTransform:'uppercase', fontWeight:600, fontFamily:"'Work Sans', sans-serif" }}>{e.tag}</div>
                                        <div style={{ fontSize:'10px', letterSpacing:'2px', color:'#6a7280', marginBottom:'14px', fontFamily:'monospace' }}>{e.d}</div>
                                        <div style={{ fontSize:'16px', color:'#a8adb8', lineHeight:1.5 }}>{e.t}</div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section style={{
                        padding:'120px 40px 100px',
                        borderTop:'1px solid rgba(139,107,154,0.2)'
                    }}>
                        <div style={{
                            maxWidth: '1200px',
                            margin: '0 auto',
                            width: '100%'
                        }}>

                            <div style={{
                                display:'flex',
                                padding:'6px 14px',
                                background:'rgba(20, 20, 25, 0.8)',
                                border:'1px solid #8b6b9a59',
                                marginBottom:'48px',
                                maxHeight: '30px',
                                alignItems: 'center',
                                width: 'fit-content' // 👈 По ширине контента!
                            }}>
                                <p style={{
                                    fontSize:'10px',
                                    letterSpacing:'3px',
                                    color:'#8b6b9a',
                                    margin: 0,
                                    padding: 0,
                                    textTransform:'uppercase',
                                    fontWeight:600,
                                    fontFamily:"'Work Sans', sans-serif"
                                }}>
                                    Контакты
                                </p>
                            </div>

                            <div style={{ textAlign:'center' }}>
                                <p style={{ fontSize:'15px', color:'#8a92a0', marginBottom:'12px' }}>
                                    <a href="mailto:hello@flutterra.app" style={{
                                        color:'#9a7b9a',
                                        textDecoration:'none',
                                        borderBottom:'1px solid rgba(139,107,154,0.4)'
                                    }}>
                                        hello@flutterra.app
                                    </a>
                                </p>

                                <p style={{ fontSize:'15px', color:'#8a92a0', marginBottom:'80px' }}>
                                    <a href="https://itch.io/profile/flutterra" target="_blank" rel="noreferrer" style={{
                                        color:'#9a7b9a',
                                        textDecoration:'none',
                                        borderBottom:'1px solid rgba(139,107,154,0.4)'
                                    }}>
                                        itch.io/flutterra
                                    </a>
                                </p>

                                <div style={{
                                    paddingTop:'48px',
                                    borderTop:'1px solid rgba(139,107,154,0.15)',
                                    fontSize:'11px',
                                    color:'#5a5d68'
                                }}>
                                    <p style={{ margin:'0 0 12px', fontSize:'16px' }}>
                                        Flutterra Games © 2025
                                    </p>
                                    <p style={{ margin:0, fontSize:'14px', fontStyle:'italic', opacity:0.8 }}>
                                        "Собирая осколки, которых никогда не будет достаточно"
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>

                <style>{`
          @keyframes pulse { 0%,100%{opacity:0.3;transform:scale(1)} 50%{opacity:0.7;transform:scale(1.4)} }
          *{scrollbar-width:thin;scrollbar-color:rgba(139,107,154,0.4) rgba(0,0,0,0.3)}
          *::-webkit-scrollbar{width:8px}
          *::-webkit-scrollbar-track{background:rgba(0,0,0,0.3)}
          *::-webkit-scrollbar-thumb{background:rgba(139,107,154,0.4);border-radius:4px}
        `}</style>
            </div>
        </>
    );
}