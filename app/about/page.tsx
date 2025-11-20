import styles from './about.module.css'

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1 className={styles.title}>About Tri Models</h1>
                <p className={styles.subtitle}>UAE's Premier Modeling Agency - Connecting Talent with Opportunity Since 2024</p>
            </div>

            <div className={styles.content}>
                <section className={styles.intro}>
                    <div className={styles.introText}>
                        <h2>Who We Are</h2>
                        <p>
                            Based in the heart of Dubai, UAE, Tri Models is a cutting-edge modeling agency dedicated to discovering and nurturing exceptional talent from across the Middle East and beyond. We bridge the gap between aspiring models and the region's most prestigious brands, fashion houses, and creative agencies.
                        </p>
                        <p>
                            Our platform combines traditional agency expertise with modern technology, making it easier than ever for models to showcase their portfolios and for clients to find the perfect talent for their projects.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Our Mission</h2>
                    <p className={styles.text}>
                        At Tri Models, we believe in empowering aspiring models and connecting them with clients who value professionalism, diversity, and creativity. Our mission is to create opportunities that transform careers and bring creative visions to life. We're committed to representing talent that reflects the rich cultural diversity of the UAE and the wider region.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Why Choose Tri Models?</h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <div className={styles.icon}>🌟</div>
                            <h3>Talent Discovery</h3>
                            <p>We showcase diverse models from Dubai, Abu Dhabi, and across the UAE, making it easy for clients to find the perfect fit for their campaigns.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.icon}>🤝</div>
                            <h3>Professional Connections</h3>
                            <p>Our platform facilitates seamless communication between models and clients, ensuring smooth collaborations and successful projects.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.icon}>📈</div>
                            <h3>Career Growth</h3>
                            <p>We provide models with the exposure and opportunities they need to build successful careers in the competitive UAE fashion and modeling industry.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.icon}>🌍</div>
                            <h3>Regional Expertise</h3>
                            <p>Deep understanding of the UAE market and connections with leading brands, fashion events, and creative agencies across the Emirates.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.icon}>💼</div>
                            <h3>Industry Standards</h3>
                            <p>We maintain the highest professional standards, ensuring all our models and clients receive exceptional service and support.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.icon}>✨</div>
                            <h3>Digital Innovation</h3>
                            <p>Our modern platform makes portfolio management, model discovery, and booking seamless and efficient for everyone involved.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Our Values</h2>
                    <ul className={styles.list}>
                        <li><strong>Diversity & Inclusion:</strong> We celebrate models of all backgrounds, sizes, and styles, reflecting the multicultural fabric of the UAE.</li>
                        <li><strong>Professionalism:</strong> Every profile is carefully reviewed to ensure quality, authenticity, and adherence to industry standards.</li>
                        <li><strong>Transparency:</strong> We believe in clear communication and fair practices for both models and clients.</li>
                        <li><strong>Innovation:</strong> We continuously improve our platform to provide the best experience possible in the digital age.</li>
                        <li><strong>Integrity:</strong> We operate with honesty and respect, building trust with models, clients, and partners.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Our Services</h2>
                    <div className={styles.services}>
                        <div className={styles.service}>
                            <h3>For Models</h3>
                            <ul>
                                <li>Professional portfolio hosting</li>
                                <li>Exposure to top UAE brands</li>
                                <li>Career guidance and support</li>
                                <li>Booking management</li>
                                <li>Industry networking opportunities</li>
                            </ul>
                        </div>
                        <div className={styles.service}>
                            <h3>For Clients</h3>
                            <ul>
                                <li>Advanced model search and filtering</li>
                                <li>Direct communication with talent</li>
                                <li>Portfolio reviews and comparisons</li>
                                <li>Booking coordination</li>
                                <li>Professional consultation services</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.location}>
                    <h2 className={styles.sectionTitle}>Located in Dubai, UAE</h2>
                    <p className={styles.text}>
                        Strategically positioned in Dubai, we're at the center of the Middle East's thriving fashion and entertainment industry. Our location allows us to serve clients across the UAE, GCC, and international markets, while providing our models with access to some of the world's most exciting opportunities.
                    </p>
                </section>

                <section className={styles.cta}>
                    <h2>Ready to Get Started?</h2>
                    <p>Whether you're a model looking to showcase your talent or a client searching for the perfect face for your campaign, we're here to help.</p>
                    <div className={styles.buttons}>
                        <a href="/onboarding" className={styles.button}>Become a Model</a>
                        <a href="/models" className={styles.buttonOutline}>Browse Models</a>
                    </div>
                </section>
            </div>
        </div>
    )
}
