import styles from './Navigation.module.css';
import Logo from '../../assets/WindfallLogo.svg'

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logo}>
                   <img src={Logo} alt="Logo" className={styles.logoIcon}/>
                </div>
                <div className={styles.links}>
                    {['Journey', 'Windfall', 'Log', 'Contact'].map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className={styles.link}
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}