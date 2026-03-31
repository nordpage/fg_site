import styles from './GameInfo.module.css';

const gameInfo = [
    { label: 'Жанр', value: 'Survival · Exploration' },
    { label: 'Тон', value: 'Dark · Melancholic' },
    { label: 'Платформа', value: 'Win · Mac' },
    { label: 'Движок', value: 'Godot' }
];

export default function GameInfo() {
    return (
        <section className={styles.gameInfo}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Windfall</h2>
                    <div className={styles.divider} />
                    <p className={styles.subtitle}>Хтонический роуд-трип</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.cornerTL} />
                    <div className={styles.cornerBR} />

                    <p className={styles.description}>
                        Деревня мертва. Магия разметана. Телега скрипит под весом того немногого,
                        что осталось. Впереди — только дорога, осёл и ящик с травами.
                    </p>

                    <div className={styles.infoGrid}>
                        {gameInfo.map((item, i) => (
                            <div key={i} className={styles.infoCard}>
                                <div className={styles.infoLabel}>{item.label}</div>
                                <div className={styles.infoValue}>{item.value}</div>
                            </div>
                        ))}
                    </div>


                    <div className={styles.placeholder}>
                        [ Телега · Осёл · Мёртвые земли · Осколки ]
                    </div>
                </div>
            </div>
        </section>
    );
}