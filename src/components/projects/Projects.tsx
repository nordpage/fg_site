import React from 'react';
import styles from "./styles.module.css";

const Projects : React.FC = () => {
    return (
        <section>
            <h2>Проекты</h2>
            <div className={styles.projectsGrid}>
                <div className={styles.projectCard}>
                    <strong>Windfall</strong>
                    <p>Ведьма путешествует по миру на тележке, выращивает травы на крыше, варит зелья и продаёт их.
                        Спокойная игра с торговлей, зельеварением и немного магии.</p>
                </div>
                <div className={styles.projectCard}>
                    <strong>Следующий проект</strong>
                    <p>Секретный, амбициозный, пока только в зельеварочном котле. Скоро что-то появится.</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;