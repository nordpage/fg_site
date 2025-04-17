import React from "react";
import styles from "./styles.module.css";

const About: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutText}>
        <h2>О Flutterra Games</h2>
        <p>
          Flutterra Games — это я, Анастасия. Делаю игры с ведьмовским вайбом и без спешки.
          Люблю детали, атмосферу и когда игроку хочется остаться в игре подольше.
        </p>
        <p>
          Все проекты создаются с помощью движка <strong>Godot</strong>, потому что я люблю open source
          и не люблю подписки.
        </p>
      </div>
        <div className={styles.aboutLogo}>
            <img src="https://godotengine.org/assets/press/icon_color.svg" alt="Godot Engine Logo"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg" alt="Blender Logo"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Gitea_Logo.svg" alt="Gitea Logo"/>
        </div>
    </section>
  );
};

export default About;
