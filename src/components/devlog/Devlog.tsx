import styles from "./styles.module.css";
import React from "react";

const Devlog : React.FC = () => {
    return (
        <section className={styles.devlogSection}>
            <h2>Devlog</h2>
            <div className={styles.devlogBox}>
                <div className={styles.devlogEntry}>
                    <h3>Колеса крутятся, тележка мутится...</h3>
                    <p className={styles.date}>15 апреля 2025</p>
                    <p>
                        <div>
                            Создаю систему движения тележки. Она будет работать на основе Vehicle3d и Wheel3d. Будет
                            возможность управления самой тележкой и вне ее - как персонаж от первого лица.
                        </div>
                    </p>
                </div>
                <div className={styles.devlogEntry}>
                    <h3>Создание системы зельеварения</h3>
                    <p className={styles.date}>09 апреля 2025</p>
                    <p>
                        <div>Шейдеры, частицы, сгоревшие нервные клетки - и система зельеварения почти готова.</div>
                        <div>
                            В ней будет:
                            <ul>
                                <li>Смешивание жидкостей</li>
                                <li>Нарезание и добавление твердых ингредиентов (коренья, грибы)</li>
                                <li>Измельчение в ступке трав</li>
                                <li>Cыпучие ингредиенты</li>
                                <li>Перемешивание зелья ложкой</li>
                                <li>Доведение зелья до кипения</li>
                                <li>и другое...</li>
                            </ul>
                        </div>
                    </p>
                </div>
                <div className={styles.devlogEntry}>
                    <h3>Образцовый огород на крыше</h3>
                    <p className={styles.date}>17 апреля 2025</p>
                    <p>
                        <div>
                            В этом обновлении я добавила возможность выращивания растений на крыше тележки. Для этого
                            я создала систему полива и удобрения, а также добавила несколько новых растений, которые
                            можно вырастить.
                        </div>
                    </p>
                </div>
            </div>

        </section>
    );
};

export default Devlog;