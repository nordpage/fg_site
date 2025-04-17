import styles from "./styles.module.css";
import React from "react";

const Contacts : React.FC = () => {
    return (
        <section>
            <h2>Контакты</h2>
            <p className={styles.subtext}>Связаться со мной напрямую — без форм и колдовства:</p>
            <p>Telegram: <a href="https://t.me/flutterra_games" target="_blank">@flutterra_games</a></p>
            <p>Email: <a href="mailto:info@flutterra.app">info@flutterra.app</a></p>
        </section>
    );
};

export default Contacts;