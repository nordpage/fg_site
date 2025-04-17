import styles from "./styles.module.css";
import React from "react";
import logo from "../../assets/FG_Witch_logo.svg";

const phrases = [
  "Сегодня ведьма собирает мяту и не ругается на билд.",
  "Зелье удачи почти готово. Осталось собрать билд.",
  "А вы когда-нибудь писали код в тележке?",
  "Godot — выбор ведьм, инди-разработчиков и свободных душ.",
  "Flutterra пишет код, когда не выращивает шалфей.",
  "Ведьма - не профессия. Это способ делать что хочешь в одиночку.",
  "Заходят в бар ведьма, осел и разработчик..."
];


const Hero: React.FC = () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    return (
        <header className={styles.hero}>
            <img src={logo} alt="Логотип" className={styles.heroLogo}/>
            <p className={styles.heroPhrase}>{randomPhrase}</p>
        </header>
    );
}

export default Hero;
