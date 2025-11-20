import styles from './contact.module.css'

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1 className={styles.title}>Get in Touch</h1>
                <p className={styles.subtitle}>We'd love to hear from you</p>
            </div>

            <div className={styles.content}>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h2 className={styles.sectionTitle}>Contact Information</h2>

                        <div className={styles.infoItem}>
                            <div className={styles.icon}>📧</div>
                            <div>
                                <h3>Email</h3>
                                <p>info@trimodels.com</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.icon}>📱</div>
                            <div>
                                <h3>Phone</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.icon}>📍</div>
                            <div>
                                <h3>Address</h3>
                                <p>123 Fashion Avenue<br />New York, NY 10001</p>
                            </div>
                        </div>

                        <div className={styles.social}>
                            <h3>Follow Us</h3>
                            <div className={styles.socialLinks}>
                                <a href="#" className={styles.socialLink}>Instagram</a>
                                <a href="#" className={styles.socialLink}>Facebook</a>
                                <a href="#" className={styles.socialLink}>Twitter</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <h2 className={styles.sectionTitle}>Send us a Message</h2>
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input type="text" id="name" name="name" required className={styles.input} />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input type="email" id="email" name="email" required className={styles.input} />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject" className={styles.label}>Subject</label>
                                <input type="text" id="subject" name="subject" required className={styles.input} />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea id="message" name="message" rows={6} required className={styles.textarea}></textarea>
                            </div>

                            <button type="submit" className={styles.button}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
