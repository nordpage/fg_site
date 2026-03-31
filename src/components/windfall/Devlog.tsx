import Badge from './Badge';
import styles from './Devlog.module.css';

const devlogEntries = [
    {
        date: '09.10.25',
        title: 'Пост-процессинг',
        description: 'Создаю атмосферу через образы',
        tag: 'Art'
    },
    {
        date: '03.10.25',
        title: 'Первая сборка: телега и дорога',
        description: 'Функционал движения осла с телегой. Переключение контроллеров игрок <-> телега',
        tag: 'Build'
    },
    {
        date: '28.09.25',
        title: 'Усталость, холод, отчаяние',
        description: 'Сбалансировала статы для наибольшего накала эмоций',
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
                            <div className={styles.meta}>
                                <div className={styles.tag}>{entry.tag}</div>
                                <div className={styles.date}>{entry.date}</div>
                            </div>
                            <div className={styles.title}>{entry.title}</div>
                            <div className={styles.description}>{entry.description}</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}