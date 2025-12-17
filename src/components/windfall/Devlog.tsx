import Badge from './Badge';
import styles from './Devlog.module.css';

const devlogEntries = [
    {
        date: '09.10.25',
        title: 'Визуальные тесты: тени и пепел',
        tag: 'Art'
    },
    {
        date: '03.10.25',
        title: 'Первая сборка: телега и дорога',
        tag: 'Build'
    },
    {
        date: '28.09.25',
        title: 'Усталость, холод, отчаяние',
        tag: 'Code'
    }
];

export default function Devlog() {
    return (
        <section className={styles.devlog}>
            <div className={styles.container}>
                <Badge>Дорожные записи</Badge>

                <div className={styles.grid}>
                    {devlogEntries.map((entry, i) => (
                        <a
                            key={i}
                            href="#"
                            className={styles.card}
                            onClick={(e) => e.preventDefault()}
                        >
                            <div className={styles.tag}>{entry.tag}</div>
                            <div className={styles.date}>{entry.date}</div>
                            <div className={styles.title}>{entry.title}</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}