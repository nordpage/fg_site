import { DevlogEntry } from "../types";

const entries: DevlogEntry[] = [
    { date:"2025-10-09", title:"Визуальные тесты снега и света" },
    { date:"2025-10-03", title:"Первая сборка демо-сцены" },
    { date:"2025-09-28", title:"Механика усталости и температуры" },
];

export default function Devlog(){
    return (
        <section id="devlog">
            <div className="container stack">
                <h2 className="reveal">Devlog</h2>
                <div className="stack" style={{gridTemplateColumns:"1fr 1fr 1fr", display:"grid", gap:16}}>
                    {entries.map((e, i)=>(
                        <a key={i} className="card reveal" style={{
                            padding:16, textDecoration:"none", color:"inherit", borderColor:"var(--edge)"
                        }} href={e.href ?? "#"}>
                            <small className="muted">{e.date}</small>
                            <h3 style={{marginTop:6, fontSize:20}}>{e.title}</h3>
                            {e.excerpt && <p style={{marginTop:6}}>{e.excerpt}</p>}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}