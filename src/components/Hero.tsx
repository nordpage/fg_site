
export default function Hero(){
    return (
        <header id="hero" style={{ position:"relative" }}>
            <div
                className="container"
                style={{
                    minHeight: "72vh",
                    display:"grid",
                    alignItems:"center",
                    position:"relative",
                }}
            >
                {/* фон */}
                <div
                    aria-hidden
                    style={{
                        position:"absolute", inset:0, zIndex:0,
                        backgroundImage: `
      url(../assets/header-dark.png)
    `,
                        backgroundSize:"cover",
                        backgroundPosition:"center 40%",
                        filter:"contrast(110%) saturate(90%) brightness(80%)",
                    }}
                />

                {/* контент */}
                <div style={{ position:"relative", zIndex:1, maxWidth: 800 }} className="reveal">
                    <h1>Игры, в которых важна атмосфера</h1>
                    <p style={{fontSize:"18px"}}>
                        Я разрабатываю независимые проекты на Unity — с вниманием к свету, звуку и тишине.
                        <br/> <span className="muted">Windfall — мой текущий проект о выживании и одиночестве.</span>
                    </p>
                    <div className="cluster" style={{marginTop:16}}>
                        <a className="btn" href="#windfall">Смотреть Windfall</a>
                        <a className="link" href="#devlog">Девлог</a>
                    </div>
                </div>
            </div>
        </header>
    );
}