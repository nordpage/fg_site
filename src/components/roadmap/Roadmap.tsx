import React from 'react';
import styles from "./styles.module.css";

const Roadmap : React.FC = () => {
    return (
        <section>
            <h2>Roadmap Windfall</h2>
            <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                    <div className={styles.timelineDate}>Апрель - Май 2025</div>
                    <div className={styles.timelineContent}>Базовая тележка, 3D-модель осла и прототип геймплея
                        (движение,
                        зельеварение, выращивание растений)
                    </div>
                </div>
                <div className={styles.timelineItem}>
                    <div className={styles.timelineDate}>Июнь - Июль 2025</div>
                    <div className={styles.timelineContent}>Визуальные правки, интерфейс, внутриигровой цикл</div>
                </div>
                <div className={styles.timelineItem}>
                    <div className={styles.timelineDate}>Август - Сентябрь 2025</div>
                    <div className={styles.timelineContent}>Графика, сцены, анимации, подготовка первой демки</div>
                </div>
                <div className={styles.timelineItem}>
                    <div className={styles.timelineDate}>Октябрь - Ноябрь 2025</div>
                    <div className={styles.timelineContent}>Подготовка к альфа-тесту</div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;