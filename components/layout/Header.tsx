'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    TRI MODELS
                </Link>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <Link href="/" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href="/models" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Models</Link>
                    <Link href="/about" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link href="/contact" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </nav>

                <div className={styles.actions}>
                    <Link href="/onboarding" className={styles.btnPrimary}>Join as Model</Link>
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
}
