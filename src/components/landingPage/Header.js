import Link from 'next/link';
import styles from './Header.module.css';
import Logo from './Logo';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Logo src="/images/Logo texte.png" alt="Logo" width={170} height={70} />
            </div>
            <nav className={styles.nav}>
                <Link href="#sensibiliser" className={styles.link}>Sensibiliser</Link>
                <Link href="#estimer" className={styles.link}>Estimer</Link>
                <Link href="#anticiper" className={styles.link}>Anticiper</Link>
                <Link href="/map" className={styles.links}>Démarrer une simulation</Link>
            </nav>
        </header>
    );
}

export default Header;
