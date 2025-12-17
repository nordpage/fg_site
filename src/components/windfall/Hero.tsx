import { MapPin } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.subtitle}>
                    Год нулевой · После разлома
                </div>
                <h1 className={styles.title}>
                    Магия умерла.<br/>
                    <span className={styles.titleGradient}>Началось странствие.</span>
                </h1>
                <p className={styles.description}>
                    Хтоническая катастрофа разметала силы ведьм по миру.
                    Осталась телега, осёл, и бесконечная дорога сквозь пепел того, что было.
                </p>
                <div className={styles.cta}>
                    <MapPin size={14} /> В путь
                </div>
            </div>
        </section>
    );
}