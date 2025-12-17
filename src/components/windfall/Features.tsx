import { MapPin, Beaker, Sprout, Sparkles } from 'lucide-react';
import styles from './Features.module.css';
import Badge from './Badge';

const features = [
    { icon: MapPin, label: 'Бесконечная дорога', description: 'Кочевой роуд-муви' },
    { icon: Beaker, label: 'Алхимия выживания', description: 'Зелья из того, что найдёшь' },
    { icon: Sprout, label: 'Сад в телеге', description: 'Травы растут медленно' },
    { icon: Sparkles, label: 'Осколки силы', description: 'Разбросаны по миру' }
];

export default function Features() {
    return (
        <section className={styles.features}>
            <div className={styles.container}>
                <Badge>Что осталось</Badge>

                <div className={styles.grid}>
                    <div className={styles.text}>
                        <h2 className={styles.title}>
                            Когда враги забрали силу,<br/>остались только дороги
                        </h2>
                        <p className={styles.description}>
                            Я создаю игры о потере и поиске. Windfall — история ведьмы,
                            лишённой магии, которая странствует на телеге с ослом,
                            собирая осколки того, кем она была.
                        </p>
                        <p className={styles.subdescription}>
                            Здесь нет героизма. Только выживание, тяжёлая работа
                            и долгий путь сквозь мёртвые земли.
                        </p>
                    </div>

                    <div className={styles.cards}>
                        {features.map((feature, idx) => (
                            <div key={idx} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <feature.icon size={18} />
                                    <span className={styles.cardLabel}>{feature.label}</span>
                                </div>
                                <div className={styles.cardDescription}>
                                    {feature.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}