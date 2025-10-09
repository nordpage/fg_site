import React from "react";
import styles from "./styles.module.css";
import unity from "../../assets/unity.svg";
import blender from "../../assets/blender.svg";
import gitea from "../../assets/gitea.svg";
import wwise from "../../assets/wwise.svg";

const About: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
        <div className={styles.container}>
            <div className={styles.aboutText}>
                <h2>О Flutterra Games</h2>
                <p>
                    Я работаю над созданием игр на Unity, исследуя атмосферу, визуальные решения и взаимодействие систем.
                </p>
                <p>Windfall — мой основной проект, где я совмещаю программирование, дизайн и концепцию мира.</p>
                <p>Мне интересны живые, стилизованные миры, в которых технологии остаются за кулисами, а игрок чувствует историю и присутствие.</p>
            </div>
            <div className={styles.aboutLogo}>
                <img src={unity} alt="Unity Engine Logo"/>
                <img src={blender} alt="Blender Logo"/>
                <img src={wwise} alt="Wwise Logo"/>
                <img src={gitea} alt="Gitea Logo"/>
            </div>
        </div>
    </section>
  );
};

export default About;
