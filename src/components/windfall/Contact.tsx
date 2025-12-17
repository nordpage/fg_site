import Badge from './Badge';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.contact}>
            <div className={styles.container}>
                <Badge>Контакты</Badge>

                <div className={styles.content}>
                    <p className={styles.email}>
                        <a
                            href="mailto:contact@windfall-game.com"
                            className={styles.link}
                        >
                            contact@windfall-game.com
                        </a>
                    </p>

                    <div className={styles.footer}>
                        <p className={styles.copyright}>
                            Windfall Game © 2025
                        </p>
                        <p className={styles.tagline}>
                            "Собирая осколки, которых никогда не будет достаточно"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}