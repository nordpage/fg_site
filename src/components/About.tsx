import Promo from "../assets/Promo.png";

export default function About(){
    return (
        <section id="about">
            <div className="container stack">
                <h2 className="reveal">About</h2>
                <div className="stack card reveal" style={{padding:24}}>
                    <div className="stack" style={{gap:24}}>
                        <div style={{display:"grid", gap:24, gridTemplateColumns:"1.1fr .9fr"}}>
                            <div className="stack">
                                <p>
                                    Я работаю над созданием самостоятельных игр на Unity, совмещая программирование, визуал и нарратив.
                                    Для меня важно, чтобы механика и атмосфера поддерживали друг друга, а каждая деталь имела смысл.
                                </p>
                                <p className="muted">
                                    Предпочитаю камерные проекты с медленным ритмом, выразительным светом и ощущением присутствия.
                                    Windfall — попытка поймать северный воздух, тишину и тепло дома в снегу.
                                </p>
                            </div>
                            <div style={{
                                borderRadius: "var(--radius)",
                                overflow:"hidden",
                                border:"1px solid var(--edge)",
                                background:"color-mix(in oklab, var(--bg-1), transparent 20%)"
                            }}>
                                <img src={Promo} alt="Рабочее место / кадр" loading="lazy" />
                            </div>
                        </div>
                        <hr className="hr"/>
                        <small className="muted">Разработка — мой способ рассказывать истории.</small>
                    </div>
                </div>
            </div>
        </section>
    );
}