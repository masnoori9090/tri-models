'use client'

import { submitClientRegistration } from '@/app/actions/client-registration'
import styles from './register.module.css'

export default function ClientRegisterPage() {
    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Client Registration</h1>
                <p className={styles.subtitle}>Register your business to access our talent pool</p>

                <form action={submitClientRegistration} className={styles.form}>
                    <div className={styles.grid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="companyName" className={styles.label}>Company Name *</label>
                            <input type="text" id="companyName" name="companyName" required className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="tradeLicense" className={styles.label}>Trade License Number *</label>
                            <input type="text" id="tradeLicense" name="tradeLicense" required className={styles.input} />
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label htmlFor="industry" className={styles.label}>Industry / Business Type *</label>
                            <select id="industry" name="industry" required className={styles.select}>
                                <option value="">Select your industry</option>
                                <option value="Fashion">Fashion & Modeling</option>
                                <option value="Corporate">Corporate & Business</option>
                                <option value="Hospitality">Hospitality & F&B</option>
                                <option value="Healthcare">Healthcare & Wellness</option>
                                <option value="Retail">Retail & E-commerce</option>
                                <option value="Events">Events & Entertainment</option>
                                <option value="Media">Media & Advertising</option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Automotive">Automotive</option>
                                <option value="Technology">Technology</option>
                                <option value="Beauty">Beauty & Personal Care</option>
                                <option value="Sports">Sports & Athletics</option>
                                <option value="Education">Education</option>
                                <option value="Travel">Travel & Tourism</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="contactPerson" className={styles.label}>Contact Person *</label>
                            <input type="text" id="contactPerson" name="contactPerson" required className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="position" className={styles.label}>Position</label>
                            <input type="text" id="position" name="position" className={styles.input} placeholder="e.g. Marketing Manager" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email *</label>
                            <input type="email" id="email" name="email" required className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>Phone *</label>
                            <input type="tel" id="phone" name="phone" required className={styles.input} placeholder="+971 XX XXX XXXX" />
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label htmlFor="address" className={styles.label}>Company Address *</label>
                            <textarea id="address" name="address" required className={styles.textarea} rows={3}></textarea>
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Trade License Document *</label>
                            <div className={styles.uploadArea}>
                                <div className={styles.uploadIcon}>📄</div>
                                <p className={styles.uploadText}>
                                    <span className={styles.uploadLink}>Upload trade license</span> or paste URL
                                </p>
                                <input type="text" name="licenseUrl" placeholder="Or paste document URL here" className={styles.input} style={{ marginTop: '1rem' }} />
                            </div>
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label htmlFor="message" className={styles.label}>Additional Information</label>
                            <textarea id="message" name="message" className={styles.textarea} rows={4} placeholder="Tell us about your business and modeling needs..."></textarea>
                        </div>
                    </div>

                    <button type="submit" className={styles.submitButton}>Submit Registration</button>

                    <p className={styles.note}>
                        * All registrations are reviewed by our team. You'll receive a confirmation email within 24-48 hours.
                    </p>
                </form>
            </div>
        </div>
    )
}
