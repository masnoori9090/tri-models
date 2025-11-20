import styles from './legal.module.css'

export default function TermsPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Terms of Service</h1>
                <p className={styles.date}>Last Updated: January 2025</p>
            </div>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>Agreement to Terms</h2>
                    <p>
                        By accessing or using Tri Models, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Eligibility</h2>
                    <p>To use our platform, you must:</p>
                    <ul>
                        <li>Be at least 18 years old (or have parental consent)</li>
                        <li>Provide accurate and truthful information</li>
                        <li>Comply with all applicable laws and regulations</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Model Applications</h2>
                    <h3>Application Process</h3>
                    <p>
                        When you submit a model application, you agree that:
                    </p>
                    <ul>
                        <li>All information provided is accurate and up-to-date</li>
                        <li>You own the rights to all submitted photographs</li>
                        <li>You grant us permission to display your portfolio to potential clients</li>
                        <li>Applications are subject to review and approval</li>
                    </ul>

                    <h3>Portfolio Rights</h3>
                    <p>
                        By uploading photos, you grant Tri Models a non-exclusive, worldwide license to use, display, and distribute your images for the purpose of connecting you with clients.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Client Services</h2>
                    <p>Clients using our platform agree to:</p>
                    <ul>
                        <li>Use model information only for legitimate business purposes</li>
                        <li>Respect model privacy and professional boundaries</li>
                        <li>Comply with all applicable employment and contract laws</li>
                        <li>Pay agreed-upon fees for services rendered</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Prohibited Activities</h2>
                    <p>You may not:</p>
                    <ul>
                        <li>Use the platform for any illegal purpose</li>
                        <li>Harass, abuse, or harm other users</li>
                        <li>Upload false, misleading, or inappropriate content</li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                        <li>Scrape or collect data without permission</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Fees and Payments</h2>
                    <p>
                        Tri Models may charge fees for certain services. All fees are subject to change with notice. Payment terms will be specified in separate agreements.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Termination</h2>
                    <p>
                        We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason at our discretion.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Limitation of Liability</h2>
                    <p>
                        Tri Models is not responsible for the actions of models or clients. We act as a platform to facilitate connections but are not party to any agreements between models and clients.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Governing Law</h2>
                    <p>
                        These terms are governed by the laws of the United Arab Emirates. Any disputes will be resolved in the courts of Dubai, UAE.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Contact Information</h2>
                    <p>
                        For questions about these terms, contact us at:<br />
                        Email: legal@trimodels.com<br />
                        Address: Dubai, UAE
                    </p>
                </section>
            </div>
        </div>
    )
}
