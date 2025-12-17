import styles from './Badge.module.css';

interface BadgeProps {
    children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
    return (
        <div className={styles.badge}>
            {children}
        </div>
    );
}