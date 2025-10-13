export default function Windfall(){
    return (
        <section id="windfall">
            <div className="container stack">
                <h2 className="reveal">Windfall</h2>

                <div className="card reveal" style={{padding:24, background:"rgba(16,21,29,.75)"}}>
                    <div className="stack">
                        <p>
                            Windfall — атмосферная игра о ведьме, живущей в глухом северном лесу. Вместе со своим осликом она путешествует по диким землям, собирает травы, варит зелья и переживает капризы природы.
                            Здесь нет спешки — только холодный ветер, магия и тяжёлое дыхание мира, забытого богами.
                        </p>

                        <div className="stack" style={{gap:16}}>
                            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
                                <div className="card" style={{padding:16}}>
                                    <strong>Жанр</strong><br/>
                                    <span className="muted">выживание, исследование, атмосфера</span>
                                </div>
                                <div className="card" style={{padding:16}}>
                                    <strong>Платформы</strong><br/>
                                    <span className="muted">Windows (демо), WebGL; Unity</span>
                                </div>
                                <div className="card" style={{padding:16}}>
                                    <strong>Статус</strong><br/>
                                    <span className="muted">в активной разработке</span>
                                </div>
                                <div className="card" style={{padding:16}}>
                                    <strong>Ключевые элементы</strong><br/>
                                    <span className="muted">ремёсла, алхимия, выживание, исследование, осёл-компаньон</span>
                                </div>
                            </div>

                            <div className="cluster" style={{gap:16, overflowX:"auto"}}>
                                {["wf_1.jpg","wf_2.jpg","wf_3.jpg"].map((f,i)=>(
                                    <figure key={i}
                                            className="card"
                                            style={{ minWidth: 280, maxWidth: 380, overflow:"hidden"}}
                                    >
                                        <img src={`/assets/${f}`} alt={`Кадр Windfall ${i+1}`} loading="lazy" />
                                        <figcaption style={{padding:"10px 12px"}} className="muted">
                                            {i===0 && "Дом в снегу"}
                                            {i===1 && "Ветер на перевале"}
                                            {i===2 && "Ночь в лесу"}
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        </div>

                        
                    </div>
                </div>

            </div>
        </section>
    );
}