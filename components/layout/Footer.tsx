import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <h3 className={styles.logo}>TRI MODELS</h3>
                        <p className={styles.desc}>
                            Connecting professional talent with world-class brands.
                            Discover your perfect model today.
                        </p>
                    </div>

                    <div className={styles.col}>
                        <h4>Quick Links</h4>
                        <Link href="/models">Browse Models</Link>
                        <Link href="/onboarding">Become a Model</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/contact">Contact</Link>
                    </div>

                    <div className={styles.col}>
                        <h4>Legal</h4>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                        <Link href="/admin/login" className={styles.adminLink}>Admin Login</Link>
                    </div>

                    <div className={styles.col}>
                        <h4>Follow Us</h4>
                        <div className={styles.social}>
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">TikTok</a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; 2025 Tri Models. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
