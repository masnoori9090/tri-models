import styles from './legal.module.css'

export default function PrivacyPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.date}>Last Updated: January 2025</p>
            </div>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>Introduction</h2>
                    <p>
                        Tri Models ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our modeling agency platform.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Information We Collect</h2>
                    <h3>Personal Information</h3>
                    <p>When you apply as a model or use our services, we may collect:</p>
                    <ul>
                        <li>Name, email address, and phone number</li>
                        <li>Date of birth and gender</li>
                        <li>Physical measurements (height, weight, etc.)</li>
                        <li>Photographs and portfolio images</li>
                        <li>Professional experience and skills</li>
                        <li>Social media profiles</li>
                    </ul>

                    <h3>Automatically Collected Information</h3>
                    <p>We may automatically collect:</p>
                    <ul>
                        <li>IP address and browser type</li>
                        <li>Device information</li>
                        <li>Usage data and analytics</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul>
                        <li>Process model applications and manage profiles</li>
                        <li>Connect models with potential clients</li>
                        <li>Communicate about opportunities and updates</li>
                        <li>Improve our platform and services</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Information Sharing</h2>
                    <p>
                        We may share your information with:
                    </p>
                    <ul>
                        <li><strong>Clients:</strong> Your portfolio and profile information is visible to potential clients</li>
                        <li><strong>Service Providers:</strong> Third-party services that help us operate our platform</li>
                        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Data Security</h2>
                    <p>
                        We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access your personal information</li>
                        <li>Correct inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Opt-out of marketing communications</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Contact Us</h2>
                    <p>
                        For privacy-related questions, please contact us at:<br />
                        Email: privacy@trimodels.com<br />
                        Address: Dubai, UAE
                    </p>
                </section>
            </div>
        </div>
    )
}
