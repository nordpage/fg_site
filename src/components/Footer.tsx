export default function Footer(){
    return (
        <footer id="contact" style={{ background:"var(--bg-2)", padding: 16 }}>
            <div className="container stack">
                <h2 className="reveal">Contact</h2>
                <div className=" reveal" style={{padding:24}}>
                    <p>Почта: <a className="link" href="mailto:hello@flutterra.app">hello@flutterra.app</a></p>
                    <p>Itch.io: <a className="link" href="https://itch.io/profile/flutterra" target="_blank" rel="noreferrer">flutterra</a></p>
                </div>
                <div className="muted" style={{textAlign:"center", marginTop:8}}>
                    <p>Flutterra © 2025. Сделано вручную.</p>
                    <small className="muted">“Одинокая ведьма делает вид, что это студия.”</small>
                </div>
            </div>
        </footer>
    );
}